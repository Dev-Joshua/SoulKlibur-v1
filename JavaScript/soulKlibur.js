//Variables globales:

//Antes de todo, ligamos variables a elementos que tengan un ID en HTML
//selecciono la seccion de ataque para esconderla en el HTML hasta que se escoja un personaje
const sectionSelectAtaque = document.getElementById('select-ataque');
const sectionReiniciar = document.getElementById('reiniciar');
sectionReiniciar.style.display = 'none';
//El metodo document.getElementVyId() => permite llamar(seleccionar) cualquier elemento de HTML mediante un id''
//seleccionamos al personaje mediante el boton, 
const botonPersonajeJugador = document.getElementById('boton-select-personaje');
const botonReiniciar = document.getElementById("boton-reiniciar");
const sectionSelectPersonaje = document.getElementById('select-personaje');
const tituloDelJuego = document.getElementById('titulo');

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

// //Constante que guardara la informacion de la section CANVAS
// const sectionVerMapa = document.getElementById('ver-mapa');
// const mapa = document.getElementById('mapa');

// let oponenteId = null;
// let jugadorId = null;
//Creo array para ir guardando los personajes
let personajes = [];
// let personajesOponentes = [];
let ataqueJugador = [];
let ataqueOponente = [];
let personajeJugador;
let personajeJugadorObjeto;
//opcion y ataquesPersonajes guardaran la estructura de html
let opcionPersonajes;
let ataquesPersonaje;
let ataquesPersonajeOponente;
//variables que traeran el input de cada personaje con getElementById() para elegir.Cuando se ejecute iniciarJuego
let inputAkali; 
let inputPyke;
let inputCronos;
let botonFuego; 
let botonAgua;
let botonTierra;
//Array que tendra cada boton(ataque) que se creara
let botones = [];
let indexAtaqueJugador;
let indexAtaqueOponente;                                                                
let vidasJugador = 3;
let vidasOponente = 3;
//Ambos jugadores inician con 3 vidas. 
let victoriasJugador = 0;
let victoriasOponente = 0;


//Creo mi clase
class Personaje {
  //Constructor(llevara propiedades/atributos de de mis objetos(personajes))
  constructor(nombre, foto, vida){
    //Id para saber de que oponente es ese personaje
    // this.id = id;
    this.nombre = nombre;                                               //Esto mismo(el nombre sera igual al del parametro)
    this.foto = foto;
    this.vida = vida;
    this.ataques = [];                                                  //Agrego la propiedad ataques[]
  }
}


//Creo primer objeto(akali) de la clase Personaje...
let akali = new Personaje('Akali', '/assets/imgRenderAkali.png', 5);
let pyke = new Personaje('Pyke','/assets/imgRenderKing.png', 5);
let cronos = new Personaje('Cronos','/assets/imgRenderCronos.png', 5);


//Con este bloque tenemos los 3 personajes con sus ataques
akali.ataques.push(
  { nombre: '💧', id: 'boton-agua' },
  { nombre: '💧', id: 'boton-agua' },
  { nombre: '💧', id: 'boton-agua' },
  { nombre: '🔥', id: 'boton-fuego' },
  { nombre: '🌱', id: 'boton-tierra' },
)
// //Inyecto estos valores con push(metodo) al array de ataques

pyke.ataques.push(
  { nombre: '🌱', id: 'boton-tierra' },
  { nombre: '🌱', id: 'boton-tierra' },
  { nombre: '🌱', id: 'boton-tierra' },
  { nombre: '💧', id: 'boton-agua' },
  { nombre: '🔥', id: 'boton-fuego' },
)

cronos.ataques.push(
  { nombre: '🔥', id: 'boton-fuego' },
  { nombre: '🔥', id: 'boton-fuego' },
  { nombre: '🔥', id: 'boton-fuego' },
  { nombre: '🌱', id: 'boton-tierra' },
  { nombre: '💧', id: 'boton-agua' }
)


//Inyecto estos valores con push(metodo) al array de personajes
personajes.push(akali, pyke, cronos);
// console.log(personajes);


