# SoulKlibur

<p>SoulKlibur es un pequeño videojuego web donde elegimos un personaje
para enfrenar al bot, quien tambien elige un presonaje aleatoriamente y asi tenemos un combate
con elementos como ataque. Al final el ganador de este combate sera quien posea mas victorias
dentro de los 5 intentos de atacar</p>

## Tecnologias utilizadas

<h3>Tools🔨</h3>

[![Visual Studio](https://img.shields.io/badge/-007ACC?style=flat&logo=Visual-Studio-Code&logoColor=white&link=https://github.com/Quananhle "Visual Studio")](https://github.com/Quananhle)
[![Git](https://img.shields.io/badge/-Git-black?style=flat&logo=git&link=https://github.com/Quananhle)](https://github.com/Quananhle) 
[![GitHub](https://img.shields.io/badge/-GitHub-181717?style=flat&logo=github&link=https://github.com/Quananhle)](https://github.com/Quananhle)
[![HTML5](https://img.shields.io/badge/-HTML5-E34F26?style=flat&logo=html5&logoColor=white&link=https://github.com/Quananhle/Front-End-Dev)](https://github.com/Quananhle/Front-End-Dev) 
[![CSS3](https://img.shields.io/badge/-CSS3-1572B6?style=flat&logo=css3&link=https://github.com/Quananhle/Front-End-Dev)](https://github.com/Quananhle/Front-End-Dev) 


<h3>Languages👨‍💻</h3>

[![JavaScript](https://img.shields.io/badge/-JavaScript-black?style=flat&logo=javascript&link=https://github.com/Quananhle/Front-End-Dev)](https://github.com/Quananhle/Front-End-Dev)


## Canvas apuntes
Canvas nos da la facilidad de crear un mapa por medio de lineas, circulos, rectangulos, poner texto o incluir imagenes.
Asi es como voy a poder ubicar mis personajes en un mapa dibujado por canvas.

La API de CAnvas proporciona un medio para dibujar graficos a traves de JavaScript y HTML<canvas>.


## Resumen JS

Recapitulando:

  - Tenemos 3 inputs en HTML(personajes para seleccionar), ademas tenemos un boton al que los jugadores le dan click.

  - Cuando le dan 'click' al boton seleccionar, ejecutamos la funcion seleccionarPersonajeJugador() cuyo proposito es validar cual de los 3 personajes fue seleccionado.

  - Validamos con condicionales, y asignamos los input en cada parametro para confirmar la eleccion.

LOGICA PRINCIPAL PARA EMPEZAR A EJECUTAR EL JUEGO:

--->Logica para saber tanto en HTML como en JS que personajes seleccionan nuestros jugadores.
    La logica se hace partiendo desde que nuestro jugador pueda seleccionar un personaje, 
    y ademas que JS sepa cual fue el personaje que seleccionaron  y podramos mostrar en HTML manipulando el DOM.

--->Logica tambien para seleccionar a la personaje del oponente,
    es decir que nuestro juego JS saque aleatoriamentea algun personaje para que sea el oponente con el que debe combatir el personaje del jugador.

--->Aplica la misma logica para seleccionar el ataque del jugador y oponente

--->Logica para que el personaje del jugador pierda vidas/victorias o la del oponente pierda vidas/victorias 
    dependiendo de si nuestro ataque perdio o gano contra el oponente.

--->Logica para que una vez terminado el combate se pueda reiniciar el juego

LOGICA PARTE BACKND:

--->Desarrollar la API con NodeJs y comenzar a consumirla desde el cliente en el frontend(comunicacion entre backend y frontend)   
--->Se debe crear un endpoint donde nos vamos a conectar para hacer que los usuarios cada vez que accedan a mi pagina web,
    se conecten a una lista de jugadores donde esten todos comunicados y les va a devolver su identificador unico dentro del juego(IP)

- Con inner insertamos contenido a una etiqueta en html desde js
- Genero una pequeña estructura(templates literarios) dentro de la funcion inicicar juego, esta es la forma de implementar html con valores de nuestras variables para hacer un mix de ambas cosas.
- Creo la variable 'opcionesPersonaje', que guardara toda la estructura de HTML que se hara en JS para despues inyectar esa variable con toda la estructura como valor directamente en el HTML.

Datos curiosos:
- Cuando agrego addEventListener muchas veces estos retornan un evento(objeto) que nos dice que tecla se presiono, el valor de un input, que boton se presiono... nos da toda la informacion necesaria para hacer el manejo de ese evento por medio de alguna funcion


## Lado backend
Internet es una red de muchas computadoras que estan conectadas entre si, es una red global. Hay muchas formas de comunicarse
entre estas computadoras, la mas popular entre todas es la que utilizamos cuando accedemos a la web, la estructura cliente - servidor

A lo largo de internet van a haber muchas computadoras que se comportaran como clientes o como servidores(proveedores de servicios);
Esta estructura siempre va tener interacuando a estos dos entes cliente-servidor.

Por medio del protocolo HTTP(protocolo de transferencia de hipertexto) un navegador se conecta a cualquier servidor.
La forma en que generalmente se usa el sistema cliente-servidor es que:
- El cliente es quien va a comenzar la solicitud de un recurso
- Y el servidor es quien lo va a devolver mediante una respuesta

Los verbos o métodos HTTP, están relacionados con lo que conocemos como CRUD operations (create, read, update, delete) y principalmente están hechos para realizar estas peticiones.
 - Create -> POST   :Enviar datos
 - Read -> GET      :Solicitar recursos
 - Update -> PUT
 - Delete -> DELETE

Cada pagina web tiene su propio servidor y tiene su propio nombre de dominio, Ej: (Platzi, google, wikipedia)
Cuando nos referimos a nuestra propia laptop hablamos de localhost(servidor en si mismo).

Se puede transferir todo lo que sea un archivo a traves del protocolo HTTP, como usuario voy a acceder a una url, despues hare una peticion a un servidor y el servidor me va a devolver ese archivo. Dependiendo del tipo de archivo el navegador lo mostrara en pantalla
por ej HTML.
Ademas de los archivos podemos usar la transferencia de datos por medio de un API, es decir enviar datos crudos(la informacion especifica que queremos intercambiar) EJ.

- Si yo quiero mandar informacion de la ficha de una persona:
 > { 
    Nombre: Diana,
    Edad: 27
 > }

Esto se conoce como un paquete de datos, una caja que contiene toda la informacion, de esta forma puedo solicitarle los detalles de una persona a un servidor y el servidor nos va a devolver con una estructura especifca esa respuesta.
Y cuando comenzamos a enviar y recibir datos entre el cliente - servidor surge la necesidad de estandarizar la estructura en la que estos datos viajan.

Ahi toca pensar en las reglas que el servidor establece para que los datos vayan con cierta estructura, asi como el cliente debe tener ciertos requisitos para poder conectarse a un servidor.

Para este proyecto usare <b>Node Js</b>, este toma el motor de javascript V8 que utiliza chrome. Con nodeJs voy a poder crear mi servidor, mi backend, y que este programado en Js para enviar datos, recibir datos, recibir solicitudes por medio de HTTP para que devuelva un archivo HTML que sera la pagina web del juego.

- package.json sera es el archivo que cree en la terminal con el comando npm init. Aca tenemos la referencia al archivo index.JS y el nombre del paquete, etc.
- Express.js es una libreria popular del ecosistema de nodeJs(JavaScript para el backend). Esta libreria nos permite crear servidores web de manera simple con pocas lineas de codigo
    --> Aparte de instalar la libreria tenemos que decirle a nuestro codigo que estamos usandola, asi que tambien debemos importar esa libreria.
    --> Hay que indicarle ciertas configuraciones, principalmente:
        cual es el puerto de mi servidor.(el puerto es un numero como un id, que indica a que servidor nos conectamos en una pc)
    ### Comandos para instalar
    - npm init              => para crear el archivo package.json(configuracion inicial del proyecto con npm)
    - node index.js         => para ejecutar en consola un archivo con node
    - npm install express   => Para utilizar express, instalar libreria(crea una nueva seccion en package.json -> dependencies).   

### API
Aplication Programming Interface, es la interfaz que definimos para que el servidor y el cliente esten de acuerdo en como se deben comunicar. De esta forma vamos a trabajar este proyecto:

- Tendremos un servidor central(medio de comunicacion o intermediario)
- Donde recibiremos los clientes(jugadores/usuarios)
- A cada jugador le agregaremos un id(identifiacdor) unico
- Al estar cada usuario identificado, cada uno podra emitir informacion sobre su estatus y los demas recibiran esa informacion
- por ejemplo si el jugador(A) envia cual fue el personaje que selecciono en el juego entonces los demas jugadores podran recibir esa informacion por medio de la API


## Loading...