import { useState } from 'react'
import SearchBar from '../SearchBar/SearchBar'
import SelectMenu from '../SelectMenu/SelectMenu'
import CountriesList from '../CountriesList/CountriesList'
import { useTheme } from '../hooks/useTheme'

export default function Home() {
  const [query, setQuery] = useState('')
  const [isDark] = useTheme()
  return (
    <main className={`${isDark ? 'dark' : ''}`}>
      <div className="search-filter-container">
        <SearchBar setQuery={setQuery} />
        <SelectMenu setQuery={setQuery} />
      </div>
      <CountriesList query={query} />
    </main>
  )
}