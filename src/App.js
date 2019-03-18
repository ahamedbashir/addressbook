import React, { Component } from 'react';
import logo from './logo.jpg';
import './App.css';
import ViewBook from './AddressBook/AddressBook';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'

import ReactPhoneInput from 'react-phone-input-2';
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

    fName: '',
    lName:'',
    dob: '',
    contact: '',
    add: false,
    view: false
  }
  
  addAddress = (event) => {
    event.preventDefault();
    let newPerson = {
      FirstName: this.state.fName,
      LastName: this.state.lName,
      Birthday: this.state.dob,
      Telephone: this.state.contact
    }

    this.setState({addressBook: [...this.state.addressBook, newPerson]});
    this.setState({fName: ''});
    this.setState({lName: '' });
    this.setState({dob: ''});
    this.setState({contact: ''});
  }

  deleteAddress = (key, event) =>{
    let book = [...this.state.addressBook];
    let index = book.findIndex((person)=>person.key === key);
    book.splice(index, 1);
    this.setState({addressBook: book});
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
        <div className='Body'>
        <button type="primary">Create New Contact</button> 
        <button type="primary">View Address Book</button>      
        <Form className="text-left" onSubmit={this.addAddress}>
            <Form.Group controlId="formAddress">

            <div className="inputBlock">
              <Form.Label>FirstName </Form.Label>
              <Form.Control
                type="text" 
                placeholder="Enter First Name"
                required
                value={this.state.fName}
                onChange={(event) => this.setState({fName: event.target.value})}/>
            </div>
              
            <div className="inputBlock">
              <Form.Label>LastName </Form.Label>
              <Form.Control 
                type="text" 
                placeholder="Enter Last Name"
                required
                value={this.state.lName}
                onChange={(event) => this.setState({lName: event.target.value})}/>
            </div>

            <div className="inputBlock">
              <Form.Label>Birthday </Form.Label>
              <Form.Control 
                type="date" 
                placeholder="Enter Date of Birth"
                value={this.state.dob}
                onChange={(event) => this.setState({dob: event.target.value})}/>
            </div>

            <div className="inputBlock">
              <Form.Label>Telephone</Form.Label>
              <ReactPhoneInput
                defaultCountry={'us'}
                required
                value={this.state.contact}
                onChange={(value) => this.setState({contact: value})}/>
            </div>
              
            </Form.Group>
          
            <Button variant="primary" type="submit">Add Contact</Button>
          </Form>
        <viewAddress book={this.state.addressBook}/>
        <div className="view">
          <div className = "search">
              <Form.Control
              type = "text"
              placeholder = "Enter Name to search"/>
            </div>
            <ViewBook book = {this.state.addressBook}/>
          {/* {this.state.addressBook.map(person =>
              <div className="person" key={person.Telephone}>
                <div>{person.FirstName}, {person.LastName}</div>
                <div>{person.Birthday}</div>
                <div>{person.Telephone}</div>
              </div>
          )} */}
        </div>
        </div>
      </div>
    );
  }
}

export default App;
