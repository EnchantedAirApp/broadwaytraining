import React from 'react';
import './App.css';
import BibleVerse from './components/BibleVerse';

function App() {
  return (
      <div className="App">
        <header>
          <h1>Random Bible Verse App</h1>
        </header>
        <BibleVerse />
    </div>
  );
}

export default App;
