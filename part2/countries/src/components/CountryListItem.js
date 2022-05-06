const CountryListItem = ({ country, onClick }) => {
  return <div>
    {country.name.common}
    <button onClick={onClick}>show</button>
  </div >
}

export default CountryListItem
