import React, { useState, useEffect } from "react";
import AgentList from './components/AgentList';
import DarkModeToggle from './components/DarkModeToggle';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    isDarkMode ? document.body.classList.add("dark") : document.body.classList.remove("dark");    
  }, [isDarkMode]);
  return(
    <div>
      <DarkModeToggle setIsDarkMode={setIsDarkMode} isDarkMode={isDarkMode}/>
      <AgentList/>
    </div>
  )
}

export default App
