// Manipula etiquetas como objetos
// Puente entre HTML y JavaScript
// BOM: browser object model
// DOM: document object model

var boton = document.getElementById('boton');
boton.addEventListener('click', function(){
  console.log(window.location.href)
})

// Propiedades y metodos DOM
var parrafos = document.getElementsByTagName('p');
var parrafosClase = document.getElementsByClassName('clase');
var principal = document.getElementsByClassName('clase')[0].textContent;

boton.style.background = "green";

var foto = document.createElement('img');
foto.src = 'foto1.jpg';
foto.name = 'foto1';
foto.width = 400;
document.body.appendChild(foto);

foto.addEventListener('click', function() {
  if (this.name === 'foto1') {
    this.src = 'foto2.jpg';
    this.name = 'foto2';
  } else {
    this.src = 'foto1.jpg';
    this.name = 'foto1';
  }
})

// Propiedades y métodos del BOM
console.log(window.innerHeight);
console.log(window.innerWidth);

localStorage.setItem('contenido', 'Código y café es una gran combinación');
console.log(contenido);

boton.addEventListener('click', function(){
  var contenido = localStorage.getItem('contenido');
  principal.innerHTML = contenido;

  window.history.forward();
  window.history.back();
  window.history.fgo(3);
})