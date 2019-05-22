import React from 'react';
import one from './one.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={one} className="App-logo" alt="logo" />
        <a>
          点击下方蓝色按钮抢票
        </a>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          抢
        </a>
      </header>
    </div>
  );
}

export default App;
