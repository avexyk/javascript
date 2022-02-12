// ER: Mecanismo para encontrar patrones en cadenas de texto
var regexp1 = new RegExp('abc');

// Evaluar salto de línea
var parrafo = /text1 \/n text2 /;

// Evaluar expresiones
var regexp2 = /abc/;
var result2 = regexp1.test('abcedef');
console.log(result2);

var regexp3 = /[123456789]/;
var result3 = regexp3.test('En 1914');
console.log(result3);

var regexp4 = /[0-9]/;
var result4 = regexp4.test('La altura es de 190m');
console.log(result4);

var regexp5 = /[0-9a-zA-Z]/;
var result5 = regexp5.test('Funcionan como OR cada condición la ER5');
console.log(result5);

/**
 * ER Comúnes
 * 
 * \d Cualquier número
 * \w Cualquier letra o número
 * \s Cualquier espacio en blanco incluido tabs, salto de línea o similares
 * \D Cualquier carácter que no sea un número
 * \W Cualquier carácter que no sea alfanumérico
 * \S Caulquier carácter que no sea un espacio en blanco
 * . Cualquier carácter excepto nuevas líneas
 */

// Agrupación para 30-12-1990
var regexp6 = /\d\d-\d\d-\d\d\d\d/;
var result6 = regexp6.test('30-12-1990');
console.log(result6);

// Negar patrón ^
var regexp7 = /[^01]/;
var result7 = regexp7.test('01010101010111');
console.log(result7);

// Caracteres especiales para repetir patrones
/**
 * + una o más veces pero que este presente
 * * una o más veces pero no importa si esta presente
 */
var regexp8 = /\d+/;
var result8 = regexp8.test('0');
console.log(result8);

var regexp9 = /\d*/;
var result9 = regexp9.test('');
console.log(result9);

/**
 * Patrones opcionales: Permiten identificar si un elemento aparece o no aparece. Si aparece es true y si no true n?
 */

var regexp10 = /Hola mun?do/;
var result10 = regexp10.test('Hola mudo');
console.log(result10);

/**
 * Conteo de patrones {} {1,2} {1,n}={1,} Puede existir 1 como mínimo y 2 como máximo. Cantidad de caracteres
 */

var regexp11 = /\d{1,2}-\d{1,2}-\d{4} \d{1,2}:\d{1,2}/;
var result11 = regexp11.test('30-12-1990 09:00');
console.log(result11);