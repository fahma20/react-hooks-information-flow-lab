import React from 'react';
import styles from './Header.module.css';

const Header = ({ isDarkMode, onDarkModeClick }) => (
  <div className={styles.Header}>
    <header>
      <h2>Shopster</h2>
      <button onClick={onDarkModeClick}>
        {isDarkMode ? "Light" : "Dark"} Mode
      </button>
    </header>
  </div>
);

export default Header;
