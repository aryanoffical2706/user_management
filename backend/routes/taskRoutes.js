const express = require('express');
const { getTasks, addTask, deleteTask } = require('../controller/taskController');

const router = express.Router();

router.get('/', getTasks);
router.post('/', addTask);
router.delete('/:id', deleteTask);

module.exports = router;