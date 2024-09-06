const express = require('express');
const router = express.Router();
const { getAllTasks, createTask, updateTask, deleteTask } = require('./services/taskService');
const { Task } = require('./models/task');

router.get('/tasks', async (req, res) => {
  try {
    const tasks = await getAllTasks();
    res.json(tasks);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

router.post('/tasks', async (req, res) => {
  try {
    const { name, description, dueDate } = req.body;
    const newTask = await createTask(name, description, dueDate);
    res.json(newTask);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

router.put('/tasks/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { name, description, dueDate } = req.body;
    const updatedTask = await updateTask(id, name, description, dueDate);
    res.json(updatedTask);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

router.delete('/tasks/:id', async (req, res) => {
  try {
    const { id } = req.params;
    await deleteTask(id);
    res.json({ message: 'Task deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

module.exports = {
  getTasks: router.get.bind(router),
  createTask: router.post.bind(router),
  updateTask: router.put.bind(router),
  deleteTask: router.delete.bind(router),
};