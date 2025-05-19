from abc import ABC, abstractmethod

# Interfaz Mediador
class Mediador(ABC):
    @abstractmethod
    def enviar_mensaje(self, mensaje: str, usuario):
        pass

    @abstractmethod
    def registrar_usuario(self, usuario):
        pass

# Mediador Concreto (Sala de Chat)
class SalaDeChat(Mediador):
    def __init__(self):
        self.__usuarios = []  # Lista privada de usuarios

    def registrar_usuario(self, usuario):
        self.__usuarios.append(usuario)

    def enviar_mensaje(self, mensaje: str, usuario):
        for u in self.__usuarios:
            if u != usuario:
                u.recibir(mensaje)

# Clase Abstracta Usuario
class Usuario(ABC):
    def __init__(self, nombre: str, mediador: Mediador):
        self._nombre = nombre      # Atributo protegido
        self._mediador = mediador  # Atributo protegido

    @abstractmethod
    def enviar(self, mensaje: str):
        pass

    @abstractmethod
    def recibir(self, mensaje: str):
        pass

# Usuario Concreto
class UsuarioConcreto(Usuario):
    def enviar(self, mensaje: str):
        print(f"{self._nombre} envía: {mensaje}")
        self._mediador.enviar_mensaje(mensaje, self)

    def recibir(self, mensaje: str):
        print(f"{self._nombre} recibe: {mensaje}")

# Implementación del escenario
if __name__ == "__main__":
    sala = SalaDeChat()

    usuario1 = UsuarioConcreto("Alice", sala)
    usuario2 = UsuarioConcreto("Bob", sala)
    usuario3 = UsuarioConcreto("Charlie", sala)

    sala.registrar_usuario(usuario1)
    sala.registrar_usuario(usuario2)
    sala.registrar_usuario(usuario3)

    usuario1.enviar("Hola a todos!")
    usuario2.enviar("Hola Alice!")
    usuario3.enviar("Hola a ambos!")
