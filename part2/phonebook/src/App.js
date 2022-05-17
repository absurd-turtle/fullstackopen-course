import { useState, useEffect } from 'react'

import Persons from "./components/Persons"
import PersonForm from "./components/PersonForm"
import Filter from "./components/Filter"
import Notification from "./components/Notification"
import "./main.css"

import phonebookService from './services/phonebook'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-1234567' }
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filterString, setFilterString] = useState('')
  const [notificationMessage, setNotificationMessage] = useState(null)


  useEffect(() => {
    phonebookService
      .getAll()
      .then(response => {
        setPersons(response.data)
      })
  }, [])

  //event handlers
  const addToPhonebook = (event) => {
    event.preventDefault()
    if (persons.find(person => person.name === newName) != undefined) {
      alert(`${newName} is already added to phonebook`)
    }
    else {
      phonebookService
        .create({ name: newName, number: newNumber })
        .then(response => {
          setNotificationMessage("Added " + response.data.name)
          setPersons(persons.concat(response.data))
          setTimeout(() => {
            setNotificationMessage(null)
          }, 5000)
        })
    }
  }

  const removePerson = (person) => {
    phonebookService
      .remove(person.id)
      .then(response => {
        setPersons(persons.filter(p => p.id != person.id))
      })
  }

  const removeFromPhonebook = (person) => {
    if (window.confirm("Delete " + person.name + "?")) {
      removePerson(person)
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
      <Notification type="success" message={notificationMessage} />

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

      <Persons persons={persons} filterString={filterString} deletePerson={removeFromPhonebook} />

    </div >
  )
}

export default App
