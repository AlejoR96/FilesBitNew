
const express = require('express');
const PORT = 5000;
const app = express();

const entries = [
  {
    id:01,
    Cabecera: "",
    Titulo: "",
    cotenido: "",
    fechaPelicula: "",
    calificacion: ""
  },
  {

    id:02,
    Cabecera: "",
    Titulo: "",
    cotenido: "",
    fechaPelicula: "",
    calificacion: ""
  }
]

//Method for Get
app.get('/', (request,response) => {
response.send("Hello World")
});



// Open in browser
app.listen( PORT , () =>{
  console.log(`Running app http://127.0.0.1:${PORT}`)
});
