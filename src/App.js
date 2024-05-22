import React from 'react';
import './App.css';
import BibleVerse from './components/BibleVerse';
import DisplayBoard from './components/DisplayBoard'
import logo from './images/broadway.png'

function App() {
  const frames = []
  return (
      <div className="App">
        <img src={logo}  alt='Broadway Community Center'/>
        <header>
          <h3>Introduction to Computer Programming</h3>
          <h4>Using ReactJS & ChatGPT</h4>
        </header>
        <BibleVerse />
    </div>
  );
}

export default App;
