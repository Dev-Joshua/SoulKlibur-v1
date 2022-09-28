//Importo la libreria que voy a utilizar require("express")
const express = require("express") 
const cors = require("cors")

//Con express puedo crear una aplicacion que representara mi servidor(se encargara de recibir peticiones de clientes y responderlas)
//Esta variable almacenara dicha aplicacion(Genero una instancia del servidor que estare utilizando)
const app = express()

//Deshabilito los posibles errores relacionados con cors y habilito la capacidad de recibir peticiones POST(que traigan contenido en formato json)
app.use(cors())
app.use(express.json())

//Creo una lista de jugadores que se van a unir al servidor
const jugadores = [] 

//Esta clase representara a cada uno de los jugadores
class Jugador {
  //En su constructor va recibir el id
  constructor(id) {
    //Hago que se asigne su id a el id que recibe al momento de crear x jugador
    this.id = id;
  }
  asignarPersonaje(personaje) {
    this.personaje = personaje;
  }
  //Asi el jugador guarda sus propias coordenadas
  actualizarPosicion(x, y) {
    this.x = x;
    this.y = y;
  }
  asignarAtaques(ataques){
    this.ataques = ataques;
  }
}


class Personaje {
  constructor(nombre) {
    this.nombre = nombre;
  }
}


//Los jugadores van a llamar este recurso para unirse al juego
app.get("/unirse", (require,  res) => { 
  //Uso un numero aleatorio(math.random) que sea el identificador unico
  const id = `${Math.random()}`
  //Se guarda en la variable jugador el objeto creado con su id 
  const jugador = new Jugador(id)
  //Agregamos a la lista de jugadores
  jugadores.push(jugador)
  
  //Antes de responder el id del jugador que se acaba de crear agrego una cabezera(informacion de metadatos sobre configuraciones)
  //Estblezco una cabezera(Header) donde le respondo al navegador que se permite hacer llamadas de este tipo 
  res.setHeader("Access-Control-Allow-Origin", "*")   //Cualquier origen es valido

  //Devolvemos id de ese jugador
  res.send(id)
})


//Hago una petiocion tipo POST.(este sera mi segundo servicio)
app.post("/soulklibur/:jugadorId", (req, res) => {
  //Accedo a la variable enviada en la url apartir del objeto req.params
  const jugadorId = req.params.jugadorId || ""
  const nombre = req.body.personaje || ""
  const personaje = new Personaje(nombre)
  
  const jugadorIndex = jugadores.findIndex((jugador) => jugadorId === jugador.id)

  if(jugadorIndex >= 0) {
    jugadores[jugadorIndex].asignarPersonaje(personaje)
  }

  console.log(jugadores)
  console.log(jugadorId)
  res.end()
})


//Este endpoint sera una peticion tipo POST que recibira las coordenadas de ubicacion(x,y) del personaje
app.post("/soulklibur/:jugadorId/posicion", (req, res) => {
  //Obtener el jugadorId
  const jugadorId = req.params.jugadorId || []
  //Accedo a x,y. (||) En caso de que no viniera un valor se pone 0 por defecto
  const x = req.body.x || 0
  const y = req.body.y || 0

  const jugadorIndex = jugadores.findIndex((jugador) => jugadorId === jugador.id)

  if(jugadorIndex >= 0) {
    jugadores[jugadorIndex].actualizarPosicion(x, y)
  }

  //Funcion que devuelve las coordenadas de los demas jugadores menos del jugador que acaba de hacer la solicitud en la url
  const oponentes = jugadores.filter((jugador) => jugadorId !== jugador.id)                 //Diferente de jugador que recibo en la funcion(jugadorID)

  //Devuelvo un JSON de todos los oponentes a traves de la respuesta de esta peticion
  res.send({oponentes})
})


//Hago una petiocion tipo POST.(este sera mi segundo servicio)
app.post("/soulklibur/:jugadorId/ataques", (req, res) => {
  //Accedo a la variable enviada en la url apartir del objeto req.params
  const jugadorId = req.params.jugadorId || []
  const ataques = req.body.ataques || []
  
  //Busco el jugador
  const jugadorIndex = jugadores.findIndex((jugador) => jugadorId === jugador.id)

  //Si el jugador existe le asigno sus ataques
  if(jugadorIndex >= 0) {
    jugadores[jugadorIndex].asignarAtaques(ataques)
  }

  console.log(jugadores)
  console.log(jugadorId)
  res.end()
})


app.get("/soulklibur/:jugadorId/ataques", (req, res) => {
  //Se busca el jugador por medio de su id
  const jugadorId = req.params.jugadorId || "";
  const jugador = jugadores.find((jugador) => jugador.id === jugadorId)

  //devolver los ataques del jugador
  res.send({
      ataques: jugador.ataques || []
  })
})


//para poder hacer que escuche las peticiones de los clientes y se mantenga escuchando le indico el puerto
//.listen(puerto, callback) propiedad que permite iniciar el servidor
app.listen(8080, () => {
  console.log("Servidor funcionando")
})














/*
El Código está hecho de la siguiente manera:
 1. Importamos ExpressJS para usarlo en nuestro Proyecto
 2. Creamos una Aplicación con ExpressJS
 3. Le decimos a Express que cuando la URL raíz reciba una petición, responda “Hola”
 4. Le decimos que escuche continuamente en el puerto 8080 las peticiones de los clientes para que todo el tiempo pueda responderles

---> app.get es una funcion, indica que cada vez que un cliente solicite un recurso vamos a realizar algo:
    {como vamos a procesar esa solicitud, como vamos a recibir los datos de esa peticion y como responderemos a esa peticion}

---> Cada vez que ingrese un jugador haremos que la pagina en el frontend llame a un servicio en el backend para que se registre ese jugador y le devuelva su id

---> la arrow function recibe (require -> peticion, res -> objeto que permite manejar las respuestas hacia el usuario)

---> Le doy un nombre al primer endpoint para que sea mas especifico(/unirse)

---> (req, res) => {} Sera mi funcion callback que procesa mi solicitud, req-> objeto que me permite extraer lo que viene en la url. 

  1. fetch(url) hace un GET (una petición para obtener algo) a la URL que se le especifique
  2. Esta función nos retornará algo (lo que sea que se haya definido en el código del servidor).
  3. No podemos trabajar con lo que nos retorne directamente, ya que el servidor se tomará un tiempo en responder.
  4. Para eso utilizaremos el .then(func), que ejecutará el código de la función que le demos (en este caso, func), pasándole la respuesta del servidor como parámetro.
  5. El .then suele ir por debajo de la función que hayamos llamado (fetch en este caso) e indentado, por pura estética nada más. Nótese que se puede hacer fetch(url).then(func) sin dejar ningún espacio.
*/