# Documentación Teléfono React v 1.0 (2 feb 19:00h)

## Componentes y responsabilidades:

### Info

- Renderizar una frase (de dos) en función del estado de la llamada (calling/ended)

### Display

- Renderizar un número recibido

### Actions

- Renderizar una lista de botones pasando a los botones un texto
- Pasar acciones a los botones de la lista
- Habilitar / Deshabilitar las acciones sobre los botones
- Modificar el estado de la llamada (calling/ended)

### Action

- Renderizar un botón con un texto recibido
- Ejecutar en el click la acción recibida

### Keyboard

- Renderizar una lista de botones pasando a los botones un número o texto
- Asignar a estos botones las acciones: a)añadir número paras los numeros 0-9 b)borrar número para delete

### Key

- Renderizar un botón con un número recibido
- Cuando haya un clic sobre un botón, llamar a la acción recibida

### App

- Renderizar el componente Info
- Renderizar el componente Display
- Renderizar el componente Actions
- Renderizar el componente Keyboard
- Modificar el estado de la partida a ganado cuando se hayan acertado todas las letras de la palabra
- Modificar el estado de la partida a perdido cuando el número de fallos sea 11
- Añadir una letra al listado de letras usadas cuando se clique por primera vez en una letra
- Incrementar el número de fallos cuando la letra clicada no esté en la palabra

### TelefonoContextProvider

- Renderizar el componente App
- Almacenar las variables de estado en un hook Context (accesibles a todos sus children)

## Datos y acciones

- Número de teléfono (variable de estado) -> Context
* Añadir una número -> App la define
- Estado de la llamada (booelano) -> Context
* Modificarlo -> App lo define
- Lista de números del teclado y texto de la tecla borrar (no es de estado) -> Keyboard
- Lista de acciones y texto de los botones action (no es de estado) -> Keyboard

## Descripción de requerimientos / (Lógica)

- Sólo se verá o el botón Llamar o el botón Colgar, nunca los dos a la vez.
- No se puede introducir un número de más de 9 cifras.
- El botón Llamar sólo se puede pulsar si el número tiene 9 cifras.
- Cuando tenga 9 cifras el botón debe tener la clase "active".
- El mensaje superior "Llamando..." sólo aparece cuando se pulsa el botón "Llamar" y mientras dure la llamada.
- Usa la clase "off" para controlar su visibilidad (el elemento HTML correspondiente debe seguir estando, aunque no se vea).
- Al pulsar el botón "Llamar", éste debe desaparecer del DOM y debe aparecer en su lugar el botón "Colgar". El teclado tiene que quedar deshabilitado.
- Al pulsar el botón "Colgar", éste debe desaparecer y debe aparecer en su lugar el botón "Llamar".
- El teclado tiene que habilitarse.
- Además, se debe borrar el número de teléfono.
- Si no ocurre nada tras cinco segundos de llamada, ésta se debe colgar automáticamente.
