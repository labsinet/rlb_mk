
import "./Navbar.css"
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { faBars, faUser } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="sticky top-0 flex justify-between items-center bg-yellow-900 p-4 text-gray-300">
      {/* Menu button for mobile view */}
      <button
        className="mr-4 block md:hidden bg-yellow-900 text-gray-100"
        onClick={toggleMenu}
      >
        <FontAwesomeIcon icon={faBars} size="lg" />
      </button>

      {/* Logo */}
      <a href="/" className="text-xl font-bold text-white">
        ePersonalLib
      </a>

      {/* Menu links */}
      <ul className="hidden md:flex space-x-4 text-white">
        <li>
          <a href="/" className="text-white">Книги</a>
        </li>
        <li>
          <a href="#" className="text-white">Рекомендації</a>
        </li>
        <li>
          <a href="#" className="text-white">Жанри</a>
        </li>
        <li>
          <a href="/about" className="text-white">Про...</a>
        </li>
      </ul>

      {/* Login/Profile menu */}
      <div className="flex items-center space-x-4">
        {!isOpen && ( // Show login button when menu is closed
          <button className="px-4 py-2 rounded-lg bg-blue-700 text-gray-200">
            Вхід
          </button>
        )}
        {isOpen && ( // Show user menu when menu is open
          <div className="flex items-center space-x-2">
            <FontAwesomeIcon icon={faUser} size="lg" />
            <span className="text-gray-200 text-white">Профіль</span>
          </div>
        )}
      </div>

      {/* Mobile menu (hidden by default) */}
      {isOpen && (
        <div className="absolute top-0 left-0 w-full bg-gray-800 p-4 text-gray-300">
          <ul className="space-y-4">
            <li>
              <a href="/" className="text-white">Книги</a>
            </li>
            <li>
              <a href="#" className="text-white">Рекомендації</a>
            </li>
            <li>
              <a href="#" className="text-white">Жанри</a>
            </li>
            <li>
              <a href="/about" className="text-white">Про...</a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};
export default Navbar;