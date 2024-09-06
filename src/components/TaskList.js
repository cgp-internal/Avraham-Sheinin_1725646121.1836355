import React, { useState, useEffect } from 'react';
import { getTasks } from '../api/taskAPI';

const TaskList = () => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchTasks = async () => {
      setLoading(true);
      const tasks = await getTasks();
      setTasks(tasks);
      setLoading(false);
    };
    fetchTasks();
  }, []);

  return (
    <div>
      <h1>Task List</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {tasks.map((task) => (
            <li key={task.id}>{task.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TaskList;