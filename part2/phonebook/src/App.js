import { useState } from 'react'

import Persons from "./components/Persons"
import PersonForm from "./components/PersonForm"
import Filter from "./components/Filter"

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-1234567' }
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filterString, setFilterString] = useState('')


  //event handlers
  const addToPhonebook = (event) => {
    event.preventDefault()
    if (persons.find(person => person.name === newName) != undefined) {
      alert(`${newName} is already added to phonebook`)
    }
    else {
      setPersons(persons.concat({ name: newName, number: newNumber }))
    }
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }
  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }
  const handleFilterChange = (event) => {
    setFilterString(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>

      <Filter filterString={filterString} handleFilterChange={handleFilterChange} />

      <h2>add a new</h2>

      <PersonForm
        addToPhonebook={addToPhonebook}
        newName={newName}
        handleNameChange={handleNameChange}
        newNumber={newNumber}
        handleNumberChange={handleNumberChange}
      />

      <h2>Numbers</h2>

      <Persons persons={persons} filterString={filterString} />

    </div >
  )
}

export default App
