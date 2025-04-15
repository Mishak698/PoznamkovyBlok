import { useMemo } from 'react';
import NoteItem from './NoteItem';
import useNotes from '../hooks/useNotes';

const NoteList = ({ searchTerm, setEditingNote }) => {
  const { notes, deleteNote } = useNotes();

  const filteredNotes = useMemo(() => {
    return notes.filter(note => 
      note.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      note.content.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [notes, searchTerm]);

  return (
    <div className="note-list">
      {filteredNotes.length > 0 ? (
        filteredNotes.map(note => (
          <NoteItem 
            key={note.id} 
            note={note} 
            onEdit={setEditingNote} 
            onDelete={deleteNote} 
          />
        ))
      ) : (
        <p>Žádné poznámky k zobrazení</p>
      )}
    </div>
  );
};

export default NoteList;