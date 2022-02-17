const mongoose = require('mongoose');
/* estructura de la colleccion */
const productosSchema = mongoose.Schema({
  nombre:{
    type: String,
    require: true
  },
  precio:{
    type: Number,
    require: true
  },
  proveedor:{
    type: String,
    require: true
  },
  cantidad_stock:{
    type: Number
  },
  fec_cre:{
    type: Date,
    default: Date.now()
  }
});


module.exports = mongoose.model('producto', productosSchema) /* Exportando Modulo de mongoose */
