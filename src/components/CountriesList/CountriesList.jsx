import React, { useEffect, useState } from 'react'
import CountryCard from '../CountryCard/CountryCard'
import CountriesListShimmer from '../CountriesListShimmer/CountriesListShimmer'

export default function CountriesList({ query }) {
  const [countriesData, setCountriesData] = useState([])

  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
      .then((res) => res.json())
      .then((data) => {
        setCountriesData(data)
      })
  }, [])

  if (!countriesData.length) {
    return <CountriesListShimmer />
  }

  // Sort the countries alphabetically by name
  const sortedCountries = countriesData.sort((a, b) => 
    a.name.common.localeCompare(b.name.common)
  )

  return (
    <>
      <div className="countries-container">
        {sortedCountries
          .filter((country) =>
            country.name.common.toLowerCase().includes(query) || 
            country.region.toLowerCase().includes(query)
          )
          .map((country) => {
            return (
              <CountryCard
                key={country.name.common}
                name={country.name.common}
                flag={country.flags.svg}
                population={country.population}
                region={country.region}
                capital={country.capital?.[0]}
                data={country}
              />
            )
          })}
      </div>
    </>
  )
}
