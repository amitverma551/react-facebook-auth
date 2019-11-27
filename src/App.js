import React from 'react';
import './App.css';
import Facebook from './components/Facebook';
import Google from './components/Google';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Facebook Authentication</h1>
        <Facebook />
        <Google />
      </header>
      
    </div>
  );
}

export default App;
