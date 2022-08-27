//Variables globales:

//Antes de todo, selecciono la seccion de ataque para esconderla en el HTML hasta que se escoja un personaje
const sectionSelectAtaque = document.getElementById('select-ataque');
const sectionReiniciar = document.getElementById('reiniciar');
//El metodo document.getElementVyId() => permite llamar(seleccionar) cualquier elemento de HTML mediante un id''
//Creamos la variable donde seleccionamos al boton de seleccionar personaje, 
const botonPersonajeJugador = document.getElementById('boton-select-personaje');
//Botones para seleccionar el ataque de la mascota. Llamamos las funciones cuando el usuario de "click" al boton
const botonFuego = document.getElementById('boton-ataque-fuego');
const botonAgua = document.getElementById('boton-ataque-agua');
const botonTierra = document.getElementById('boton-ataque-tierra');
const botonReiniciar = document.getElementById("boton-reiniciar");


const sectionSelectPersonaje = document.getElementById('select-personaje');
//variables que traeran el input de cada personaje con getElementById() que pueden elegir
const inputAkali = document.getElementById("akali");
const inputPyke = document.getElementById("pyke");
const inputCronos = document.getElementById("cronos");

//La variable permite traer la etiqueta span para cambiar su html(PERSONAJE) segun eleccion.
const spanPersonajeJugador = document.getElementById("personaje-jugador");
const spanPersonajeOponente = document.getElementById("personaje-oponente");

//Aqui llamo a los span(#vidas) para cambiar la cantidad que se mostrara segun el combate
const spanVidasJugador = document.getElementById('vidas-jugador');    
const spanVidasOponente = document.getElementById('vidas-oponente');

const sectionMensajes = document.getElementById('resultado');
const ataquesDelJugador = document.getElementById('ataques-jugador');
const ataquesDelOponente = document.getElementById('ataques-oponente');

//Creo array para ir guardando los personajes
let personajes = [];
let ataqueJugador;
let ataqueOponente;
let opcionPersonajes;
const contenedorTarjetas = document.getElementById('contenedorTarjetas');
let vidasJugador = 3;
let vidasOponente = 3;
//Ambos jugadores inician con 3 vidas. 

//Creo mi primera clase
class Personaje {
  //Constructor(llevara propiedades de de mis objetos)
  constructor(nombre, foto, vida){
    this.nombre = nombre;                                               //Esto mismo(el nombre sera igual al del parametro)
    this.foto = foto;
    this.vida = vida;
    this.ataques = [];                                                  //Agrego la propiedad ataques[]
  }
}


//Creo primer objeto(akali) de la clase Personaje...
let akali = new Personaje('Akalí', './assets/akali.png', 5);
let pyke = new Personaje('Pyke','./assets/pyke.png', 5);
let cronos = new Personaje('Cronos','./assets/combustion.png', 5);

//Inyecto estos valores con push(metodo) al array de ataques
//Con este bloque tenemos los 3 personajes con sus ataques(c/u ataques distintos segun su elemento)
akali.ataques.push(
  { nombre: 'Tierra🌱', id: 'boton-ataque-tierra' },
  { nombre: 'Tierra🌱', id: 'boton-ataque-tierra' },
  { nombre: 'Tierra🌱', id: 'boton-ataque-tierra' },
  { nombre: 'Fuego🔥', id: 'boton-ataque-fuego' },
  { nombre: 'Agua💦', id: 'boton-ataque-agua' }
);
pyke.ataques.push(
  { nombre: 'Agua💦', id: 'boton-ataque-agua' },
  { nombre: 'Agua💦', id: 'boton-ataque-agua' },
  { nombre: 'Agua💦', id: 'boton-ataque-agua' },
  { nombre: 'Fuego🔥', id: 'boton-ataque-fuego' },
  { nombre: 'Tierra🌱', id: 'boton-ataque-tierra' }
);
cronos.ataques.push(
  { nombre: 'Fuego🔥', id: 'boton-ataque-fuego' },
  { nombre: 'Fuego🔥', id: 'boton-ataque-fuego' },
  { nombre: 'Fuego🔥', id: 'boton-ataque-fuego' },
  { nombre: 'Tierra🌱', id: 'boton-ataque-tierra' },
  { nombre: 'Agua💦', id: 'boton-ataque-agua' }
);

//Inyecto estos valores con push(metodo) al array de personajes
personajes.push(akali, pyke, cronos);
// console.log(personajes);


//Al iniciar el juego quiero cargar la informacion de personajes
function iniciarJuego(){
  //con display none escondo esta seccion(ataques) al iniciar el juego
  sectionSelectAtaque.style.display = 'none';
  //Recorro cada elemneto del array para extraer info de los objetos y poder inyectarlo en HTML
  personajes.forEach((personaje) => {
    //Imprimir cada objeto en cada iteracion
    // console.log(personaje.nombre)                   
    //Le digo a JS, x cada elemento(personaje) que exista en este array(personajes), generame esta estructura de HTML(tarjeta personaje)
    opcionPersonajes = `
    <input type="radio" name="personaje" id=${personaje.nombre}/>                 
    <label class="tarjeta-personaje" for=${personaje.nombre}>
      <p>${personaje.nombre}</p>
      <img src=${personaje.foto} alt=${personaje.nombre}>        
    </label>
    `; 
    //E inyecta la informacion(tarjeta personaje) dentro del contenedorTarjetas(div).
    //Para asi sustituir lo que se tenia en HTML(de forma manual) y poderlo hacer de forma automatica con JS
    contenedorTarjetas.innerHTML += opcionPersonajes;
    // (+=) sumara cada iteracion para que se muestren las tres tarjetas de personajes
  });


  sectionReiniciar.style.display = 'none';
  //Escuchar el evento click del boton(botonPersonajeJugador). 
  //cuando dan 'click' al boton, con el addEventListener() mandamos a llamar la funcion seleccionarpersonajeJugador
  botonPersonajeJugador.addEventListener('click', seleccionarPersonajeJugador);

  botonFuego.addEventListener('click', ataqueFuego);
  botonAgua.addEventListener('click', ataqueAgua);
  botonTierra.addEventListener('click', ataqueTierra);

  botonReiniciar.addEventListener('click', reiniciarJuego);
}

