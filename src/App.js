import React from 'react'
import data from './sampleData'
import './App.css'
import Queue from './components/Queue'
import Library from './components/Library'

function App() {
  const songs = data

  return (
    <div>
      <Queue />
      <Library />
      <nav>
        <p>Your Library</p>
        <p>Queue</p>
      </nav>
    </div>
  );
}

export default App
