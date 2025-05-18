// Builder Automovil
const Automovil = require('./Automovil');

class AutomovilBuilder {
    setMotor(motor) {
      this.motor = motor;
      return this;
    }
  
    setColor(color) {
      this.color = color;
      return this;
    }
  
    setLlantas(llantas) {
      this.llantas = llantas;
      return this;
    }
  
    setSonido(sonido) {
      this.sonido = sonido;
      return this;
    }
  
    setInteriores(interiores) {
      this.interiores = interiores;
      return this;
    }
  
    setTechoSolar(techoSolar) {
      this.techoSolar = techoSolar;
      return this;
    }
  
    setGps(gps) {
      this.gps = gps;
      return this;
    }
  
    build() {
      return new Automovil(this);
    }
  }

  module.exports = AutomovilBuilder;