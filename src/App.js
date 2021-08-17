
import React from 'react';
import './Search.js';
import './App.css';
import Search from './Search.js';
import Results from './Results.js';
import background from "./Spring_Landscape_1.jpg";

function App() {
  return (
    <div className="App flex items-center p-4 h-screen b justify-around bg-gradient-to-r from-white via-gray-300 to-black" style={{ backgroundImage: `url(${background})` }}>
      <Search />
      <Results />

    </div>
  );
}

export default App;
