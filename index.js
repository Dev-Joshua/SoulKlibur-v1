//Importo la libreria que voy a utilizar require("express")
const express = require("express") 

//Con express puedo crear una aplicacion que sera lo que represente a mi servidor(se encargara de recibir peticiones de clientes y responderlas)
//Creo una aplicacion
const app = express()

//app.get es una funcion, indica que cada vez que un cliente solicite un recurso vamos a realizar algo:
//{como vamos a procesar esa solicitud, como vamos a recibir los datos de esa peticion y como responderemos a esa peticion}
//la arrow function recibe (require -> peticion, res -> objeto que permite manejar las respuestas hacia el usuario)
app.get("/", (require,  res) => {
  res.send("Hola")
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

*/