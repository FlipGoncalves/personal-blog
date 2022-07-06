import React from 'react';
import logo from './logo.svg';
import './App.css';

import Navbar from './components/navbar/navbar';

function App() {
  return (
    <div className="App">

      <div class="hero" style={{backgroundColor: 'grey'}}>

        <Navbar />

      </div>
    </div>
  );
}

export default App;
