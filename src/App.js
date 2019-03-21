import React, { Component } from 'react';
import logo from './logo.jpg';
import './App.css';
import ViewBook from './AddressBook/AddressBook';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
// import UniqueId from 'react-html-id';
import ReactPhoneInput from 'react-phone-input-2';
class App extends Component {
  constructor(){
    super();
    // UniqueId.enableUniqueIds(this);
    this.state = {
      addressBook: [
        {
          // id: this.nextUniqueId(),
          FirstName: "Cathy" ,
          LastName: "Pierce",
          Birthday: "9/14/1996",
          Telephone: "200-910-8132",
        },
        {
          // id: this.nextUniqueId(),
          FirstName: "Alfonso",
          LastName: "Cooley",
          Birthday: "8/10/1973",
          Telephone: "200-657-9362"
        },
        {
          // id: this.nextUniqueId(),
          FirstName: "Victor",
          LastName: "Gordon",
          Birthday: "8/3/1970",
          Telephone: "200-661-9407"
        },
        {
          // id: this.nextUniqueId(),
          FirstName: "Colleen",
          LastName: "Wright",
          Birthday: "10/28/1967",
          Telephone: "200-250-7949"
        },
        {
          // id: this.nextUniqueId(),
          FirstName: "James",
          LastName: "Johnston",
          Birthday: "5/11/1972",
          Telephone: "200-645-3176"
        },
        {
          // id: this.nextUniqueId(),
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

  deleteAddressHandler = (index, event) =>{
    const addressbook = [...this.state.addressBook];
    // let index = book.findIndex((person)=>person.id === key);
    addressbook.splice(index, 1);
    this.setState({addressBook:addressbook});
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
        
        <button type="primary" onClick={()=>this.setState({add: true})}>Create New Contact</button>
        {this.state.add &&
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
                required="true"
                value={this.state.contact}
                onChange={(value) => this.setState({contact: value})}/>
            </div>
            </Form.Group>
            <Button variant="primary" type="submit">Add Contact</Button>
          </Form>
        }
        
        <div className="view">
          <div className = "search">
              <Form.Control
              type = "text"
              placeholder = "Enter Name to search"/>
          </div>
          <button type="primary" onClick={()=>this.setState({view: ! this.state.view})}>View Address Book</button>
          {this.state.view &&
          <ViewBook 
            book = {this.state.addressBook}
            deletePerson = {this.deleteAddressHandler}/>
          }
        </div>
        </div>
      </div>
    );
  }
}

export default App;
