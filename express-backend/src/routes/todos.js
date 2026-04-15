const express = require('express');
const router = express.Router();
const todosController = require('../controllers/todosController');

// GET    /api/todos         - Get all todos
// POST   /api/todos         - Create a todo
// GET    /api/todos/:id     - Get single todo
// PUT    /api/todos/:id     - Update a todo
// DELETE /api/todos/:id     - Delete a todo

router.get('/', todosController.getAll);
router.post('/', todosController.create);
router.get('/:id', todosController.getById);
router.put('/:id', todosController.update);
router.delete('/:id', todosController.remove);

module.exports = router;
