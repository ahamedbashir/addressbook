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
            <p>
              Your address book...
            </p>
            <a
              className="App-link"
              href=""
              target="_blank"
              rel="noopener noreferrer"
            >
              Add New Contact
            </a>
          </div>
        </header>
      </div>
    );
  }
}

export default App;
