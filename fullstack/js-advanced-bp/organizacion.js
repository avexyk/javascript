// Consultas innecesarias: Lugar de los scripts
// Script arriba
window.onload = function() {
  var btnSaludar = document.getElementById("btnSaludar");

  btnSaludar.addEventListener('click', function() {
    console.log('Hola');
  });
}

// Archivos separados en carpetas exclusivas: css, img, js, libs

// Evitar la duplicidad
var cuenta = 2;
var cuentaNueva = 20+4;
var totalFinal = cuenta + cuentaNueva;

function suma(datoA, datoB) {
  var resultado = datoA + datoB;
  return resultado;
}

// Eventos: Evitar onclick=funcion en HTML
var btnSaludar = document.getElementById('btnSaludar');
btnSaludar.addEventListener('click', function() {
  console.log('Hola mundo');
});

// Bloques
var estado = true;

if (estado)
  console.log('avanzar');