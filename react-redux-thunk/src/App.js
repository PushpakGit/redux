import React from 'react';
import logo from './logo.svg';
import './App.css';

import PostsList from './Components/postList'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p className="app-title">
          Post Demo
        </p>        
      </header>
      <PostsList />
    </div>
  );
}

export default App;
