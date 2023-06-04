import React, { useContext } from 'react'
import { ThemeContext } from './contexts/ThemeContext'
// import { ThemeContext, AppProvider } from './contexts/ThemeContext';
import Navbar from './components/Navbar'
import Header from './components/Header'
import About from './components/About'
import Works from './components/works'
import Articles from './components/Articles'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Spinner from './components/Spinner'

const App = () => {

  const { darkMode, spinner } = useContext(ThemeContext)
  // const [darkMode, setDarkMode] = useState(false)
  // const [modal, setModal] = useState(false)
  // const [spinner, setSpinner] = useState(true)

  // const darkToggle = () => {
  //   setDarkMode(!darkMode)
  // }

  // const openModal = () => {
  //   setModal(!modal)
  // }

  // useEffect(() => {
  //   // Simulate a delay before showing the main content
  //   setTimeout(() => {
  //     setSpinner(false);
  //   }, 1500); // Adjust the duration as needed
  // })

  return (
    <>
      
        <div>
          {spinner ?
            (<div className='bg-black p-10'><Spinner /></div>) : (
              <div className={`${darkMode ? 'dark' : ''}`}>
                < Navbar />
                < Header />
                < About />
                < Works />
                < Articles />
                < Contact />
                < Footer />
              </div>
            )}
        </div>
      
    </>
  )
}

export default App
