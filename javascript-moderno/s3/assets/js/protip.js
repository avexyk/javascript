
// function crearPersona( nombre, apellido ) {
//   return {
//     nombre: nombre,
//     apellido: apellido
//   }
// }

// function crearPersona( nombre, apellido ) {
//   return { nombre, apellido }
// }

// const crearPersona = ( nombre, apellido ) => {
//   return { nombre, apellido  }
// }

const crearPersona = ( nombre, apellido ) => ({ nombre, apellido  });

const persona = crearPersona( 'Francisco', 'Javier' );
console.log( persona );

function imprimeArgumentos() {
  console.log( arguments );
}

const imprimeArgumentos2 = ( ...arguments ) => {
  console.log( arguments );
}

// imprimeArgumentos( true, 1, 'Francisco');
imprimeArgumentos2( true, 1, 'Francisco');

const imprimeArgumentos3 = ( edad, ...arguments ) => {
  return arguments;
}

// const argumentos = imprimeArgumentos3(10, true, false, 'Fernando', 'Hola');
// console.log( { argumentos } );

const [ numero, edad, vivo, nombre, segundoNombre ] = imprimeArgumentos3(10, true, false, 'Fernando', 'Hola');
console.log( { numero, edad, vivo, nombre, segundoNombre } );

const { apellido: nuevoApellido } = crearPersona( 'Francisco', 'Javier' );
console.log( { nuevoApellido } );

// Destructuración
const python = {
  nombre: 'Python',
  framework: 'Django',
  cli: 'pi',
  author: {
    main: 'Guido van Rossum',
    age: 65,
  },
  ide: ['PyCharm', 'Jupyter', 'Anaconda', 'Visual Studio'],
  web: {
    url: 'https://www.python.org/',
  },
  'ultimo-valor': 'Ruby',
};

// const imprimePropiedades = ( lenguaje ) => {
//   console.log( lenguaje.nombre );
// }

const imprimePropiedades = ( { nombre, framework, cli, author, edad = 0} ) => {
  console.log( { author } );
  console.log( { edad } );
}

imprimePropiedades( python );
