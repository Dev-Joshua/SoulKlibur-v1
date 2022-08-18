//Variables globales:
let ataqueJugador;
let ataqueOponente;
//Ambos jugadores inician con 3 vidas. 
let vidasJugador = 3;
let vidasOponente = 3;

function iniciarJuego(){
  //Antes de todo, selecciono la seccion de ataque para escibderla en el HTML hasta que se escoja un personaje
  let sectionSelectAtaque = document.getElementById('select-ataque');
  sectionSelectAtaque.style.display = 'none';
  let sectionReiniciar = document.getElementById('reiniciar');
  sectionReiniciar.style.display = 'none';

  //El metodo document.getElementVyId() => permite llamar(seleccionar) cualquier elemento de HTML mediante un id''
  //Creamos la variable donde seleccionamos al boton de seleccionar personaje, 
  let botonPersonajeJugador = document.getElementById('boton-select-personaje');
  //Escuchar el evento click del boton(botonPersonajeJugador). 
  //cuando dan 'click' al boton, con el addEventListener() mandamos a llamar la funcion seleccionarpersonajeJugador
  botonPersonajeJugador.addEventListener('click', seleccionarPersonajeJugador);

  //Botones para seleccionar el ataque de la mascota. Llamamos las funciones cuando el usuario de "click" al boton
  let botonFuego = document.getElementById('boton-ataque-fuego');
  botonFuego.addEventListener('click', ataqueFuego);
  let botonAgua = document.getElementById('boton-ataque-agua');
  botonAgua.addEventListener('click', ataqueAgua);
  let botonTierra = document.getElementById('boton-ataque-tierra');
  botonTierra.addEventListener('click', ataqueTierra);

  let botonReiniciar = document.getElementById("boton-reiniciar");
  botonReiniciar.addEventListener('click', reiniciarJuego);
}

//Creo la funcion de seleccionarPersonajeJugador cuando den click en botonPersonajeJugador
function seleccionarPersonajeJugador(){
  //Oculto la seccion de select-personaje una vez la eligan
  let sectionSelectPersonaje = document.getElementById('select-personaje');
  sectionSelectPersonaje.style.display = 'none';
  //Cuando le damos click(selccionar) aparece la seccion select-ataque
  let sectionSelectAtaque = document.getElementById('select-ataque');
  sectionSelectAtaque.style.display = 'block';
  //Creo las variables que traeran el input de cada personaje con getElementById() que pueden elegir
  let inputAkali = document.getElementById("akali");
  let inputPyke = document.getElementById("pyke");
  let inputCronos = document.getElementById("cronos");
  //La variable permite traer la etiqueta span para cambiar su html(PERSONAJE) segun eleccion.
  let spanPersonajeJugador = document.getElementById("personaje-jugador");
  
  //Con .checked validamos que el input(radio) este seleccionado
  if(inputAkali.checked){            //SI! este input tiene la propiedad checked como true, entonces se ejecuta la funcion para mostrar en el HTML el personaje seleccionada
    spanPersonajeJugador.innerHTML = 'Akalí';
  } else if(inputPyke.checked){
    spanPersonajeJugador.innerHTML = 'Pyke';
  } else if(inputCronos.checked){
    spanPersonajeJugador.innerHTML = 'Cronos';
  } else {
    alert("¡Debes seleccionar una mascota!")
  }
  // Esta condicion solo se cumple si el jugador escoge un personaje para jugar. El pc elige y empezara el juego
    seleccionarPersonajePc();
}

function aleatorio(min, max){
  return Math.floor(Math.random() * (max - min + 1) + min);
}

//Funcion para que el bot JS del juego seleccione un personaje aleatoriamente
function seleccionarPersonajePc(){
  let personaje_aleatorio = aleatorio(1, 3);
  let spanPersonajeOponente = document.getElementById("personaje-oponente");
  
  if(personaje_aleatorio == 1){            
    spanPersonajeOponente.innerHTML = 'Akalí';
  } else if(personaje_aleatorio == 2){
    spanPersonajeOponente.innerHTML = 'Pyke';
  } else if(personaje_aleatorio == 3){
    spanPersonajeOponente.innerHTML = 'Cronos';
  } 
}

//Una vez el usuario escoja la funcion(ataque) se ejecutara el ataque aleatorio de la pc 
function ataqueFuego(){                                             
  ataqueJugador = 'FUEGO';
  ataqueAleatorioEnemigo();
}

function ataqueAgua(){
  ataqueJugador = 'AGUA';
  ataqueAleatorioEnemigo();
}

function ataqueTierra(){
  ataqueJugador = 'TIERRA';
  ataqueAleatorioEnemigo();
}

//Logica para seleccionar el ataque de la computadora(oponente), una vez seleccione se ejecuta la funcion combate para empezar el duelo
function ataqueAleatorioEnemigo() {                               
  let ataqueAleatorio = aleatorio(1, 3);

  if(ataqueAleatorio == 1) {
    ataqueOponente = 'FUEGO';
  } else if(ataqueAleatorio == 2){
    ataqueOponente = 'AGUA';
  } else{
    ataqueOponente = 'TIERRA';
  }
  combate();
}