//Aqui se realiza todo lo que se mostrara en la primer pantalla
//Al iniciar el juego quiero cargar la informacion del videojuego
function iniciarJuego(){

  //con display none escondo esta seccion(html) al iniciar el juego
  sectionSelectAtaque.style.display = 'none';

  //Recorro cada elemneto del array para extraer info de los objetos y poder inyectarlo en HTML
  personajes.forEach((personaje) => {                 
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
    // (+=) sumara cada iteracion para que se muestren las tres tarjetas de personajes
    contenedorTarjetas.innerHTML += opcionPersonajes;

    inputAkali = document.getElementById("Akali");
    inputPyke = document.getElementById("Pyke");
    inputCronos = document.getElementById("Cronos");
    //Despues de generar los elementos con el HTML, ligamos los elementos con el id a las variables.
    //ledigo a JS que busque los id y que los valores(nombre de personaje) los guarde en estas variables declaradas al inicio.
  });


  //Escuchar el evento click del boton(botonPersonajeJugador). 
  //cuando dan 'click' al boton, con el addEventListener() mandamos a llamar la funcion seleccionarpersonajeJugador
  botonPersonajeJugador.addEventListener('click', seleccionarPersonajeJugador);
  botonReiniciar.addEventListener('click', reiniciarJuego);
}


//Esta funcion  se ejecutara cuando den click en Seleccionar(botonPersonajeJugador)
//Manipulamos esta funcion para dejarla como unica fuente de verdad
function seleccionarPersonajeJugador(){
  sectionSelectPersonaje.style.display = 'none';
  sectionSelectAtaque.style.display = 'flex';
  

  //Estos input estan ligados a elementos de HTML que colocamos con JS. Estos objetos tienen la informacion que necesitamos para validar  
  //Con .checked validamos que el input(radio) este seleccionado
  if(inputAkali.checked){            //SI! este input tiene la propiedad checked como true, entonces se muestra en el HTML el personaje seleccionado
    spanPersonajeJugador.innerHTML = inputAkali.id;   //Esta variable(span) sera igual al valor del id de ese elemento(id contiene el nombre del objeto akali)
    personajeJugador = inputAkali.id;                 //#sta variable va a guardar el nombre del personaje seleccionado en esta funcion.
  } else if(inputPyke.checked){
    spanPersonajeJugador.innerHTML = inputPyke.id ;
    personajeJugador = inputPyke.id;
  } else if(inputCronos.checked){
    spanPersonajeJugador.innerHTML = inputCronos.id;
    //En cada validacion extraigo el nombre y lo guarde en la variable
    //dicha variable la utilizo para extraer los ataques de mis personajes(objetos)
    personajeJugador = inputCronos.id;
  } else {
    alert("¡Debes seleccionar un personaje!")
  }
  
  extraerAtaques(personajeJugador);
  seleccionarPersonajePc();
  // Esta condicion solo se cumple si el jugador escoge un personaje para jugar. El pc elige y empezara el juego
}



//Extraigo los ataques de cada personajeJugador seleccionado
function extraerAtaques(personajeJugador) {
  //Tengo que guardar los ataques en let ataques, para poder utilziarlos
  let ataques;
  //Itero por cada elemento existente del array, mientras i sea menor al tamaño del array
  for (let i = 0; i < personajes.length; i++) {
    //Mientras el elemento(nombre) seleccionado en personajeJugador sea igual al mismo del array personajes[i]
    if(personajeJugador === personajes[i].nombre) {
      //Extraigo los ataques de ese personaje
      ataques = personajes[i].ataques;
    }
  }
  // console.log(ataques);
  // inyecto los ataques en html con esta funcion
  mostrarAtaques(ataques);
}


//Una sola fuente de la verdad para mostarAtaques
function mostrarAtaques(ataques) {
  //Inyecto los botones en HTML por cada ataque que exista
  ataques.forEach((ataque) => {
    //Agrego clase BAtaque a la estructura HTML que se inyecta en el documento para acceder a los botones
    ataquesPersonaje = `<button id="${ataque.id}" class="boton-ataque BAtaque">${ataque.nombre}</button>`;
    //inyecto los ataques directamente al HTML
    contenedorAtaques.innerHTML += ataquesPersonaje;                                  
    });

    //Ligo las variables de los botones a los elementos de HTML que tienen este id
    //Los botones van a existir hasta que se ejecute este bloque
    botonFuego = document.getElementById('boton-fuego');
    botonAgua = document.getElementById('boton-agua');
    botonTierra = document.getElementById('boton-tierra');
    //selecciono todos los elementos(botones) que tengan la clase 'Bataque'.(no se puede id porque no puede repetirse)
    botones = document.querySelectorAll('.BAtaque');
    console.log(botones);
  }



