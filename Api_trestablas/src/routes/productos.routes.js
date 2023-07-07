const express = require('express')
const router = express.Router()
const productosController = require('../controllers/productos.controller');
// Retrieve all employees
router.get('/', productosController.findAll);
// Create a new employee
router.post('/', productosController.create);
// Retrieve a single employee with id
router.get('/:id', productosController.findById);
// Update a employee with id
router.put('/:id', productosController.update);
// Delete a employee with id
router.delete('/:id', productosController.delete);
module.exports = router