// Función autoinvocada
(function(){
  var app = document.getElementById('app');
  var inputCharacters = document.getElementById('number-character');

  var setting = {
    characters: parseInt(inputCharacters.value),
    symbols: true,
    numbers: true,
    uppercase: true,
    lowercase: true
  }

  var characters = {
    symbols: '! @ # $ % ^ & * ( ) _ - + = { } [ ] ; : < > , . ? / ¿',
    numbers: '0 1 2 3 4 5 6 7 8 9',
    uppercase: 'A B C D E F G H I J K L M N O P Q R S T U V W X Y Z',
    lowercase: 'a b c d e f g h i j k l m n o p q r s t u v w x y z'
  }

  // Evitar refresh
  app.addEventListener('submit', function(e){
    e.preventDefault();
  });

  app.elements.namedItem('btn-plus').addEventListener('click', function() {
    setting.characters++;
    inputCharacters.value = setting.characters;
  });

  app.elements.namedItem('btn-minus').addEventListener('click', function() {
    if(setting.characters > 5) {
      setting.characters--;
      inputCharacters.value = setting.characters;
    }
  });

  app.elements.namedItem('btn-symbols').addEventListener('click', function() {
    btnToggle(this);
    setting.symbols = !setting.symbols;
  });

  app.elements.namedItem('btn-numbers').addEventListener('click', function() {
    btnToggle(this);
    setting.numbers = !setting.numbers;
  });

  app.elements.namedItem('btn-uppercase').addEventListener('click', function() {
    btnToggle(this);
    setting.uppercase = !setting.uppercase;
  });

  app.elements.namedItem('btn-generator').addEventListener('click', function() {
    generatePassword();
  });

  app.elements.namedItem('input-password').addEventListener('click', function() {
    copyPassword();
  });

  function btnToggle(element) {
    element.classList.toggle('false');
    element.childNodes[0].classList.toggle('fa-check');
    element.childNodes[0].classList.toggle('fa-times');
  }

  function generatePassword() {
    var finalCharacters = '';
    var password = '';

    for(property in setting) {
      if(setting[property] == true) {
        finalCharacters += characters[property] + ' ';
      }
    }

    finalCharacters = finalCharacters.trim();
    finalCharacters = finalCharacters.split(' ');

    for(var i = 0; i < setting.characters; i ++) {
      password = password + finalCharacters[Math.floor(Math.random() * finalCharacters.length)];
    }

    app.elements.namedItem('input-password').value = password;

  }

  function copyPassword() {
    app.elements.namedItem('input-password').select();
    document.execCommand('copy');
    document.getElementById('alert-copy').classList.add('active');

    setTimeout(() => {
      document.getElementById('alert-copy').classList.remove('active');
    }, 2000);

  }

  generatePassword();

}())