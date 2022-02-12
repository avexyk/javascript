
const arr = new Array(10);
const arr1 = [];

let videoJuegos = [ 'Zelda', 'Megaman', 'Chrono Trigger' ];

console.log( { videoJuegos } );
console.log( videoJuegos );
console.log( videoJuegos[0] );

let arregloCosas = [
  true,
  false,
  123,
  'Francisco',
  1 + 2,
  function(){},
  ()=>{},
  { a: 1 },
  [ 'X', 'Megaman', 'Zero', 'Dr. Light', [
    'Dr. Willy',
    'Woodman',
  ] ],
];

console.log( arregloCosas );
console.log( arregloCosas[0] );
console.log( arregloCosas[3] );
console.log( arregloCosas[8][3] );
console.log( arregloCosas[8][4][1] );

// ================

let juegos = [ 'Zelda', 'Mario', 'Megaman', 'Chrono Trigger' ];
console.log('Largo: ', juegos.length);
console.log('Primero: ', juegos[0]);
console.log('Último: ', juegos[ juegos.length - 1 ]);

juegos.forEach( (elemento, indice, arr) => {
  console.log( {elemento, indice, arr} );
});

juegos.push( 'F-Zero' );

console.log( 'Nuevo tamaño: ', juegos.length );

// Agregar un elemento al inicio
juegos.unshift( 'FGO' );

console.log( {juegos} );

// Borrar elemento al final
let juegoBorrado = juegos.pop();

console.log( juegoBorrado );
console.log( {juegos} );

let pos = 1;

let juegosEliminados = juegos.splice( pos, 2 );
console.log( juegosEliminados, juegos );

let megamanIndex = juegos.indexOf('Megaman');
console.log( megamanIndex );
