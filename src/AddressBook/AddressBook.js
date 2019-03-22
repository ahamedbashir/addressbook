import React from 'react';

const viewBook = (props)  => {
    
    let book = props.book.map((person, index) => {
       return ( <div className="person" id={person.id}>
            <div>{person.FirstName}, {person.LastName}</div>
            <div>{person.Birthday}</div>
            <div>{person.Telephone}</div>
            <button onClick={() => props.deletePerson(person.id)}>Delete Contact</button>
        </div>);
    })
    return book;
}

export default viewBook;