const express = require('express')
const router = express.Router()
const fabricantesController = require('../controllers/fabricantes.controller');
// Retrieve all employees
router.get('/', fabricantesController.findAll);
// Create a new employee
router.post('/', fabricantesController.create);
// Retrieve a single employee with id
router.get('/:id', fabricantesController.findById);
// Update a employee with id
router.put('/:id', fabricantesController.update);
// Delete a employee with id
router.delete('/:id', fabricantesController.delete);
module.exports = router