//Cambio la logica del juego de vidas por victorias(que solo de 5 rondas de ataque y gane quien tenga +victrias)
//Esta funcion va a agregar un evento de click por cada boton que se va generando
function secuenciaAtaque() {
  //Cada boton debe tener el addEventListener con la funcion de 'click'
  //Itero botones. Por cada boton que exista en el array agrega el evento 'click' y valida cual es el valor que se esta seleccionando
  botones.forEach((boton) => {
    boton.addEventListener('click',(e) => {               //la (e) hace referencia al evento mismo(click). 
      console.log(e);
      //si el contenido de la propiedad textContent(target) del elemento selccionado(e) es = 🔥':
      if(e.target.textContent === '🔥') {
        //Agrega el elemento fuego al array de ataqueJugador, imprime en consola cual ataque seleccione
        ataqueJugador.push('FUEGO');
        console.log(ataqueJugador);
        boton.style.background = '#112f58';
        boton.disabled = true;

      } else if(e.target.textContent === '💧') {
        ataqueJugador.push('AGUA');
        console.log(ataqueJugador);
        boton.style.background = '#112f58';
        boton.disabled = true;

      } else if(e.target.textContent === '🌱') {
        ataqueJugador.push('TIERRA');
        console.log(ataqueJugador);
        //Cambia el color de fondo para saber que ya fue seleccionado
        boton.style.background = '#112f58';
        //Desabilito cada boton cuando se seleccione
        boton.disabled = true;
      }
      //Llamo a esta funcion despues de terminar de ejecutar secuenciaAtaque
      ataqueAleatorioEnemigo();
    });
  });
  //Cuando doy click en el boton la (e) regresara cual es el evento que esta sucediendo.
  //Por medio del evento(e) puedo llegar al contenido de texto del boton para validar cual es el atque seleccionado
}

//Funcion para que el bot JS del juego seleccione un personaje aleatoriamente
function seleccionarPersonajePc(){
  //Convierto en fuente de verdad esta funcion para manipularla
  let personaje_aleatorio = aleatorio(0, personajes.length -1);                                   //personaje aleatorio entre 0  al #tamaño del array -1 = 3
  
  spanPersonajeOponente.innerHTML = personajes[personaje_aleatorio].nombre;                      //spanPersonajeOp sera igual a personajes[y # que de aleatorio]
  ataquesPersonajeOponente = personajes[personaje_aleatorio].ataques;                            //Esta variable guardara los ataques enemigos
  
  //Una vez selecionado el personaje del oponente se va a ejecuar la secuencia xq se mostraran los botnes ataque
  secuenciaAtaque();
}


//Logica para seleccionar el ataque de la computadora(oponente), una vez seleccione como jugador en secuenciaAtaque se ejecuta la funcion combate para empezar el duelo
function ataqueAleatorioEnemigo() {                               
  let ataqueAleatorio = aleatorio(0, ataquesPersonajeOponente.length -1);

  //Si! ataqueAleatorio es = 0, Ó ataqueAleatorio es = 1: Agregar el push del 'FUEGO' a ataqueOponente
  if(ataqueAleatorio == 0 ||  ataqueAleatorio == 1) {
    ataqueOponente.push('FUEGO');
  } else if(ataqueAleatorio == 3 || ataqueAleatorio == 4 ){
    ataqueOponente.push('AGUA');
  } else {
    ataqueOponente.push('TIERRA');
  }
  console.log(ataqueOponente);
  // combate();
  iniciarCombate();
}


//Funcion que validara  que yo tenga una secuencia de 5 ataques.(Si dicha secuencia ya existe puedo iniciar el combate)
function iniciarCombate() {
  //El navegador va esperar hasta que el tamaño de ataquejugador sea = 5 para ejecutar la funcion combate();
  if(ataqueJugador.length === 5) {
    combate();
  }
}


