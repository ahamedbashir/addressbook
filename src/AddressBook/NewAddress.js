import React from 'react';

const NewAddress = () => {
    return (){
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
    };
}