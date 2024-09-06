const { Task } = require('./models/task');

let tasks = [];

async function getAllTasks() {
  // assume tasks array is populated from database
  return tasks;
}

async function createTask(name, description, dueDate) {
  const newTask = new Task(null, name, description, dueDate);
  // TO DO: implement database logic to create a new task
  tasks.push(newTask);
  return newTask;
}

async function updateTask(id, name, description, dueDate) {
  const task = tasks.find(task => task.id === id);
  if (task) {
    task.name = name;
    task.description = description;
    task.dueDate = dueDate;
    // TO DO: implement database logic to update a task
  }
  return task;
}

async function deleteTask(id) {
  tasks = tasks.filter(task => task.id !== id);
  // TO DO: implement database logic to delete a task
  return true;
}

module.exports = { getAllTasks, createTask, updateTask, deleteTask };