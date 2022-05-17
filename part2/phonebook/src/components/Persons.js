const Persons = ({ persons, filterString, deletePerson }) =>
  persons
    .filter(person => person.name.toLowerCase().startsWith(filterString.toLowerCase()))
    .map(person => <div key={person.name}>{person.name} {person.number} <button onClick={() => deletePerson(person)}>delete</button></div>)

export default Persons
