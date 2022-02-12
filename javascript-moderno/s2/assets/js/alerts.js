
// La principal preocupación de utilizar variables var es la manipulación desde el objeto window que éstas puedan recibir al sustituir propiedades del objeto

// El let y const no sobreescriben la variables que se encuentran en el objeto window

// En JavaScript cualquier variables que no esta inicializada tendrá el valor de undefined

// console.log( miNombre );

alert('Alerta de bloqueo de JavaScript');

let nombre = prompt('Ingresa un nombre:', 'Aquí escribe tu nombre');

console.log( '***' + nombre + '***' );

const seleccion = confirm('¿Seguro de realizar la acción?');
console.log( seleccion );