// Crear un arreglo
var arreglo = ["Uno", "Dos", "Tres", "Cuatro"];
var arreglo2 = new Array("Uvas", "Manzanas");

// Medir y acceder
var numeros = ["Uno", "Dos", "Tres", "Cuatro"];
console.log(numeros.length);

var numero = numeros[1]
console.log(numero);

// Arreglo multidimensionales
var multi = [ arreglo, numeros];
console.log(multi);
console.log(multi[0][0]);

// Operaciones básicas en arreglos: push, pop, join

// Generación de arreglos: split(), from(), of()
var valoresHTML = Array.from(document.querySelectorAll('.valores p'));
var valores = valoresHTML.map( valor => valor.textContent );

var paises = Array.of("México", "España", "Francia");
console.log(paises);

// Ordenando arreglo
console.log(paises.sort());
console.log(paises.reverse());

// Desestructuración de arreglos
var paises = ["Georgia", "China", "Noruega", "Dinamarca"];
// var p1 = null;
// var p2 = null;
// var p3 = null;

var [p1, p2, p3] = paises;
console.log(p1, p2, p3);

// Búsqueda en arreglos in, each, buscar
for (let pais in paises) {
  console.log(paises[pais]);
}

paises.forEach((pais, index) => {
  console.log(index);
  console.log(pais);
});

var pElegido = paises.find( pais => pais == "Noruega" );
console.log(pElegido);

var paisIdioma = [
  {nombre: 'México', idioma: 'Español'},
  {nombre: 'Australia', idioma: 'Inglés'},
  {nombre: 'Francia', idioma: 'Francés'}
];

var piNumero = paisIdioma.findIndex( pi => pi.nombre.toLowerCase() == "méxico" );
var piElegido = paisIdioma.find( pi => pi.nombre.toLowerCase() == "méxico" );

console.log(piNumero);
console.log(piElegido);

// Filtrar arreglos
var filtrado = null;
filtrado = paisIdioma.filter(pi => pi.nombre == 'México');
console.log(filtrado);

// Validación de elementos de un arreglo
var menu = [
  {
    nombre: 'Ceviche',
    precio: 20,
    pais: 'Perú'
  },
  {
    nombre: 'Tacos',
    precio: 10,
    pais: 'México'
  },
  {
    nombre: 'Pasta',
    precio: 50,
    pais: 'Italia'
  },
  {
    nombre: 'Quesadillas',
    precio: 15,
    pais: 'México'
  }
]

// Un caso
result = menu.some(platillo => platillo.precio < 20);
// Todos los casos
result = menu.every(platillo => platillo.precio < 20);

console.log(result);