//LOGICA PRINCIPAL PARA EMPEZAR A EJECUTAR EL JUEGO:


//Variables globales:
let ataqueJugador;
let ataqueOponente;

function iniciarJuego(){
  //El metodo document.getElementVyId() => permite llamar(seleccionar) cualquier elemento de HTML mediante un id''
  //Creamos la variable donde seleccionamos al boton de seleccionar mascota, 
  let botonMascotaJugador = document.getElementById('boton-select-mascota');
  //Escuchar el evento click del boton(botonMascotaJugador). 
  //cuando dan 'click' al boton, con el addEventListener() mandamos a llamar la funcion seleccionarMascotaJugador
  botonMascotaJugador.addEventListener('click', seleccionarMascotaJugador);

  //Botones para seleccionar el ataque de la mascota. Llamamos las funciones cuando el usuario de "click" al boton
  let botonFuego = document.getElementById('boton-ataque-fuego');
  botonFuego.addEventListener('click', ataqueFuego);

  let botonAgua = document.getElementById('boton-ataque-agua');
  botonAgua.addEventListener('click', ataqueAgua);

  let botonTierra = document.getElementById('boton-ataque-tierra');
  botonTierra.addEventListener('click', ataqueTierra);
}

//Creo la funcion de seleccionarMascotaJugador.
function seleccionarMascotaJugador(){
  //Creo las variables que traeran el input de cada mascota con getElementById() que pueden elegir
  let jugar = 1;
  let inputLeonTortuga = document.getElementById("leon-tortuga");
  let inputTejonTopo = document.getElementById("tejon-topo");
  let inputLeonBuitre = document.getElementById("leon-buitre");

  //La variable permite traer la etiqueta span para cambiar su html(MASCOTA) segun eleccion.
  let spanMascotaJugador = document.getElementById("mascota-jugador");
  
  //Con .checked validamos que el input(radio) este seleccionado
  if(inputLeonTortuga.checked){            //SI! este input tiene la propiedad checked como true, entonces se ejecuta la funcion para mostrar en el HTML la mascota seleccionada
    spanMascotaJugador.innerHTML = 'Leon tortuga';
  } else if(inputTejonTopo.checked){
    spanMascotaJugador.innerHTML = 'Tejon topo';
  } else if(inputLeonBuitre.checked){
    spanMascotaJugador.innerHTML = 'Leon buitre';
  } else {
    alert("¡Debes seleccionar una mascota!")
    jugar = 0;
  }
  // Esta condicion solo se cumple si el jugador escoge una mascota para jugar. El pc elige y empezara el juego
  if(jugar == 1){
    seleccionarMascotaPc();
  }
}

function aleatorio(min, max){
  return Math.floor(Math.random() * (max - min + 1) + min);
}

//Funcion para que el bot JS del juego seleccione una mascota aleatoriamente
function seleccionarMascotaPc(){
  let mascota_aleatoria = aleatorio(1, 3);
  let spanMascotaOponente = document.getElementById('mascota-oponente');

  
  if(mascota_aleatoria == 1){            
    spanMascotaOponente.innerHTML = 'Leon tortuga';
  } else if(mascota_aleatoria == 2){
    spanMascotaOponente.innerHTML = 'Tejon topo';
  } else if(mascota_aleatoria == 3){
    spanMascotaOponente.innerHTML = 'Leon buitre';
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

//Logica para seleccionar el ataque de la computadora(oponente)
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

function combate(){
  //Como condicionales pongo los casos donde gano como jugador
  if(ataqueOponente == ataqueJugador){
    crearMensaje("¡EMPATAS!🤝");
  } else if(ataqueJugador == 'FUEGO' && ataqueOponente == 'TIERRA'){              
    crearMensaje("¡GANASTE!🍾");                                
  } else if(ataqueJugador == 'AGUA' && ataqueOponente == 'FUEGO' ){             
    crearMensaje("¡GANASTE!🍾");
  } else if(ataqueJugador == 'TIERRA' && ataqueOponente == 'AGUA' ){             
    crearMensaje("¡GANASTE!🍾");
  } else {
    crearMensaje("¡PERDISTE!😣");
  }
}

//Mandamos a llamar esta funcion cuando el usuario da click en el ataque para mostrar un mensaje
//Crearmos ese mensaje con el metodo createElement y seleccionando la etiqueta('p') del documento HTML
//La variable resultado es un parametro que vamos a recibir de la funcion combate por medio de argumentos
function crearMensaje(resultado){
  let sectionMensajes = document.getElementById('mensajes')
  let parrafo = document.createElement('p');                                             
  parrafo.innerHTML = `Tu mascota ataco con ${ataqueJugador}, la mascota del oponente atacó con ${ataqueOponente} => ${resultado}`; 
  //Metemos el parrafo en la seccion de mensajes en el documento HTML con appendChild
  sectionMensajes.appendChild(parrafo)                                
}

//El codigo JS no se va ejecutar hasta que cargue el evento de 'load' para que todos los eleementos del HTML ya existan antes del javascript 
window.addEventListener('load', iniciarJuego)             






/* -----------------------------------------------------------------------------------------------------------
  Recapitulando este archivo:
  Tenemos 3 inputs en HTML(mascotas para seleccionar), ademas tenemos un boton al que los jugadores le dan click.
  Cuando le dan 'click' al boton seleccionar, ejecutamos la funcion seleccionarMascotaJugador() cuyo proposito
  Es validar cual de las 3 mascotas fue a la que seleccionaron los usuarios
  Validamos con el condicional if, y asignamos los input en cada parametro para confirmar

  -->Con inner insertamos un elemento a html desde js
   -----------------------------------------------------------------------------------------------------------
*/