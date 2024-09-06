const { getNotes, createNote, updateNote, deleteNote } = require('../../app');

const getNotesAPI = async () => {
  try {
    const result = await getNotes();
    return result;
  } catch (error) {
    throw error;
  }
};

const createNoteAPI = async (data) => {
  try {
    const result = await createNote(data);
    return result;
  } catch (error) {
    throw error;
  }
};

const updateNoteAPI = async (id, data) => {
  try {
    const result = await updateNote(id, data);
    return result;
  } catch (error) {
    throw error;
  }
};

const deleteNoteAPI = async (id) => {
  try {
    const result = await deleteNote(id);
    return result;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  getNotesAPI,
  createNoteAPI,
  updateNoteAPI,
  deleteNoteAPI,
};