import languages from "../../data/languages.json";
import { useState } from "react";

function Language(props) {
  const { setLanguage, setSelectedRole } = props;
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => setShowMenu(!showMenu);

  const changeLanguage = (code) => {
    setLanguage(code);
    setSelectedRole("");
    toggleMenu();
  };

  return (
    <div className="sm:flex-none absolute left-32 sm:left-0 mr-14 sm:relative">
      <button onClick={toggleMenu} className="px-2 py-1">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          className="w-8 h-8 stroke-white hover:stroke-teal-100"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"
          />
        </svg>
      </button>
      <div className={`drop ${showMenu? 'drop-active cut':''}`}></div>
      {/* Usamos "short-circuit-evaluation" para desplegar el menu */}
      {showMenu && (        
          <div className="lang-menu fade-in">          
          <div
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            {languages.map((lang) => (
              <button
                key={lang.id}
                onClick={() => changeLanguage(lang.code)}
                className="block px-5 py-3 text-sm font-semibold text-gray-500 hover:text-gray-900"
                role="menuitem"            
              >
                {lang.name} ({lang.code.substring(lang.code.length - 2)})
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Language;
