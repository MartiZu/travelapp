"use client"

import React, { useState, useEffect } from 'react';

const Switch = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // Check local storage for saved dark mode preference on component mount
    const savedDarkMode = localStorage.getItem('darkMode');
    console.log(localStorage.getItem('darkMode'));
    if (savedDarkMode !== null) {
      setDarkMode(savedDarkMode === 'true');
    }
  }, []);

  const toggleDarkMode = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    document.documentElement.classList.toggle('dark-mode', newDarkMode);
    localStorage.setItem('darkMode', newDarkMode);
  };

  return (
    <div>
      <label>
        <input type="checkbox" checked={darkMode} onChange={toggleDarkMode} />
        Dark Mode
      </label>
    </div>
  );
};

export default Switch;
