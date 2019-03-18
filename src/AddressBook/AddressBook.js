import React from 'react';

const viewBook = (props)  => {
    
    let book = props.book.map((person) => {
       return ( <div className="person" key={person.FirstName+person.LastName}>
            <div>{person.FirstName}, {person.LastName}</div>
            <div>{person.Birthday}</div>
            <div>{person.Telephone}</div>
        </div>);
    })

    return book;
}

export default viewBook;