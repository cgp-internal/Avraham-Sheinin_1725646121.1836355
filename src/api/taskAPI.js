const api = {}

api.getTasks = async () => {
  return (await import('../app')).getTasks
}

api.createTask = async (task) => {
  return (await import('../app')).createTask(task)
}

api.updateTask = async (id, task) => {
  return (await import('../app')).updateTask(id, task)
}

api.deleteTask = async (id) => {
  return (await import('../app')).deleteTask(id)
}

module.exports = api