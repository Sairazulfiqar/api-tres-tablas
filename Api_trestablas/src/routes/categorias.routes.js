const express = require('express')
const router = express.Router()
const categoriasController = require('../controllers/categorias.controller');
// Retrieve all employees
router.get('/', categoriasController.findAll);
// Create a new employee
router.post('/', categoriasController.create);
// Retrieve a single employee with id
router.get('/:id', categoriasController.findById);
// Update a employee with id
router.put('/:id', categoriasController.update);
// Delete a employee with id
router.delete('/:id', categoriasController.delete);
module.exports = router