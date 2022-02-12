var mensaje = "Hola", 
    estado = "activo";

// Problemas de renombre con diferentes archivos con
// mismos variables

var datos = {};
datos.mensaje = "mensaje local del objeto";
datos.resultado = 120;

function saludar() {
  console.log(datos.mensaje);
  console.log(datos.resultado);
}

saludar();

// Calculos necesarios: En iteracciones evitar la pregunta de tamaño en con length en la condición
var animales = ["perro", "gato", "pez"];
var totalAnimales = animales.length;

for (let i = 0; i < totalAnimales; i++) {
  console.log(animales[i]);
}

// Objetos y funciones anónimas: Evitar el uso de funciones anónimas anidadas por cuestiones de depuración
var tienda = {
  nombre: "Tienda de las 4 esquinas",
  calcular: function(costo1, costo2) {
    return costo1 + costo2;
  },
  saludar: function() {
    var mensaje = "Hola ";
    return mensaje;
  }
};

console.log(tienda.nombre);
console.log(tienda.calcular(20, 44));
console.log(tienda.saludar());

var btnSaludar = document.getElementById("btnSaludar");

btnSaludar.addEventListener('click', function() {
  console.log(tienda.saludar());
});

// For in: Iterar en propiedades de objeto::
var persona = {
  nombre: "Francisco",
  email: "avexyk@gmail.com",
  twitter: "4v3xyk",
  saludar: function() {
    return "Hola"
  }
}

var dato = "";
for (dato in persona) {
  console.log(dato, persona[dato]);
}

// Validar objetos
var persona = {};

if (persona) {
  console.log('Persona existe');
} else {
  console.log('Persona no existe');
}

// Expresiones booleanas
var estado = true,
    resultado = "";

if (resultado) {
  console.log('continuar');
} else {
  console.log('detenerse');
}

// Operador ternario: Condición if-else en una línea | expresiones booleanas
var accion = estado ? 'continuar' :  'detenerse';

// Identico(tipo-valor) e igualdad(interpretación-forzaconversión de valores)
console.log(1 === '1');
console.log(1 == '1');

// Constructores
function Persona(nombre, apellidos) {
  this.nombre = nombre;
  this.apellidos = apellidos;
}

var persona = new Persona('Francisco', 'Javier');
console.log(persona);
console.log(persona.nombre);
console.log(persona.apellidos);

// Try and catch: Genera nuevas variables en ambientes globales
var animales = ["perros", 'gato'];

var totalAnimales = animales.length;

try {
  // Acciones a realizar por la expresión
  for (let i = 0; i < totalAnimales; i++) {

  }
} catch (error) {
  // Manejo de errores 
}

// Literales: Usar un objeto y un arreglo sin utilizar el objeto NEW
var persona = {};
persona.nombre = "Francisco";
var otraPersona = new Object();

var lista = new Array();
lista[0] = "pera";
lista[1] = "sandía";

var listaNueva = ["pera", "sandía"];