import React, { Component } from 'react';
import logo from './logo.jpg';
import './App.css';

class App extends Component {
  state = {
    addressBook: [
      {
        FirstName: "Cathy" ,
        LastName: "Pierce",
        Birthday: "9/14/1996",
        Telephone: "200-910-8132"
      },
      {
        FirstName: "Alfonso",
        LastName: "Cooley",
        Birthday: "8/10/1973",
        Telephone: "200-657-9362"
      },
      {
        FirstName: "Victor",
        LastName: "Gordon",
        Birthday: "8/3/1970",
        Telephone: "200-661-9407"
      },
      {
        FirstName: "Colleen",
        LastName: "Wright",
        Birthday: "10/28/1967",
        Telephone: "200-250-7949"
      },
      {
        FirstName: "James",
        LastName: "Johnston",
        Birthday: "5/11/1972",
        Telephone: "200-645-3176"
      },
      {
        FirstName: "Anna",
        LastName: "Reyes",
        Birthday: "9/10/1975",
        Telephone: "200-707-8670"
      }
    ],

    name: '',
    dob: '',
    contact: ''
  }
  
  displayAddressBook = (props) =>{
      return props.Book.map( (item) =>
        <div>{item.FirstName}</div>
      );
  }

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
              Search or Modify Address Book
            </p>
            
          </div>
        </header>
        <button className="addContact">Add New Contact</button>
        {/* <displayAddressBook Book = {this.state.addressBook}/> */}
        <div className="view">{this.state.addressBook.map(person =>
          <div className="person">
            <div>{person.FirstName}, {person.LastName}</div>
            <div>{person.Birthday}</div>
            <div>{person.Telephone}</div>
          </div>
          )}
        </div>
      </div>
    );
  }
}

export default App;
