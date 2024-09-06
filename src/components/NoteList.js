import React, { useState, useEffect } from 'react';
import { getNotesAPI } from '../api/noteAPI';

const NoteList = () => {
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchNotes = async () => {
      setLoading(true);
      try {
        const result = await getNotesAPI();
        setNotes(result);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchNotes();
  }, []);

  return (
    <div>
      <h1>Notes</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {notes.map((note) => (
            <li key={note.id}>{note.title}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default NoteList;