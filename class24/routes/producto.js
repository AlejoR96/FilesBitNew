const express = require('express');
const router = express.Router();
const productoController = require('../controllers/productoController'); /* Ruta del controlador */


router.post('/', productoController.crearProducto); /* Metodo llamado desde el controlador */
router.get('/', productoController.consultarProductos);
router.get('/:id',productoController.consultarProducto);
router.put('/:id',productoController.actualizarProducto);
router.delete('/:id',productoController.eliminarProducto);


module.exports = router;
