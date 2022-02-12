// Propiedades numéricas
console.log('MAX_VALUE: ', Number.MAX_VALUE);
console.log('MIN_VALUE: ', Number.MIN_VALUE);
console.log('NEGATIVE_INFINITY: ', Number.NEGATIVE_INFINITY);
console.log('POSITIVE_INFINITY: ', Number.POSITIVE_INFINITY);
console.log('NaN: ', Number.NaN);

// Métodos numéricos
var numero = "10.30";

console.log('Number: ', Number(numero));
console.log('parseInt: ', parseInt(numero));
console.log('parseFloat: ', parseFloat(numero));
console.log('isNaN: ', isNaN(numero));
console.log('isInteger: ', Number.isInteger(numero));

numero = 3.5

// Instancias numéricas
console.log('toExponential: ', numero.toExponential());
console.log('toFixed: ', numero.toFixed());
console.log('toPrecision: ', numero.toPrecision());
console.log('toString: ', numero.toString());