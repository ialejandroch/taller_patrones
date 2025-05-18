const AutomovilBuilder = require('./AutomovilBuilder');

const run = () => {
        const carroPersonalizado = new AutomovilBuilder()
            .setMotor("Híbrido")
            .setColor("Gris Estrella")
            .setLlantas("Rin 18")
            .setSonido("JBL")
            .setInteriores("Cuero negro")
            .setTechoSolar(true)
            .setGps(true)
            .build();

        console.log("Automóvil Creado:");
        console.log(`Motor: ${carroPersonalizado.getMotor()}`);
        console.log(`Color: ${carroPersonalizado.getColor()}`);
        console.log(`Llantas: ${carroPersonalizado.getLlantas()}`);
        console.log(`Sistema de sonido: ${carroPersonalizado.getSonido()}`);
        console.log(`Interiores: ${carroPersonalizado.getInteriores()}`);
        console.log(`¿Techo solar? ${carroPersonalizado.hasTechoSolar()}`);
        console.log(`¿GPS? ${carroPersonalizado.hasGps()}`);
}

run();
