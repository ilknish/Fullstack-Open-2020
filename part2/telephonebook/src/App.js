import React, { useState, useEffect } from 'react'
import Filter from './Filter';
import Person from './Person';
import NewName from './NewName';
import Notification from './Notification';
import personService from './persons';




const App = () => {

  const [persons, setPersons] = useState([])
  const [message, setMessage] = useState({ note: null });

  const showNote= (note, color = 'green') => {
    setMessage({ note, color });
    setTimeout(() => {
      setMessage({ note: null });
    }, 5000);
  };


  useEffect(() => {
    personService
      .getAll()
      .then(response => {
        setPersons(response.data)
      })
  }, [])
  

  let hasMatch = false
  
  const [ newName, setNewName ] = useState('')
  const [ newNum, setNewNum ] = useState('')
  const [ nameFilter, setNameFilter ] = useState('')
  

  const addPerson = (event) => {
    event.preventDefault()
    const nameObject = {name: newName, number: newNum}
    console.log(persons.indexOf(nameObject))
    

    persons.forEach((element) => {
        if (element.name === newName) {
            hasMatch = true
        }
    })

    if (hasMatch) {    
        const changeNumber = window.confirm(`${newName} is already added to phonebook, replcae old number with a new one`);
        if (changeNumber) {
          const personToChange = persons.find(n => n.name === newName)
          const changedPerson = { ...personToChange, number: newNum }
          const id = personToChange.id

          personService
            .changeNum(changedPerson)
            .then(response => {
              setPersons(persons.map(personToChange => personToChange.id !== id ? personToChange : response.data))
            })
            .catch(() => {
              showNote(
                `Error: ${changedPerson.name} already deleted from database.`,
                'red'
              );
            })
          showNote(`Updated ${changedPerson.name}'s number.`)

        }
    } else {
        setPersons(persons.concat(nameObject))       
        showNote(`Added ${nameObject.name} to phonebook.`)
        personService
          .create(nameObject)
          .then(response => {
            setPersons(persons.concat(response.data))
            setNewName('')
            setNewNum('')

          })
        
        
        
    }

    hasMatch = false   
  }

  const handlePersonChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  const handleNumChange = (event) => {
    console.log(event.target.value)
    setNewNum(event.target.value)
  }

  const handleFilterChange = (event) => {
    console.log(event.target.value)    
    setNameFilter(event.target.value)
  }

  
  const notesToShow = persons.filter(person => person.name.toLowerCase().includes(nameFilter.toLowerCase()))

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={message} />
      <Filter nameFilter={nameFilter} handleFilterChange={handleFilterChange}/>
      <h2>add a new</h2>
      <NewName
        addPerson = {addPerson}
        newName = {newName}
        handlePersonChange = {handlePersonChange}
        handleNumChange = {handleNumChange}
        newNum = {newNum} 
      />
      <h2>Numbers</h2>
      <Person notesToShow={notesToShow} setPersons={setPersons}/>
    </div>
  )
}


export default App