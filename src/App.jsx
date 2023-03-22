import React, { useState, useEffect } from "react";
import Page from './components/Page';
import DarkModeToggle from './components/DarkModeToggle';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    isDarkMode ? document.body.classList.add("dark") : document.body.classList.remove("dark");    
  }, [isDarkMode]);
  return(
    <div>
      <DarkModeToggle setIsDarkMode={setIsDarkMode} isDarkMode={isDarkMode}/>
      <Page/>
    </div>
  )
}

export default App
