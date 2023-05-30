import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Header from './components/Header'
import About from './components/About'
import Works from './components/works'
import Articles from './components/Articles'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { ThemeContext } from './contexts/ThemeContext'

const App = () => {

  const [darkMode, setDarkMode] = useState(false)
  const [modal, setModal] = useState(false)

  const darkToggle = () => {
    setDarkMode(!darkMode)
  }

  const openModal = () => {
    setModal(!modal)
  }

  return (
    <>
      <div className={`${darkMode ? 'dark' : ''}`}>
        <ThemeContext.Provider value={{ darkMode, darkToggle, modal, openModal }}>
          < Navbar />
          < Header />
          < About />
          < Works />
          < Articles />
          < Contact />
          < Footer />
        </ThemeContext.Provider>
      </div>
    </>
  )
}

export default App
