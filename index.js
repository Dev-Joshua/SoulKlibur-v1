//Importo la libreria que voy a utilizar require("express")
const express = require("express") 

//Con express puedo crear una aplicacion que sera lo que represente a mi servidor(se encargara de recibir peticiones de clientes y responderlas)
//Creo una aplicacion
const app = express()

//1. Creo una lista de jugadores que se van a unir al servidor
const jugadores = [] 

class Jugador {
  //id como parametro
  constructor(id) {
    //Hago que se asigne su id a el id que recibe al momento de crear x jugador
    this.id = id;
  }
}


//la arrow function recibe (require -> peticion, res -> objeto que permite manejar las respuestas hacia el usuario)
//Le doy un nombre al primer endpoint para que sea mas especifico
//Los jugadores van a llamar este recurso para unirse al juego
app.get("/unirse", (require,  res) => { 
  //Uso un numero aleatorio(math.random) que sea el ip(identificador unico)
  const id = `${Math.random()}`

  //Se guarda en la variable jugador el objeto creado con su id 
  const jugador = new Jugador(id)

  //Agregamos a la lista de jugadores
  jugadores.push(jugador)

  //Devolvemos id de ese jugador
  res.send(id)
})


//para poder hacer que escuche las peticiones de los clientes y se mantenga escuchando le indico el puerto
//.listen(puerto, callback) propiedad que permite iniciar el servidor
app.listen(8080, () => {
  console.log("Servidor funcionando")
})














/*
Nuestro Código está hecho de la siguiente manera:
 1. Importamos ExpressJS para usarlo en nuestro Proyecto
 2. Creamos una Aplicación con ExpressJS
 3. Le decimos a Express que cuando la URL raíz reciba una petición, responda “Hola”
 4. Le decimos que escuche continuamente en el puerto 8080 las peticiones de los clientes para que todo el tiempo pueda responderles

---> app.get es una funcion, indica que cada vez que un cliente solicite un recurso vamos a realizar algo:
    {como vamos a procesar esa solicitud, como vamos a recibir los datos de esa peticion y como responderemos a esa peticion}

//Cada vez que se agrege un jugador haremos que la pagina en el frontend llame a un servicio en el backend para que se registre ese jugador y le devuelva su id
*/