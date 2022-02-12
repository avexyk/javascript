// Eventos de mouse
const boton = document.querySelector('.boton');

boton.addEventListener('click', function () {
  console.log('El boton se ha pulsado');
})

boton.addEventListener('mouseover', function () {
  console.log('El mouse esta sobre el botón');
})

boton.addEventListener('mouseout', function () {
  console.log('El boton está fuera del botón');
})

// Eventos del teclado
/** 
 * keydown, keypress, keyup */

window.addEventListener('keydown', function (event) {
  // console.log('Pulsando una tecla');
  // console.log(event.key);
})

window.addEventListener('keypress', function (event) {
  // console.log('Tecla pulsada');
})

window.addEventListener('keyup', function (event) {
  // console.log('Tecla soltada');
})

// Evento de carga de documento
window.addEventListener('load', function () {
  console.log('Carga terminada');
})

// Eventos multimedia en JavaScript
const video = document.querySelector('.bostonVideo');

video.addEventListener('play', function () {
  console.log('El vídeo ha iniciado');
});

video.addEventListener('seeking', function () {
  console.log('Se esta buscando en el vídeo', this.currentTime);
});

video.addEventListener('ended', function () {
  console.log('El vídeo ha terminado');
});

// Temporizadores
// setInterval (indefinida)
// setTimeout (una vez)

var temporizador = setInterval(function () {
  setColor()
}, 2000);

setTimeout(function () {
  setColor();
}, 3000)

function setColor() {
  var pagina = document.body;
  pagina.style.backgroundColor = pagina.style.backgroundColor == "blue" ? "green" : "blue";
}

function stopChangeColor() {
  clearInterval(temporizador)
}