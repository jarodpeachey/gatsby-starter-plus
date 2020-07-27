/* eslint-disable import/prefer-default-export */
import React from 'react';

export const theme = {
  radius: '4px',
  fontSize: {
    h1: 48,
    h2: 36,
    h3: 28,
    h4: 24,
    h5: 20,
    h6: 16,
    p: 17,
    small: 14,
  },
  color: {
    success: '#54dd7e',
    error: '#dd5454',
    paragraph: '#4c5267',
    heading: '#2c2f3b',
    // primary: '#e14eca',
    primary: '#e67043',
    secondary: '#548bdd',
    // secondary: '#e67043',
    gray: {
      // one: '#f6f9fc',
      one: '#f7f7fb',
      two: '#eaedf1',
      three: '#d9dce0',
      four: '#c5c8cc',
      five: '#aab1b9',
      six: '#7b8392',
      seven: '#4b4f61',
      eight: '#2c2f3b',
      nine: '#212529',
    },
  },
};

export const ThemeContext = React.createContext();

export const CustomThemeProvider = (props) => {
  return (
    <ThemeContext.Provider value={theme}>
      {props.children}
    </ThemeContext.Provider>
  );
};
