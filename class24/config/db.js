const mongoose = require('mongoose')
require('dotenv').config({path: 'config.env'});

// Codigo para conectar al cluster de la base de datos
const conectarDB = async () => {
  try {
    await mongoose.connect(process.env.DB_MONGO, {
      useNewUrlParser:true,
      useUnifiedTopology:true
    })
    console.log('Conexion exitosa a base de datos');
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
}

module.exports = conectarDB
