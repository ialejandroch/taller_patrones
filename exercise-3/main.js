// Clase Mediador (Interfaz)
class Mediador {
    enviarMensaje(mensaje, usuario) {
        throw new Error("Método enviarMensaje debe ser implementado.");
    }

    registrarUsuario(usuario) {
        throw new Error("Método registrarUsuario debe ser implementado.");
    }
}

// Clase SalaDeChat (Mediador Concreto)
class SalaDeChat extends Mediador {
    constructor() {
        super();
        this.usuarios = [];
    }

    registrarUsuario(usuario) {
        this.usuarios.push(usuario);
    }

    enviarMensaje(mensaje, usuario) {
        this.usuarios.forEach(u => {
            if (u !== usuario) {
                u.recibir(mensaje);
            }
        });
    }
}

// Clase Usuario (Clase Base)
class Usuario {
    constructor(nombre, mediador) {
        if (this.constructor === Usuario) {
            throw new Error("Clase abstracta 'Usuario' no puede ser instanciada directamente.");
        }
        this.nombre = nombre;
        this.mediador = mediador;
    }

    enviar(mensaje) {
        throw new Error("Método enviar debe ser implementado.");
    }

    recibir(mensaje) {
        throw new Error("Método recibir debe ser implementado.");
    }
}

// Clase UsuarioConcreto (Usuario Específico)
class UsuarioConcreto extends Usuario {
    constructor(nombre, mediador) {
        super(nombre, mediador);
    }

    enviar(mensaje) {
        console.log(`${this.nombre} envía: ${mensaje}`);
        this.mediador.enviarMensaje(mensaje, this);
    }

    recibir(mensaje) {
        console.log(`${this.nombre} recibe: ${mensaje}`);
    }
}

// Implementación del Escenario
const sala = new SalaDeChat();

const usuario1 = new UsuarioConcreto("Alice", sala);
const usuario2 = new UsuarioConcreto("Bob", sala);
const usuario3 = new UsuarioConcreto("Charlie", sala);

// Registrando Usuarios en la Sala de Chat
sala.registrarUsuario(usuario1);
sala.registrarUsuario(usuario2);
sala.registrarUsuario(usuario3);

// Usuarios Enviando Mensajes
usuario1.enviar("Hola a todos!");
usuario2.enviar("Hola Alice!");
usuario3.enviar("Hola a ambos!");
