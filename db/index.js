const { Task } = require('./models/task');
const { Note } = require('./models/note');

let db = null;

async function connect() {
  if (!db) {
    // Replace with your database connection setup
    db = await require('pg').Pool({ /* database connection options */ });
  }
  return db;
}

async function disconnect() {
  if (db) {
    await db.end();
    db = null;
  }
}

module.exports = {
  async createTask(name, description, dueDate) {
    const dbConnection = await connect();
    try {
      const result = await dbConnection.query('INSERT INTO tasks (name, description, due_date) VALUES ($1, $2, $3) RETURNING *', [name, description, dueDate]);
      return new Task(result.rows[0].id, result.rows[0].name, result.rows[0].description, result.rows[0].due_date);
    } catch (error) {
      throw error;
    }
  },
  async getAllTasks() {
    const dbConnection = await connect();
    try {
      const result = await dbConnection.query('SELECT * FROM tasks');
      return result.rows.map(row => new Task(row.id, row.name, row.description, row.due_date));
    } catch (error) {
      throw error;
    }
  },
  async getTask(id) {
    const dbConnection = await connect();
    try {
      const result = await dbConnection.query('SELECT * FROM tasks WHERE id = $1', [id]);
      if (result.rows.length > 0) {
        return new Task(result.rows[0].id, result.rows[0].name, result.rows[0].description, result.rows[0].due_date);
      } else {
        return null;
      }
    } catch (error) {
      throw error;
    }
  },
  async updateTask(id, name, description, dueDate) {
    const dbConnection = await connect();
    try {
      await dbConnection.query('UPDATE tasks SET name = $1, description = $2, due_date = $3 WHERE id = $4', [name, description, dueDate, id]);
    } catch (error) {
      throw error;
    }
  },
  async deleteTask(id) {
    const dbConnection = await connect();
    try {
      await dbConnection.query('DELETE FROM tasks WHERE id = $1', [id]);
    } catch (error) {
      throw error;
    }
  },
  async createNote(title, content) {
    const dbConnection = await connect();
    try {
      const result = await dbConnection.query('INSERT INTO notes (title, content) VALUES ($1, $2) RETURNING *', [title, content]);
      return new Note(result.rows[0].id, result.rows[0].title, result.rows[0].content);
    } catch (error) {
      throw error;
    }
  },
  async getAllNotes() {
    const dbConnection = await connect();
    try {
      const result = await dbConnection.query('SELECT * FROM notes');
      return result.rows.map(row => new Note(row.id, row.title, row.content));
    } catch (error) {
      throw error;
    }
  },
  async updateNote(id, title, content) {
    const dbConnection = await connect();
    try {
      await dbConnection.query('UPDATE notes SET title = $1, content = $2 WHERE id = $3', [title, content, id]);
    } catch (error) {
      throw error;
    }
  },
  async deleteNote(id) {
    const dbConnection = await connect();
    try {
      await dbConnection.query('DELETE FROM notes WHERE id = $1', [id]);
    } catch (error) {
      throw error;
    }
  }
};