import { useState } from 'react';
import NoteList from './components/NoteList';
import NoteForm from './components/NoteForm';
import SearchBar from './components/SearchBar';
import './styles/App.css';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [editingNote, setEditingNote] = useState(null);

  return (
    <div className="app">
      <h1>Poznámkový blok</h1>
      <SearchBar onSearch={setSearchTerm} />
      <NoteForm 
        editingNote={editingNote} 
        setEditingNote={setEditingNote} 
      />
      <NoteList 
        searchTerm={searchTerm} 
        setEditingNote={setEditingNote} 
      />
    </div>
  );
}

export default App;