//Creo la funcion de seleccionarPersonajeJugador cuando den click en botonPersonajeJugador
function seleccionarPersonajeJugador(){
  
  sectionSelectPersonaje.style.display = 'none';
  sectionSelectAtaque.style.display = 'flex';
  
  
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
  ataqueJugador = 'FUEGO🔥';
  ataqueAleatorioEnemigo();
}

function ataqueAgua(){
  ataqueJugador = 'AGUA💦';
  ataqueAleatorioEnemigo();
}

function ataqueTierra(){
  ataqueJugador = 'TIERRA🌱';
  ataqueAleatorioEnemigo();
}

//Logica para seleccionar el ataque de la computadora(oponente), una vez seleccione se ejecuta la funcion combate para empezar el duelo
function ataqueAleatorioEnemigo() {                               
  let ataqueAleatorio = aleatorio(1, 3);

  if(ataqueAleatorio == 1) {
    ataqueOponente = 'FUEGO🔥';
  } else if(ataqueAleatorio == 2){
    ataqueOponente = 'AGUA💦';
  } else if(ataqueAleatorio == 3){
    ataqueOponente = 'TIERRA🌱';
  }
  combate();
}

//En esta funcion guardamos la logica de si perdimos, ganamos o empatamos.  
function combate(){
  //SI pc elige lo mismo que el jugador => EMPATE
  //Como condicionales pongo los casos donde gano como jugador
  if(ataqueOponente == ataqueJugador){
    crearMensaje("EMPATAS🤝");
  } else if(ataqueJugador == 'FUEGO🔥' && ataqueOponente == 'TIERRA🌱'){              
    crearMensaje("GANASTE🍾");
    vidasOponente--;
    spanVidasOponente.innerHTML = vidasOponente                                
  } else if(ataqueJugador == 'AGUA💦' && ataqueOponente == 'FUEGO🔥'){             
    crearMensaje("GANASTE🍾");
    vidasOponente--;
    spanVidasOponente.innerHTML = vidasOponente   
  } else if(ataqueJugador == 'TIERRA🌱' && ataqueOponente == 'AGUA💦'){             
    crearMensaje("GANASTE🍾");
    vidasOponente--;
    spanVidasOponente.innerHTML = vidasOponente   
  } else {
    crearMensaje("PERDISTE😣");
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
    crearMensajeFinal("Has gando el combate \n Felicitaciones🎉");
  } else if(vidasJugador == 0) {
    //gana pc
    crearMensajeFinal("Has perdido el combate😣");
  }
}

//Mandamos a llamar esta funcion cuando el usuario da click en el ataque para mostrar un mensaje
//Crearmos ese mensaje con el metodo createElement y seleccionando la etiqueta('p') del documento HTML
//resultado es un parametro que vamos a recibir de la funcion combate por medio de argumentos
function crearMensaje(resultado){
  //Creo el parrafo dentro de los contenedores en HTML mediante su id
  //let parrafo = document.createElement('p');                          //Creo un parrafo, elemento de tipo 'p'                   
  //parrafo.innerHTML = `Tu personaje ataco con ${ataqueJugador}, el personaje del oponente atacó con ${ataqueOponente} => ${resultado}`; //Le insertamos texto al parrafo
  let nuevoAtaqueDelJugador = document.createElement('p');
  let nuevoAtaqueDelOponente = document.createElement('p');

  //Añado los parrafos a los elementos HTML.
  sectionMensajes.innerHTML = resultado;
  nuevoAtaqueDelJugador.innerHTML = ataqueJugador;
  nuevoAtaqueDelOponente.innerHTML = ataqueOponente;

  
  ataquesDelJugador.appendChild(nuevoAtaqueDelJugador);
  ataquesDelOponente.appendChild(nuevoAtaqueDelOponente);
  // sectionMensajes.appendChild(parrafo)                                //Metemos el parrafo en la seccion de mensajes en el documento HTML
}

//Esta funcion recibe un parametro donde nos diga si perdimos o ganamos como jugador
function crearMensajeFinal(resultadoFinal){                 
  sectionMensajes.innerHTML = resultadoFinal;  
  //Terminado el combate desabilitamos los botones de ataque(disabled=true)
  botonFuego.disabled = true;
  botonAgua.disabled = true;
  botonTierra.disabled = true;
  
  sectionReiniciar.style.display = 'block';
}

//Funcion para reiniciar el juuego cuando de click
function reiniciarJuego() {
  location.reload();                                                    //location es un objeto(ubicacion) que tiene un metodo reload()->funcion que recarga la pagina
}



//El codigo JS no se va ejecutar hasta que cargue el evento de 'load' para que todos los eleementos del HTML ya existan antes del javascript 
//window(ventana) 
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

-->Genero una pequeña estructura(templates literarios) dentro de la funcion inicicar juego, esta es la forma
   de implementar html con valores de nuestras variables para hacer un mix de ambas cosas.
   Creo la variable 'opcionesPersonaje', que guardara toda la estructura de HTML que se hara en JS para despues inyectar
   esa variable con toda la estructura como valor directamente en el HTML.
   -----------------------------------------------------------------------------------------------------------
*/