# Patrones de Diseño

## Ejercicio 1

**Tipo de patrón**: Creational


**Nombre del patrón**: Builder

El patrón Builder resuelve el problema al separar la construcción de un objeto complejo (Automóvil) de su representación final, permitiendo configurar parámetros opcionales (motor, color, techo solar, etc.) mediante métodos descriptivos y encadenados que evitan constructores sobrecargados, garantizan inmutabilidad al inicializar atributos solo una vez durante la construcción, y ofrecen flexibilidad para omitir o personalizar características sin necesidad de subclases o valores predeterminados, manteniendo el código limpio, escalable y fácil de mantener.

**Diagrama de Clases**

![Diagrama de Clases](./exercise-1/diagrama_1.png)

## Ejercicio 2

**Tipo de patrón:** Estructural

**Nombre del patrón:** Bridge (Puente)

_El patrón Bridge es un patrón de diseño estructural que permite dividir una clase grande o un conjunto de clases estrechamente relacionadas en dos jerarquías separadas: abstracción e implementación, que pueden desarrollarse de forma independiente._

Este ejercicio demuestra el patrón Bridge al separar la abstracción (notificaciones) de su implementación (por ejemplo, lógica de visualización específica de la plataforma). Esto permite extender cualquiera de los dos lados de manera independiente.

**Diagrama de Clases**

![Diagrama de Clases](./exercise-2/diagram_2.png)

## Ejercicio 3

**Tipo de patrón:** Comportamiento

**Nombre del patrón:** Patrón Mediador (Mediator Pattern).

Se define el Patrón Mediador para este escenario porque permite que los usuarios se comuniquen de manera centralizada a través de un mediador (Sala de Chat), eliminando la necesidad de que cada usuario mantenga referencias directas a todos los demás. Esto reduce la complejidad y facilita el mantenimiento.

Ha sido elegido porque el problema que enfrentamos es de comunicación entre múltiples objetos (usuarios) que necesitan interactuar entre sí en un entorno de chat grupal, y esto presenta un desafío de complejidad y acoplamiento.

**Diagrama de Clases**

![Diagrama de Clases](./exercise-3/diagrama_clases.png)


### Cómo ejecutar

[Node.js](https://nodejs.org/) instalado para los ejercicios 1 y 2, y [Python](https://www.python.org/) instalado para el ejercicio 3.

```bash
node exercise-1/main.js
node exercise-2/main.js
python exercise-3/main.py
```
