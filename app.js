const express = require('express');
const app = express();
const { getTasks, createTask, updateTask, deleteTask } = require('./controllers/taskController');
const { getNotes, createNote, updateNote, deleteNote } = require('./controllers/noteController');

app.use(express.json());

app.get('/tasks', getTasks);
app.post('/tasks', createTask);
app.put('/tasks/:id', updateTask);
app.delete('/tasks/:id', deleteTask);

app.get('/notes', getNotes);
app.post('/notes', createNote);
app.put('/notes/:id', updateNote);
app.delete('/notes/:id', deleteNote);

const port = 3000;
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});

module.exports = {
  getTasks,
  createTask,
  updateTask,
  deleteTask,
  getNotes,
  createNote,
  updateNote,
  deleteNote,
};