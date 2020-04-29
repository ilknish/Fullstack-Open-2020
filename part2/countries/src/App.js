import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Filter from './Filter';
import Person from './Person';





const App = () => {

  const [persons, setPersons] = useState([])

  useEffect(() => {
    console.log('effect')
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(response => {
        console.log('promise fulfilled')
        setPersons(response.data)
      })
  }, [])
  console.log('render', persons.length, 'persons')


  const [ nameFilter, setNameFilter ] = useState('')
  

  const changeCountriesFilter = (filter) => {        
    setNameFilter(filter)
  }

  const handleFilterChange = (event) => {
    console.log(event.target.value)    
    setNameFilter(event.target.value)
  }

  const notesToShow = persons.filter(person => person.name.toLowerCase().includes(nameFilter.toLowerCase()))

  return (
    <div>
      <Filter nameFilter={nameFilter} handleFilterChange={handleFilterChange}/>      
      <Person notesToShow={notesToShow} changeFilter={changeCountriesFilter}/>
    </div>
  )
}

export default App