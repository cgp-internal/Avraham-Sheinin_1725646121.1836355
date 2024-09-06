class Note {
  constructor(id, title, content) {
    this.id = id;
    this.title = title;
    this.content = content;
  }

  static async createNote(title, content) {
    // TO DO: implement database insertion logic
    // For now, return a new Note object
    return new Note(null, title, content);
  }

  static async getAllNotes() {
    // TO DO: implement database retrieval logic
    // For now, return an empty array
    return [];
  }

  async updateNote(title, content) {
    // TO DO: implement database update logic
    // For now, update the object properties
    this.title = title;
    this.content = content;
  }

  async deleteNote() {
    // TO DO: implement database deletion logic
    // For now, do nothing
  }
}

module.exports = { Note };