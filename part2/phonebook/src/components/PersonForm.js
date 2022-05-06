const PersonForm = ({ addToPhonebook, newNumber, handleNumberChange, newName, handleNameChange }) => {
  return <form onSubmit={addToPhonebook}>
    <div>
      name: <input value={newName} onChange={handleNameChange} />
    </div>
    <div>number: <input value={newNumber} onChange={handleNumberChange} /></div>
    <div>
      <button type="submit">add</button>
    </div>
  </form>
}

export default PersonForm
