import React, { useState } from 'react';
import './NoteInput.css';

const NoteInput = ({ onAddNote }) => {
  const [noteText, setNoteText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (noteText.trim()) {
      onAddNote(noteText);
      setNoteText('');
    }
  };

  return (
    <form className="note-input-form" onSubmit={handleSubmit}>
      <textarea
        className="note-textarea"
        placeholder="Write your note here..."
        value={noteText}
        onChange={(e) => setNoteText(e.target.value)}
        rows="4"
      />
      <button 
        type="submit" 
        className="save-note-btn"
        disabled={!noteText.trim()}
      >
        <span className="btn-icon">💾</span>
        Save Note
      </button>
    </form>
  );
};

export default NoteInput;
