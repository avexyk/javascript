// Clases
function Pantalla(marca, modelo, pulgadas) {
  this.marca = marca;
  this.modelo = modelo;
  this.pulgadas = pulgadas;
}

Pantalla.prototype.encendido = function() {
  console.log('$(this.marca)');
}

Pantalla.prototype.volumen = function () {
  console.log('Volumen modificado');
}

Pantalla.prototype.info = function () {
  console.log('$(this.marca) de $(this.modelo)');
}

const tvSala = new Pantalla('Master', 'Oasis', 55);
const tvHabitacion = new Pantalla('Origin', 'Artemis', 80);

// Clases II
class Pantalla {
  constructor() {

  }
}

const tvSala = new Pantalla();
const tvHabitacion = new Pantalla();

// Objetos
class Pantalla {
  constructor(marca, modelo, pulgadas) {
    this.marca = marca;
    this.modelo = modelo;
    this.pulgadas = pulgadas;
  }

  encendido() {
    console.log('$(this.marca)');
  }

  volumen() {
    console.log('Volumen modificado');
  }

  info() {
    console.log("$(this.marca) de $(this.modelo)");
  }

  set peso(value) {
    this.kg = value.trim();
  }

  get peso() {
    return this.kg;
  }

}

const tvSala = new Pantalla('Master', 'Oasis', 55);
const tvHabitacion = new Pantalla('Origin', 'Artemis', 80);

// Herencia
