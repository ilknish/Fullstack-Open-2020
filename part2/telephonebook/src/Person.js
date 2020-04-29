import React from 'react';
import personService from './persons';

const Person = ({notesToShow, setPersons}) => {
    
    const deletePerson = (person) => {
        console.log(person.id)
        const id = person.id
        const answer = window.confirm(`Delete ${person.name}?`)    
        if (answer) {
          personService
            .delPerson(person.id)
            .then(data => {
                setPersons(notesToShow.filter(person => person.id !== id))
            })            
        }                     
    }
        
    
    return (
        <ul>
            {notesToShow.map((person, i) => 
                <li key={i}>
                    {person.name} {person.number} <button onClick={() => {
                            deletePerson(person) }}> delete </button>
                </li>
            )}
        </ul>
    )
}


export default Person