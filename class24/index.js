// console.log("Nodemon activado")
const express = require('express');
const conexion_DB = require('./config/db');

const app = express();
conexion_DB();

app.use(express.json());

app.use('/api/productos', require('./routes/producto'));

app.listen(3000, () => {
 console.log('el servidor esta cargado')
})
