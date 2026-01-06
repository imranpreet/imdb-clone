import { useEffect, useState } from 'react';
import './App.css';
import NoteInput from './components/NoteInput';
import NoteCard from './components/NoteCard';
import ThemeSwitcher from './components/ThemeSwitcher';

function App() {
  const [notes, setNotes] = useState([]);

  // Load notes from localStorage on mount
  useEffect(() => {
    const savedNotes = localStorage.getItem('notes');
    if (savedNotes) {
      try {
        setNotes(JSON.parse(savedNotes));
      } catch (error) {
        console.error('Error loading notes:', error);
      }
    }
  }, []);

  // Save notes to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes));
  }, [notes]);

  // Add new note
  const handleAddNote = (noteText) => {
    const newNote = {
      id: Date.now(),
      text: noteText,
      createdAt: new Date().toISOString(),
    };
    setNotes([newNote, ...notes]);
  };

  // Delete note
  const handleDeleteNote = (noteId) => {
    setNotes(notes.filter((note) => note.id !== noteId));
  };

  return (
    <div className="App">
      <header className="app-header">
        <div className="header-content">
          <div className="theme-switcher-wrapper">
            <ThemeSwitcher />
          </div>
          <h1 className="app-title">
            <span className="title-icon">📝</span>
            My Notes App
          </h1>
          <p className="app-subtitle">Capture your thoughts and ideas</p>
        </div>
      </header>

      <main className="app-main">
        <div className="notes-container">
          <NoteInput onAddNote={handleAddNote} />

          <div className="notes-list">
            {notes.length > 0 ? (
              notes.map((note) => (
                <NoteCard
                  key={note.id}
                  note={note}
                  onDeleteNote={handleDeleteNote}
                />
              ))
            ) : (
              <div className="empty-state">
                <div className="empty-icon">�</div>
                <h3 className="empty-title">No notes yet</h3>
                <p className="empty-description">
                  Start writing your first note above!
                </p>
              </div>
            )}
          </div>

          {notes.length > 0 && (
            <div className="stats-bar">
              <span className="stat-item">
                <strong>{notes.length}</strong> {notes.length === 1 ? 'note' : 'notes'} saved
              </span>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}

export default App;
