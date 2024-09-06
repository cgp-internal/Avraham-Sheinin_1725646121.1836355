class Task {
  constructor(id, name, description, dueDate) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.dueDate = dueDate;
  }

  static async createTask(name, description, dueDate) {
    // TO DO: implement database logic to create a new task
  }

  static async getAllTasks() {
    // TO DO: implement database logic to retrieve all tasks
  }

  static async getTask(id) {
    // TO DO: implement database logic to retrieve a task by id
  }

  async updateTask(name, description, dueDate) {
    // TO DO: implement database logic to update a task
  }

  static async deleteTask(id) {
    // TO DO: implement database logic to delete a task
  }
}

module.exports = { Task };