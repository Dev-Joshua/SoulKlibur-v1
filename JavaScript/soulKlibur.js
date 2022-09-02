//Variables globales:

//Antes de todo, ligamos variables a elementos que tengan un ID en HTML
//selecciono la seccion de ataque para esconderla en el HTML hasta que se escoja un personaje
const sectionSelectAtaque = document.getElementById('select-ataque');
const sectionReiniciar = document.getElementById('reiniciar');
sectionReiniciar.style.display = 'none';
//El metodo document.getElementVyId() => permite llamar(seleccionar) cualquier elemento de HTML mediante un id''
//Creamos la variable donde seleccionamos al boton de seleccionar personaje, 
const botonPersonajeJugador = document.getElementById('boton-select-personaje');
//Botones para seleccionar el ataque de la mascota. Llamamos las funciones cuando el usuario de "click" al boton
// const botonFuego = document.getElementById('boton-ataque-fuego');
// const botonAgua = document.getElementById('boton-ataque-agua');
// const botonTierra = document.getElementById('boton-ataque-tierra');
const botonReiniciar = document.getElementById("boton-reiniciar");


const sectionSelectPersonaje = document.getElementById('select-personaje');


//La variable permite traer la etiqueta span para cambiar su html(PERSONAJE) segun eleccion.
const spanPersonajeJugador = document.getElementById("personaje-jugador");
const spanPersonajeOponente = document.getElementById("personaje-oponente");

//Aqui llamo a los span(#vidas) para cambiar la cantidad que se mostrara segun el combate
const spanVidasJugador = document.getElementById('vidas-jugador');    
const spanVidasOponente = document.getElementById('vidas-oponente');

const sectionMensajes = document.getElementById('resultado');
const ataquesDelJugador = document.getElementById('ataques-jugador');
const ataquesDelOponente = document.getElementById('ataques-oponente');
const contenedorTarjetas = document.getElementById('contenedorTarjetas');
const contenedorAtaques = document.getElementById('contenedor-ataques');

//Creo array para ir guardando los personajes
let personajes = [];
let ataqueJugador = [];
let ataqueOponente;
let personajeJugador;
//opcion y ataquesPersonajes guardaran la estructura de html
let opcionPersonajes;
let ataquesPersonaje;
//variables que traeran el input de cada personaje con getElementById() para elegir.Cuando se ejecute iniciarJuego
let inputAkali; 
let inputPyke;
let inputCronos;
let botonFuego; 
let botonAgua;
let botonTierra;
//Array que tendra cada boton que se creara
let botones = [];
let ataqueJu                                                                   
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
let akali = new Personaje('Akali', './assets/akali.png', 5);
let pyke = new Personaje('Pyke','./assets/pyke.png', 5);
let cronos = new Personaje('Cronos','./assets/combustion.png', 5);

