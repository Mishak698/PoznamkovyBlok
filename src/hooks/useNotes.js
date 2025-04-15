import { useState, useEffect } from 'react';

const useNotes = () => {
  const [notes, setNotes] = useState(() => {
    const savedNotes = localStorage.getItem('notes');
    return savedNotes ? JSON.parse(savedNotes) : [];
  });

  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes));
  }, [notes]);

  const addNote = (note) => {
    const newNote = {
      id: Date.now(),
      title: note.title.trim(),
      content: note.content.trim()
    };
    setNotes([...notes, newNote]);
    return newNote; 
  };

  const updateNote = (updatedNote) => {
    setNotes(notes.map(note => 
      note.id === updatedNote.id ? updatedNote : note
    ));
  };

  const deleteNote = (id) => {
    setNotes(notes.filter(note => note.id !== id));
  };

  return { notes, addNote, updateNote, deleteNote };
};

export default useNotes;