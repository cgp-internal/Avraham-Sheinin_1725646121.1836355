import React from 'react';
import TaskList from './TaskList';
import TaskForm from './TaskForm';
import NoteList from './NoteList';
import NoteForm from './NoteForm';

const App = () => {
  const [isTaskFormOpen, setIsTaskFormOpen] = React.useState(false);
  const [isNoteFormOpen, setIsNoteFormOpen] = React.useState(false);
  const [currentTask, setCurrentTask] = React.useState(null);
  const [currentNote, setCurrentNote] = React.useState(null);

  const handleTaskFormOpen = () => {
    setIsTaskFormOpen(true);
  };

  const handleTaskFormClose = () => {
    setIsTaskFormOpen(false);
    setCurrentTask(null);
  };

  const handleNoteFormOpen = () => {
    setIsNoteFormOpen(true);
  };

  const handleNoteFormClose = () => {
    setIsNoteFormOpen(false);
    setCurrentNote(null);
  };

  const handleTaskEdit = (task) => {
    setCurrentTask(task);
    handleTaskFormOpen();
  };

  const handleNoteEdit = (note) => {
    setCurrentNote(note);
    handleNoteFormOpen();
  };

  return (
    <div>
      <h1>Task Manager</h1>
      <TaskList onEdit={handleTaskEdit} />
      <button onClick={handleTaskFormOpen}>Create Task</button>
      {isTaskFormOpen && (
        <TaskForm
          task={currentTask}
          onSubmit={handleTaskFormClose}
        />
      )}
      <NoteList onEdit={handleNoteEdit} />
      <button onClick={handleNoteFormOpen}>Create Note</button>
      {isNoteFormOpen && (
        <NoteForm
          note={currentNote}
          onSubmit={handleNoteFormClose}
        />
      )}
    </div>
  );
};

export default App;