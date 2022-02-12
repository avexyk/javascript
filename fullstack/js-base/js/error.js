// Errores
// try {
//   decodeURIComponent("http://mismopopajoiaissm.com");
//   var x = y;
//   var array = new Array(1000000000000);
// } catch (error) {
//   console.log(error.message);
//   console.log(error.name);
// }

var valor1 = 10;
var valor2 = 20;

try {
  if (valor1 > valor2) {
    console.log(`${valor1}`);
  } else {
    throw new Error(`${valor2}`);
  }
} catch (error) {
  console.log(error);
}