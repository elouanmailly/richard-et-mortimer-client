import React, { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import darkModeContext from '../contexts/darkModeContext';

function Navbar() {
  const [t] = useTranslation('translation');
  const { darkMode, setDarkMode } = useContext(darkModeContext);

  return (
    <nav className="relative w-full flex flex-wrap justify-between py-3 bg-gray-200 dark:bg-gray-800 text-black dark:text-white text-lg font-bold">
      <div className="pl-3">
        <NavLink to="/favorites">
          <FontAwesomeIcon icon={faHeart} className="text-red-700" />
        </NavLink>
      </div>
      <div>
        <NavLink to="/">
          {t('navbarTitle')}
        </NavLink>
      </div>
      <div className="px-3 flex">
        <button type="button" onClick={() => setDarkMode(!darkMode)}>
          {
            darkMode ? <FontAwesomeIcon icon={faMoon} />
              : <FontAwesomeIcon icon={faSun} />
          }
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
