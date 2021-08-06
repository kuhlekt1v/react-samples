import React from 'react';
import { theme } from './App.style';
import { ThemeProvider } from '@material-ui/core';

// Components.
import { LoginPage } from './pages/LoginPage';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <LoginPage />
    </ThemeProvider>
  );
};

export default App;
