// Todas las funciones retornanvalor

function saludar( nombre ) {
  // Elementos enviados a la función
  console.log( arguments );
  console.log('Hola ' + nombre);
  return [1,2];

  console.log('Después del return');
}

const saludar2 = function() {
  console.log('Hola Mundo');
}

const saludarFlecha = () => {
  console.log( 'Función de flecha' );
}

const saludarFlecha2 = ( nombre ) => {
  console.log( 'Nombre: ' + nombre);
}

const retornoSaludar = saludar('Francisco', 30, 'México');
// saludar2();

// saludarFlecha();
// saludarFlecha2( 'Javier' );

// console.log( { retornoSaludar } );
// console.log( retornoSaludar[0], retornoSaludar[1] );

function sumar( a, b ) {
  return a + b;
}

const sumarMas = (a,b) => {
  return a + b;
}

const sumarMenos = (a,b) => a + b;

console.log( sumar(3, 4) );
console.log( sumarMenos(3, 2) );

function getAleatorio() {
  return Math.random();
}

const getRandom = () => Math.random();

console.log( getAleatorio() );
console.log( getRandom() );