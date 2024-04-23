import React, { useContext } from 'react';
import { StyleContext } from '../App';

const ThemeContext = () => {

  let { theme, setTheme } = useContext(StyleContext);

  function toggleTheme() {
    setTheme(theme === 'light' ? 'dark' : 'light');
  }

  return (
    <>
      <div className={`switch ${theme === 'light' ? '' : 'darkSwitch'}`}>
        <button
          onClick={toggleTheme}
          className={`switchBtn ${theme === 'light' ? '' : 'darkSwitchBtn'}`}>
           change
        </button>
      </div>
    </>
  );
};

export default ThemeContext;