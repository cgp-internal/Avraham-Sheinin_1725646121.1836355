const express = require('express');
const router = express.Router();
const { getAllNotes, createNote, updateNote, deleteNote } = require('../services/noteService');
const { Note } = require('../models/note');

router.get('/notes', async (req, res) => {
  try {
    const notes = await getAllNotes();
    res.json(notes);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error fetching notes' });
  }
});

router.post('/notes', async (req, res) => {
  try {
    const { title, content } = req.body;
    const newNote = await createNote(title, content);
    res.json(newNote);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error creating note' });
  }
});

router.put('/notes/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { title, content } = req.body;
    await updateNote(id, title, content);
    res.json({ message: 'Note updated successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error updating note' });
  }
});

router.delete('/notes/:id', async (req, res) => {
  try {
    const { id } = req.params;
    await deleteNote(id);
    res.json({ message: 'Note deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error deleting note' });
  }
});

module.exports = {
  getNotes: router.get.bind(router),
  createNote: router.post.bind(router),
  updateNote: router.put.bind(router),
  deleteNote: router.delete.bind(router)
};