//En esta funcion guardamos la logica de si perdimos, ganamos o empatamos.  
function combate(){
  //Aqui llamo a los span(#vidas) para cambiar la cantidad que se mostrara segun el combate
  let spanVidasJugador = document.getElementById('vidas-jugador');    
  let spanVidasOponente = document.getElementById('vidas-oponente');

  //SI pc elige lo mismo que el jugador => EMPATE
  //Como condicionales pongo los casos donde gano como jugador
  if(ataqueOponente == ataqueJugador){
    crearMensaje("¡EMPATAS!🤝");
  } else if(ataqueJugador == 'FUEGO' && ataqueOponente == 'TIERRA'){              
    crearMensaje("¡GANASTE!🍾");
    vidasOponente--;
    spanVidasOponente.innerHTML = vidasOponente                                
  } else if(ataqueJugador == 'AGUA' && ataqueOponente == 'FUEGO' ){             
    crearMensaje("¡GANASTE!🍾");
    vidasOponente--;
    spanVidasOponente.innerHTML = vidasOponente   
  } else if(ataqueJugador == 'TIERRA' && ataqueOponente == 'AGUA' ){             
    crearMensaje("¡GANASTE!🍾");
    vidasOponente--;
    spanVidasOponente.innerHTML = vidasOponente   
  } else {
    crearMensaje("¡PERDISTE!😣");
    vidasJugador--;                                                         //Si pierdo me restan una vida(--) y inserto en HTMLJugador
    spanVidasJugador.innerHTML = vidasJugador;
  }
  //Aqui revisamos las vidas una vez terminado el combate
  revisarVidas();
}

//Esta funcion preguntara a las variables de vidaJugador/oponente si estan en 0
function revisarVidas() {
  if(vidasOponente == 0) {
    //gana jugador
    crearMensajeFinal("¡Has gando el combate!🎉");
  } else if(vidasJugador == 0) {
    //gana pc
    crearMensajeFinal("¡Has perdido el combate!😣");
  }
}

//Mandamos a llamar esta funcion cuando el usuario da click en el ataque para mostrar un mensaje
//Crearmos ese mensaje con el metodo createElement y seleccionando la etiqueta('p') del documento HTML
//La variable resultado es un parametro que vamos a recibir de la funcion combate por medio de argumentos
function crearMensaje(resultado){
  let sectionMensajes = document.getElementById('mensajes')

  let parrafo = document.createElement('p');                          //Creamos un parrafo, elemento de tipo 'p'                   
  parrafo.innerHTML = `Tu personaje ataco con ${ataqueJugador}, el personaje del oponente atacó con ${ataqueOponente} => ${resultado}`; //Le insertamos texto al parrafo

  sectionMensajes.appendChild(parrafo)                                //Metemos el parrafo en la seccion de mensajes en el documento HTML
}

//Esta funcion recibe un parametro donde nos diga si perdimos o ganamos como jugador
function crearMensajeFinal(resultadoFinal){
  let sectionMensajes = document.getElementById('mensajes')

  let parrafo = document.createElement('p');                                            
  parrafo.innerHTML = resultadoFinal; 

  sectionMensajes.appendChild(parrafo)   

  //Terminado el combate desabilitamos los botones de ataque(disabled=true)
  let botonFuego = document.getElementById('boton-ataque-fuego');
  botonFuego.disabled = true;
  let botonAgua = document.getElementById('boton-ataque-agua');
  botonAgua.disabled = true;
  let botonTierra = document.getElementById('boton-ataque-tierra');
  botonTierra.disabled = true;

  let sectionReiniciar = document.getElementById("reiniciar");
  sectionReiniciar.style.display = 'block';
}

//Funcion para reiniciar el juuego cuando de click
function reiniciarJuego() {
  location.reload();                                                    //location es un objeto(ubicacion) que tiene un metodo reload()->funcion que recarga la pagina
}



//El codigo JS no se va ejecutar hasta que cargue el evento de 'load' para que todos los eleementos del HTML ya existan antes del javascript 
//window(ventana), 
window.addEventListener('load', iniciarJuego)                 






/* -----------------------------------------------------------------------------------------------------------
  Recapitulando este archivo:
  Tenemos 3 inputs en HTML(mascotas para seleccionar), ademas tenemos un boton al que los jugadores le dan click.
  Cuando le dan 'click' al boton seleccionar, ejecutamos la funcion seleccionarMascotaJugador() cuyo proposito
  Es validar cual de las 3 mascotas fue a la que seleccionaron los usuarios
  Validamos con el condicional if, y asignamos los input en cada parametro para confirmar

  LOGICA PRINCIPAL PARA EMPEZAR A EJECUTAR EL JUEGO:
--->Logica para saber tanto en HTML como en JS que mascotas seleccionan nuestros jugadores.
    La logica se hace partiendo desde que nuestro jugador pueda seleccionar una mascota, y ademas que JS sepa cual fue
   la mascota que seleccionaron  y podramos mostrar en HTML con manipulacion del DOM.
--->Logica tambien para seleccionar a la mascota del oponente, es decir que nuestro juego JS saque aleatoriamente
    a alguna de las mascotas para que sea el oponente con el que debe combatir la mascota del jugador
--->Aplica la misma logica para seleccionar el ataque del jugador y oponente
--->Logica para que la mascota del jugador pierda vidas o la del oponente pierda vidas 
    dependiendo de si nuestra ataque perdio o gano contra el oponente
--->Logica para que una vez terminado el combate se pueda reiniciar el juego
  
-->Con inner insertamos contenido a una etiqueta en html desde js
   -----------------------------------------------------------------------------------------------------------
*/