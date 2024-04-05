import React, { useEffect, useState } from 'react'
import './App.css'
import Countries from './components/Countries'
import Search from './components/Search'


const url = "https://restcountries.com/v3.1/all"

function App() {

  const [isLoading, setIsLoading] = useState(true)
  const [error, setIsError] = useState(null)
  const [countries, setCountries] = useState([])
  const [filterCountries, setFilterCountries] = useState(countries);

  const fetchData = async (url) => {
    setIsLoading(true)

    try {
      const response = await fetch(url)
      const data = await response.json()

      setCountries(data)
      setFilterCountries(data)
      setIsLoading(false)
      setIsError(null)

    } catch (error) {

      setIsLoading(false)
      setIsError(error)
    }
  }

  useEffect(() => {
    fetchData(url)
  }, [])

  const handleDelete = (name) => {

    const filter = countries.filter((country) => country.name.common !== name)

    setFilterCountries(filter)
  }

  const handleSearch = (searchValue) => {

    const value = searchValue.toLowerCase()

    const searchCountries = countries.filter((country) => {

      const searchCountry = country.name.common.toLowerCase()

      return searchCountry.startsWith(value)

    })
    setFilterCountries(searchCountries)
  }

  return (
    <>
      <h1>Country App</h1>
      <br />
      <Search searchValue={handleSearch} />
      {isLoading && <h1>Loading...</h1>}

      {error && <h1>{error.message}</h1>}

      <Countries countries={filterCountries} deleteName={handleDelete} />

    </>
  )
}

export default App