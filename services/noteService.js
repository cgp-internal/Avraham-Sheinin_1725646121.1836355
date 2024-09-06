const { Note } = require('./models/note');

class NoteService {
  async getAllNotes() {
    return await Note.getAllNotes();
  }

  async createNote(title, content) {
    return await Note.createNote(title, content);
  }

  async updateNote(id, title, content) {
    const note = new Note(id, title, content);
    return await note.updateNote(title, content);
  }

  async deleteNote(id) {
    const note = new Note(id, '', '');
    return await note.deleteNote();
  }
}

module.exports = { 
  getAllNotes: NoteService.prototype.getAllNotes, 
  createNote: NoteService.prototype.createNote, 
  updateNote: NoteService.prototype.updateNote, 
  deleteNote: NoteService.prototype.deleteNote 
};