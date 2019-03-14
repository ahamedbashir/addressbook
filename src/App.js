import React, { Component } from 'react';
import logo from './logo.jpg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div>
            <img src={logo} className="App-logo" alt="logo" />
          </div>
          <div>
            <h2>
              Your address book...
            </h2>
            <p>
              Read, Add, Delete, or Modify your Address Book
            </p>
          </div>
        </header>
        <a
          className="App-link"
          href=""
          target="_blank"
          rel="noopener noreferrer"
        >
        Add New Contact
        </a>
      </div>
      
    );
  }
}

export default App;