//Inyecto estos valores con push(metodo) al array de ataques
//Con este bloque tenemos los 3 personajes con sus ataques(c/u ataques distintos segun su elemento)
akali.ataques.push(
  { nombre: '🌱', id: 'boton-ataque-tierra' },
  { nombre: '🌱', id: 'boton-ataque-tierra' },
  { nombre: '🌱', id: 'boton-ataque-tierra' },
  { nombre: '🔥', id: 'boton-ataque-fuego' },
  { nombre: '💦', id: 'boton-ataque-agua' }
);
pyke.ataques.push(
  { nombre: '💦', id: 'boton-ataque-agua' },
  { nombre: '💦', id: 'boton-ataque-agua' },
  { nombre: '💦', id: 'boton-ataque-agua' },
  { nombre: '🔥', id: 'boton-ataque-fuego' },
  { nombre: '🌱', id: 'boton-ataque-tierra' }
);
cronos.ataques.push(
  { nombre: '🔥', id: 'boton-ataque-fuego' },
  { nombre: '🔥', id: 'boton-ataque-fuego' },
  { nombre: '🔥', id: 'boton-ataque-fuego' },
  { nombre: '🌱', id: 'boton-ataque-tierra' },
  { nombre: '💦', id: 'boton-ataque-agua' }
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
    <input type="radio" name="personaje" id=${personaje.nombre} />                 
    <label class="tarjeta-personaje" for=${personaje.nombre}>
      <p>${personaje.nombre}</p>
      <img src=${personaje.foto} alt=${personaje.nombre}>        
    </label>
    `; 
    //E inyecta la informacion(tarjeta personaje) dentro del contenedorTarjetas(div).
    //Para asi sustituir lo que se tenia en HTML(de forma manual) y poderlo hacer de forma automatica con JS
    contenedorTarjetas.innerHTML += opcionPersonajes;
    // (+=) sumara cada iteracion para que se muestren las tres tarjetas de personajes
    inputAkali = document.getElementById("Akali");
    inputPyke = document.getElementById("Pyke");
    inputCronos = document.getElementById("Cronos");
    //Despues de generar los elementos con el HTML, ligamos los elementos con el id a las variables.
    //ledigo a JS que busque los id y que los valores(nombre de personaje) los guarde en estas variables declaradas al inicio.
  });


  //Escuchar el evento click del boton(botonPersonajeJugador). 
  //cuando dan 'click' al boton, con el addEventListener() mandamos a llamar la funcion seleccionarpersonajeJugador
  botonPersonajeJugador.addEventListener('click', seleccionarPersonajeJugador);

  // botonFuego.addEventListener('click', ataqueFuego);
  // botonAgua.addEventListener('click', ataqueAgua);
  // botonTierra.addEventListener('click', ataqueTierra);

  botonReiniciar.addEventListener('click', reiniciarJuego);
}


//Creo la funcion de seleccionarPersonajeJugador cuando den click en botonPersonajeJugador
function seleccionarPersonajeJugador(){
  //Manipulamos esta funcion para dejarla como unica fuente de verdad
  sectionSelectPersonaje.style.display = 'none';
  sectionSelectAtaque.style.display = 'flex';
  
  //Estos input estan ligados a elementos de HTML que colocamos con JS. Estos objetosienen la informacion que necesitamos para validar  
  //Con .checked validamos que el input(radio) este seleccionado
  if(inputAkali.checked){            //SI! este input tiene la propiedad checked como true, entonces se muestra en el HTML el personaje seleccionada
    spanPersonajeJugador.innerHTML = inputAkali.id;   //Esta variable(span) sera igual al valor del id de ese elemento(id contiene el nombre del objeto akali)
    personajeJugador = inputAkali.id;
  } else if(inputPyke.checked){
    spanPersonajeJugador.innerHTML = inputPyke.id ;
    personajeJugador = inputAkali.id;
  } else if(inputCronos.checked){
    spanPersonajeJugador.innerHTML = inputCronos.id;
    //En cada validacion extraigo el nombre y lo guarde en la variable
    //dicha variable la utilizo para acceder a los ataques de mis personajes(objetos)
    personajeJugador = inputAkali.id;
  } else {
    alert("¡Debes seleccionar un personaje!")
  }
   extraerAtaques(personajeJugador);
   seleccionarPersonajePc();
   // Esta condicion solo se cumple si el jugador escoge un personaje para jugar. El pc elige y empezara el juego

}


//Extraigo los ataques de cada personajeJugador seleccionado
function extraerAtaques(personajeJugador) {
  let ataques;
  //Itero por cada elemento existente del array, mientras i sea menor a 3
  for (let i = 0; i < personajes.length; i++) {
    //Mientras el elmento(nombre) seleccionado en personajeJugador sae igual al mismo del array personajes[i]
    if(personajeJugador === personajes[i].nombre) {
      //Extraigo los ataques de ese personajeJugador
      ataques = personajes[i].ataques;
    }
  }
  // console.log(ataques);
  // inyecto los ataques en html con esta funcion
  mostrarAtaques(ataques);
}


//Una sola fuente de la verdad para mostarAtaques
function mostrarAtaques(ataques) {
  //Inyecto los botones en HTML
  ataques.forEach((ataque) => {
    //Agrego clase BAtaque a la estructura HTML que se inyecta en el documento para acceder a los botones
    ataquesPersonaje = `<button id="${ataque.id}" class="boton-ataque BAtaque">${ataque.nombre}</button>`;
    contenedorAtaques.innerHTML += ataquesPersonaje;
    });

    //Los botones van a existir hasta que se ejecute este bloque
    botonFuego = document.getElementById('boton-ataque-fuego');
    botonAgua = document.getElementById('boton-ataque-agua');
    botonTierra = document.getElementById('boton-ataque-tierra');
    //selecciono todos los elementos que tengan la clase 'Bataque'.(no se puede id porque no puede repetirse)
    botones = document.querySelectorAll('.BAtaque');
    console.log(botones);

    // botonFuego.addEventListener('click', ataqueFuego);
    // botonAgua.addEventListener('click', ataqueAgua);
    // botonTierra.addEventListener('click', ataqueTierra);
    // Esta parte no me sirve en la nueva logica a los botones de ataque porque ya tengo un evento de click en secuenciaAtaque
  }


//Itero sobre los ataques y agrego un evento'click' por cada boton del array(botones)
//Cambio la logica del juego de vidas por victorias(que solo de 5 rondas de ataque y gane quien tenga +victrias)
function secuenciaAtaque() {
  //Cada boton debe tener la funcion de 'click'
  //Por cada boton que exista en el array(botones) agrega el evento 'click' y valida cual es el valor que se sta seleccionando
  botones.forEach((boton) => {
    boton.addEventListener('click',(e) => {               //la (e) hace referencia al evento mismo(click). 
      console.log(e);
      //si el contenido de la propiedad textContent(target) del elemento selccionado es = 🔥':
      if(e.target.textContent === '🔥') {
        //Agrega push del elemento fuego al array de ataqueJugador, imprime en consola cual ataque seleccione
        ataqueJugador.push('FUEGO🔥');
        console.log(ataqueJugador);
        boton.style.background = '#112f58';
      } else if(e.target.textContent === '💦') {
        ataqueJugador.push('AGUA💦');
        console.log(ataqueJugador);
        boton.style.background = '#112f58';
      } else if(e.target.textContent === '🌱') {
        ataqueJugador.push('TIERRA🌱');
        console.log(ataqueJugador);
        //Cambia el color de fondo para saber que ya fue seleccionado
        boton.style.background = '#112f58';
      }
    });
    //Cuando doy click en el boton la (e) regresara cual es el evento que esta sucediendo.
    //Por medio del evento(e) puedo llegar al contenido de texto del boton para validar cual es el atque seleccionado
  });
}


function aleatorio(min, max){
  return Math.floor(Math.random() * (max - min + 1) + min);
}


//Funcion para que el bot JS del juego seleccione un personaje aleatoriamente
function seleccionarPersonajePc(){
  //Convierto en fuente de verdad esta funcion para manipularla
  let personaje_aleatorio = aleatorio(0, personajes.length -1);                 //personaje aleatorio entre 0  al #tamaño del array -1 = 3
  
  spanPersonajeOponente.innerHTML = personajes[personaje_aleatorio].nombre;                      //spanPersonajeOp sera igual a personajes[y # que de aleatorio]
  //Una vez selecionado el personaje del oponente se va a ejecuar la secuencia xq se mostraran los botnes ataque
  secuenciaAtaque();
  // if(personaje_aleatorio == 1){            
  //   spanPersonajeOponente.innerHTML = 'Akalí';
  // } else if(personaje_aleatorio == 2){
  //   spanPersonajeOponente.innerHTML = 'Pyke';
  // } else if(personaje_aleatorio == 3){
  //   spanPersonajeOponente.innerHTML = 'Cronos';
  // } 

  //Imprime el personaje aleatorio seleccionado para pc
}


// ESTE BLOQUUE DE CODIGO NO ME SIRVE una veZ cambiada la logica de botones y ataques.(Xq me sobreescribe el array ataqueJugador)
// Cuando el usuario escoja la funcion(ataque) se ejecutara el ataque aleatorio de la pc 
// function ataqueFuego(){                                             
//   ataqueJugador = 'FUEGO🔥';
//   ataqueAleatorioEnemigo();
// }
// function ataqueAgua(){
//   ataqueJugador = 'AGUA💦';
//   ataqueAleatorioEnemigo();
// }
// function ataqueTierra(){
//   ataqueJugador = 'TIERRA🌱';
//   ataqueAleatorioEnemigo();
// }

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