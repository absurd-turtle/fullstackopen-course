import { useState, useEffect } from 'react'
import axios from 'axios'
import Filter from "./components/Filter"
import CountryDisplay from "./components/CountryDisplay"
import CountryListItem from "./components/CountryListItem"

const App = () => {
  const [countries, setCountries] = useState([
  ])
  const [filteredCountries, setFilteredCountries] = useState([
  ])
  const [filterString, setFilterString] = useState('')

  useEffect(() => {
    axios
      .get('https://restcountries.com/v3.1/all')
      .then(response => {
        setCountries(response.data)
        setFilteredCountries(filterCountries(filterString, countries))
      })
  }, [])

  const filterCountries = (filterString, countries) => {
    return countries.filter(country => country.name.common.match(new RegExp(filterString, 'i')) != null)
  }

  const handleFilterChange = (event) => {
    setFilterString(event.target.value)
    setFilteredCountries(filterCountries(event.target.value, countries))
  }

  return (
    <div>
      <Filter filterString={filterString} handleFilterChange={handleFilterChange} />
      {
        (filteredCountries.length > 10)
          ? <p>Too many matches, specify another filter</p>
          : (filteredCountries.length == 1)
            ? <CountryDisplay country={filteredCountries[0]} />
            : filteredCountries.map(
              country => <CountryListItem
                key={country.name.common}
                country={country}
                onClick={() => {
                  setFilterString(country.name.common)
                  setFilteredCountries(filterCountries(country.name.common, countries))
                }}
              />
            )
      }
    </div >
  )
}

export default App
