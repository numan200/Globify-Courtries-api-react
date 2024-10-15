import Header from './components/Header/Header'
import { Outlet } from 'react-router-dom'
import { ThemeProvider } from './components/context/ThemeContext'
import './App.css'

const App = () => {
   return (
      <ThemeProvider>
        <Header />
        <Outlet />
      </ThemeProvider>
  )
}

export default App