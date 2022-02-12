
// Objetos con pares de valores
let lenguaje = {
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

console.log( 'Nombre:', lenguaje.nombre );
console.log( 'Nombre:', lenguaje['nombre'] );
console.log( 'Autor:', lenguaje.author.main );
console.log( 'Autor:', lenguaje['author']['main'] );
console.log( 'Número de IDEs:', lenguaje.ide.length );
console.log( 'Primer IDE:', lenguaje.ide[0] );
console.log( 'Último IDE:', lenguaje.ide[ lenguaje.ide.length - 1 ] );
console.log( lenguaje );

const x = 'cli';
console.log('CLI: ', lenguaje[x] );

console.log('Ultimo valor:', lenguaje['ultimo-valor']);

// ===============

// Borrar una propiedad
delete lenguaje.framework;
console.log( lenguaje );

lenguaje.licencia = 'GPL';

// Mutación de objeto
const entriesPares = Object.entries( lenguaje );
console.log( entriesPares );

Object.freeze( lenguaje );

lenguaje.dinero = 100;

console.log( lenguaje );

const propiedades = Object.getOwnPropertyNames ( lenguaje );
const valores = Object.values( lenguaje );
console.log( propiedades, valores );