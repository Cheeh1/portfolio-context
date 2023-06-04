import { createContext, useState, useEffect } from "react";

// create the context
export const ThemeContext = createContext({});

// create the context provider
export const AppProvider = ({ children }) => {
  // define your state variables
  const [darkMode, setDarkMode] = useState(false);
  const [modal, setModal] = useState(false);
  const [spinner, setSpinner] = useState(true);

  // define your functions
  const darkToggle = () => {
    setDarkMode(!darkMode);
  };

  const openModal = () => {
    setModal(!modal);
  };

  useEffect(() => {
    // Simulate a delay before showing the main content
    setTimeout(() => {
      setSpinner(false);
    }, 1500); // Adjust the duration as needed
  });

  // Pass the state variables and functions to the context
  const contextValues = {
    darkMode,
    modal,
    spinner,
    darkToggle,
    openModal,
  };

  return (
    <ThemeContext.Provider value={contextValues}>{children}</ThemeContext.Provider>
  )
};

export default AppProvider
