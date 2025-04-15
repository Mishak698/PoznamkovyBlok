import { useState, useEffect } from 'react';
import useNotes from '../hooks/useNotes';

const NoteForm = ({ editingNote, setEditingNote }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const { addNote, updateNote } = useNotes();

  useEffect(() => {
    if (editingNote) {
      setTitle(editingNote.title);
      setContent(editingNote.content);
    } else {
      setTitle('');
      setContent('');
    }
  }, [editingNote]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!title.trim()) {
      alert('Název poznámky je povinný');
      return;
    }

    const noteData = { title, content };

    try {
      if (editingNote) {
        await updateNote({ ...editingNote, ...noteData });
        setEditingNote(null);
      } else {
        await addNote(noteData);
      }
      
      setTitle('');
      setContent('');
    } catch (error) {
      console.error('Chyba při ukládání poznámky:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="note-form">
      <input
        type="text"
        placeholder="Název poznámky"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <textarea
        placeholder="Obsah poznámky"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <button type="submit">
        {editingNote ? 'Uložit změny' : 'Přidat poznámku'}
      </button>
      {editingNote && (
        <button 
          type="button" 
          onClick={() => setEditingNote(null)}
          className="cancel-btn"
        >
          Zrušit
        </button>
      )}
    </form>
  );
};

export default NoteForm;