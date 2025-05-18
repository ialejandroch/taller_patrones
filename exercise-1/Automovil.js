

class Automovil {
    constructor(builder) {
      this.motor = builder.motor;
      this.color = builder.color;
      this.llantas = builder.llantas;
      this.sonido = builder.sonido;
      this.interiores = builder.interiores;
      this.techoSolar = builder.techoSolar;
      this.gps = builder.gps;
    }
  
    getMotor() {
      return this.motor;
    }
  
    getColor() {
      return this.color;
    }
  
    getLlantas() {
      return this.llantas;
    }
  
    getSonido() {
      return this.sonido;
    }
  
    getInteriores() {
      return this.interiores;
    }
  
    hasTechoSolar() {
      return this.techoSolar;
    }
  
    hasGps() {
      return this.gps;
    }
  }

  module.exports = Automovil;