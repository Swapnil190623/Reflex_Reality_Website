// src/components/DarkModeToggle.jsx

import React, { useEffect, useState } from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';

function DarkModeToggle() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Check for saved user preference on component mount
  useEffect(() => {
    const savedMode = localStorage.getItem('darkMode');
    if (savedMode) {
      setIsDarkMode(savedMode === 'true');
      if (savedMode === 'true') {
        document.documentElement.classList.add('dark');
      }
    } else {
      // Optional: Use system preference if no preference is saved
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setIsDarkMode(prefersDark);
      if (prefersDark) {
        document.documentElement.classList.add('dark');
      }
    }
  }, []);

  // Toggle dark mode and save preference
  const toggleDarkMode = () => {
    if (isDarkMode) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('darkMode', 'false');
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('darkMode', 'true');
    }
    setIsDarkMode(!isDarkMode);
  };

  return (
    <button
      onClick={toggleDarkMode}
      className="flex items-center justify-center w-10 h-10 bg-gray-200 dark:bg-gray-700 rounded-full focus:outline-none"
      aria-label="Toggle Dark Mode"
    >
      {isDarkMode ? (
        <FaSun className="text-yellow-400 w-6 h-6" />
      ) : (
        <FaMoon className="text-gray-800 w-6 h-6" />
      )}
    </button>
  );
}

export default DarkModeToggle;
