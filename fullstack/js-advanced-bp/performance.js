// JSON nacio como alternativa a XML, porque XML es más lento. Necesidad servidor PHP en ambiente servidor - cliente
$.getJSON("productos.json", function(productos) {
  console.log(productos);

  var totalProductos = productos.length;

  for (let i = 0; i < totalProductos; i++) {
    console.log(productos[i].nombre);
  }
})

var url = "urljson";

$.getJSON(url, function(clima) {
  console.log(clima);
})

// JOIN vs CAT
var animales = ["perro", "gato", "pez"];
var listaAnimales = animales.join(", ");
console.log(listaAnimales);

var nuevaLista = animales.concat();
console.log(nuevaLista);

// Rendimiento
console.time('rendimiento');
var animales = ["perro", "gato"];
var l = animales.length;

for (var i = 0; i < 1000; i++) {
  animales[i] = i;
}

console.timeEnd('rendimiento');

// Minificación: https://jscompress.com/
// Obfuscación: https://www.javascriptobfuscator.com/Javascript-Obfuscator.aspx

// JSHINT: https://jshint.com/

// Librerías:

// Testing: https://mochajs.org/
