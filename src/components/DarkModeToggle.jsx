import React, { useState, useEffect } from "react";


const DarkModeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const isDark = localStorage.getItem("dark") === "true";
    setIsDarkMode(isDark);
    const root = document.documentElement;
    root.classList.toggle("dark", isDark);
  }, []);

  const handleToggle = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    localStorage.setItem("dark", newMode);
    const root = document.documentElement;
    root.classList.toggle("dark", newMode);
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <button
        type="button"
        className="bg-gray-200 dark:bg-neutral-900 rounded-full p-2 h-14 w-14 justify-center
        flex items-center transition-all duration-300 ease-in-out"
        onClick={handleToggle}
      >
        {isDarkMode ? (
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" className="w-8 h-8 stroke-white">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
          </svg>
        
        ) : 
        (
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-8 h-8">
            <path stroke-linecap="round" stroke-linejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
          </svg>
        )}
      </button>
    </div>
  );
};

export default DarkModeToggle;