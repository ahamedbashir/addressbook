import React from 'react';

const viewBook = (props)  => {
    
    let book = props.book.map((person, index) => {
       return ( <div className="person">
            <div>{person.FirstName}, {person.LastName}</div>
            <div>{person.Birthday}</div>
            <div>{person.Telephone}</div>
            <button onClick={() => props.deletePerson(index)}>Delete Contact</button>
        </div>);
    })
    return book;
}

export default viewBook;