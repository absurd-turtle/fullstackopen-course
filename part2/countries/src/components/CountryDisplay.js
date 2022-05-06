const CountryDisplay = ({ country }) => {
  return <div>
    <h1>{country.name.common}</h1>
    <p>capital {country.capital[0]}</p>
    <p>area {country.area}</p>

    <b>languages:</b>
    <ul>
      {Object.values(country.languages).map(l => <li key={l}>{l}</li>)}
    </ul>

    <img src={country.flags.png} alt="flag" />
  </div>
}

export default CountryDisplay
