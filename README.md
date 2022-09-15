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
  
- Con inner insertamos contenido a una etiqueta en html desde js
- Genero una pequeña estructura(templates literarios) dentro de la funcion inicicar juego, esta es la forma de implementar html con valores de nuestras variables para hacer un mix de ambas cosas.
- Creo la variable 'opcionesPersonaje', que guardara toda la estructura de HTML que se hara en JS para despues inyectar esa variable con toda la estructura como valor directamente en el HTML.

Datos curiosos:
- Cuando agrego addEventListener muchas veces estos retornan un evento(objeto) que nos dice que tecla se presiono, el valor de un input, que boton se presiono... nos da toda la informacion necesaria para hacer el manejo de ese evento por medio de alguna funcion

## Loading...