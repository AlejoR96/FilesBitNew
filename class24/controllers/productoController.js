const Producto = require('../models/Producto');


exports.crearProducto = async(req,res) => {
 /*  console.log('Creando el producto desde el controlador');
  console.log(req.body); */

  try {

    let postProducto
    postProducto = new Producto(req.body);
    await postProducto.save();
    res.send(postProducto);
  } catch (error) {
    console.log(error);
    res.status(500).send("Ups...presenta un error");
  }
}

exports.consultarProductos = async(req,res) => {
  try {
    const getProducto = await Producto.find();
    res.json(getProducto);
  } catch (error) {
    console.log(error);
    res.status(500).send("Ups...presenta un error");
  }
}

exports.consultarProducto = async(req,res) => {
  try {
    const getProducto = await Producto.findById(req.params.id);
    if (!getProducto) {
      res.status(404).json({msg: 'No se encontraron coincidencias para consultar'});
    }
    res.json(getProducto);

  } catch (error) {
    console.log(error);
    res.status(500).send("Ups...presenta un error");
  }
}

exports.actualizarProducto = async(req,res) => {
  try {
    const {nombre,precio, proveedor, cantidad_stock} = req.body
    let putProducto = await Producto.findById(req.params.id)

    if (!putProducto) {
      res.status(404).json({msg: 'No se encontraron coincidencias para actualizar'});
    }
    putProducto.nombre = nombre;
    putProducto.precio = precio;
    putProducto.proveedor = proveedor;
    putProducto.cantidad_stock = cantidad_stock;

    putProducto = await Producto.findOneAndUpdate({_id: req.params.id}, putProducto, {new: true});
    res.json(putProducto);

  } catch (error) {
    console.log(error);
    res.status(500).send("Ups...presenta un error");
  }
}


exports.eliminarProducto = async (req,res) => {
  try {
     const deleteProducto = await Producto.findById(req.params.id);
     if (!deleteProducto) {
      res.status(404).json({msg: 'No se encontraron coincidencias para actualizar'});
    }
     await Producto.findByIdAndRemove({_id: req.params.id});
     res.json({msg: 'Producto eliminado correctamente'})


  } catch (error) {
    console.log(error);
    res.status(500).send("Ups...presenta un error");
  }
}
