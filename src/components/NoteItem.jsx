const NoteItem = ({ note, onEdit, onDelete }) => {
    return (
      <div className="note-item">
        <h3>{note.title}</h3>
        <p>{note.content}</p>
        <div className="note-actions">
          <button onClick={() => onEdit(note)}>Upravit</button>
          <button onClick={() => onDelete(note.id)}>Smazat</button>
        </div>
      </div>
    );
  };
  
  export default NoteItem;