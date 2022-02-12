// Modo estricto
"use strict"

// alert("Mensaje externo");
// console.log("Mensaje a la consola del navegador");

function saludar(nombre = "Javier", edad) {
  console.log('Hola ', nombre);
  console.log('Edad: ', edad);
  var resultado = nombre + edad;
  return resultado;
}

var mensaje = saludar("Fco", 30);

console.log(mensaje);

// Parámetros de tipo REST (Recibir N cantidad de parámetros)
function cocinar(ing1, ing2, ...masIng) {
  console.log('I1:', ing1);
  console.log('I2:', ing2);
  console.log('masIng', masIng);
}

cocinar("Pollo", "Tomate", "Arroz", "Frijolees", "Pescado");

// Parámetros de tipo SPREAD (Enviar N cantidad de parámetros) (parámetros que no se declaran en la estructura original de la función, sino en la invocación de esta)
function enviarCocinar(ing1, ing2, ing3, ...otros) {
  console.log('I1:', ing1);
  console.log('I2:', ing2);
  console.log('I3:', ing3);
  console.log('Otros:', otros);
}

var ingredientesBase = ["Pollo", "Tomate"];
enviarCocinar(...ingredientesBase, "Arroz", "Pescado", "Chile");

// Funciones anónimas
(
  function() {
    var mensaje = "Función anónima";
    console.log(mensaje);
  }
)()

var tipoFuncion = function () {
  var mensaje = "Función anónima otra forma"
  return mensaje;
}

console.log(tipoFuncion());


// Callbacks (Recibir funciones como parámetros)
function calcular(datoA, datoB, sumarCB, restarCB) {
  var suma = datoA + datoB;
  var restar = datoA - datoB;
  sumarCB(suma);
  restarCB(restar);
}

calcular(2, 3, function (resultado) {
  console.log('Suma: ', resultado);
}, function (resultado) {
  console.log('Resta:', resultado);
});

// Funciones Arrow | Fat Arrow | Lambda
var noSaludar = nombre => "No te saludo " + nombre;
console.log(noSaludar("FcoJ"));

var sumarMas = cantidad => cantidad + 10;
console.log(sumarMas(10));

var sumarMasCalcular = (dA, dB) => dA + dB;
console.log(sumarMasCalcular(10, 15));

var generar = (dA, dB) => {
  // Mas operaciones
  var dC = 5
  return dA+dB+dC;;
}

console.log(generar(10, 22));

var validar = ()=> {
  return "Validación correcta";
}

console.log(validar());

// Operador this [un objeto de referencia u operador]
const boton =  document.querySelector('.boton');

// boton.addEventListener('click', function () {
//   console.log(this.innerHTML);
// })

boton.addEventListener('click', ()=> {
  console.log(this)
  this.location = "http://www.google.com.mx";
})