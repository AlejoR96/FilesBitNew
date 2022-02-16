// console.log("Nodemon activado")
const express = require('express');
const conexion_DB = require('./config/db');

const app = express();
conexion_DB();


app.get('/' , (req, res) =>{
  res.send('Mi aplicacion con express')
})

app.listen(3000, () => {
 console.log('el servidor esta cargado')
})
