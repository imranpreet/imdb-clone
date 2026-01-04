import React from 'react';
import { useTheme } from '../context/ThemeContext';
import './ThemeSwitcher.css';

const ThemeSwitcher = () => {
  const { toggleTheme, isDark } = useTheme();

  return (
    <div className="theme-switcher">
      <button 
        className="theme-toggle-btn" 
        onClick={toggleTheme}
        aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
        title={`Switch to ${isDark ? 'light' : 'dark'} mode`}
      >
        <div className="toggle-track">
          <div className="toggle-thumb">
            <span className="theme-icon">
              {isDark ? '🌙' : '☀️'}
            </span>
          </div>
        </div>
        <span className="theme-label">
          {isDark ? 'Dark' : 'Light'} Mode
        </span>
      </button>
    </div>
  );
};

export default ThemeSwitcher;
