import React, { useState } from 'react';
import { createTask, updateTask } from '../api/taskAPI';

const TaskForm = ({ task, onSubmit }) => {
  const [title, setTitle] = useState.task ? task.title : '';
  const [description, setDescription] = useState.task ? task.description : '';

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (task) {
      await updateTask(task.id, { title, description });
    } else {
      await createTask({ title, description });
    }
    onSubmit();
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Title:
        <input type="text" value={title} onChange={(event) => setTitle(event.target.value)} />
      </label>
      <br />
      <label>
        Description:
        <textarea value={description} onChange={(event) => setDescription(event.target.value)} />
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
};

export default TaskForm;