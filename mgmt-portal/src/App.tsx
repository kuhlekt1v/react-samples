import React from 'react';
import { theme } from './App.style';
import { ThemeProvider } from '@material-ui/core';

// Components.
import { Login } from './components/Login';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Login />
    </ThemeProvider>
  );
};

export default App;
