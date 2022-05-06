const Persons = ({ persons, filterString }) =>
  persons
    .filter(person => person.name.toLowerCase().startsWith(filterString.toLowerCase()))
    .map(person => <div key={person.name}>{person.name} {person.number}</div>)

export default Persons
