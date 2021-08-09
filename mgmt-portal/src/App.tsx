import React from 'react';
import { theme } from './App.style';
import { ThemeProvider } from '@material-ui/core';

// Components.
import { LoginPage } from './pages/Login/LoginPage';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { HomePage } from './pages/Home/HomePage';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Switch>
          <Route path="/" component={HomePage} exact />
          <Route path="/login" component={LoginPage} exact />
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