//Funcion en la que inyectamos el ataque(index) Jugador y del enemigo
function indexArrayPlayers(jugador, oponente) {
  indexAtaqueJugador = ataqueJugador[jugador];            //Variables que guardaran el ataque index del jugador y ataque index del oponente
  indexAtaqueOponente = ataqueOponente[oponente];
} 


//En esta funcion guardamos la logica de si perdimos, ganamos o empatamos.
//Cambio la logica de ganar por +vidas a ganar por +victorias  
function combate(){
  //El for me ayuda a recorrer a traves de los 2 arrays(ataquesJugador y ataquesOponente) que tengo.
  for (let index = 0; index < ataqueJugador.length; index++) {
    //Valido que se imprima cada uno de los ataques
    // console.log(ataqueJugador[index]);
    
    //Si! el ataque del jugador(la opcion1 del ataqueJugador es igual a la opcion1 del ataqueOponente) entonces empatas.
    if(ataqueJugador[index] == ataqueOponente[index]) {
      indexArrayPlayers(index, index);
      crearMensaje("EMPATAS");
    } else if(ataqueJugador[index] == 'FUEGO' && ataqueOponente[index] == 'TIERRA') {
      indexArrayPlayers(index, index);
      crearMensaje("GANASTE🍾");
      victoriasJugador++;
      spanVidasJugador.innerHTML = victoriasJugador;
    } else if(ataqueJugador[index] == 'AGUA' && ataqueOponente[index] == 'FUEGO') {
      indexArrayPlayers(index, index);
      crearMensaje("GANASTE🍾");
      victoriasJugador++;
      spanVidasJugador.innerHTML = victoriasJugador;
    } else if(ataqueJugador[index] == 'TIERRA' && ataqueOponente[index] == 'AGUA') {
      indexArrayPlayers(index, index);
      crearMensaje("GANASTE🍾");
      victoriasJugador++;
      spanVidasJugador.innerHTML = victoriasJugador;
    } else {
      indexArrayPlayers(index, index);
      crearMensaje("PERDISTE");
      victoriasOponente++;
      spanVidasOponente.innerHTML = victoriasOponente
    }
  }
  // //Aqui revisamos las vidas una vez terminado el combate
  revisarVidas();
}


//Esta funcion preguntara a las variables de vidaJugador/oponente si estan en 0
function revisarVidas() {
  if(victoriasJugador == victoriasOponente) {
    crearMensajeFinal("¡Es un empate!🤝 ");
    //empate
  } else if(victoriasJugador > victoriasOponente) {
    crearMensajeFinal("Has gando el combate.\n ¡Felicitaciones!🎉");
    //gana jugador
  } else {
    crearMensajeFinal("¡Has perdido el combate!");
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
  nuevoAtaqueDelJugador.innerHTML = indexAtaqueJugador;
  nuevoAtaqueDelOponente.innerHTML = indexAtaqueOponente;

  
  ataquesDelJugador.appendChild(nuevoAtaqueDelJugador);
  ataquesDelOponente.appendChild(nuevoAtaqueDelOponente);
  // sectionMensajes.appendChild(parrafo)                                //Metemos el parrafo en la seccion de mensajes en el documento HTML
}


//Esta funcion recibe un parametro donde nos diga si perdimos o ganamos como jugador
function crearMensajeFinal(resultadoFinal){                 
  sectionMensajes.innerHTML = resultadoFinal;  
  sectionReiniciar.style.display = 'block';
}

//Funcion para reiniciar el juuego cuando de click
function reiniciarJuego() {
  location.reload();                                                    //location es un objeto(ubicacion) que tiene un metodo reload()->funcion que recarga la pagina
}
//Funcion para que el pc eliga con un numero aleatorio
function aleatorio(min, max){
  return Math.floor(Math.random() * (max - min + 1) + min);
}


//El codigo JS no se va ejecutar hasta que cargue el evento de 'load' para que todos los eleementos del HTML ya existan antes del javascript 
//Al cargarse el navegador se llama la funcion iniciarJuego 
//window(ventana) 
window.addEventListener('load', iniciarJuego)                 

