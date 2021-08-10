import React from 'react';
import { theme } from './App.style';
import { ThemeProvider } from '@material-ui/core';

// Pages.
import { HomePage } from './pages/Home/HomePage';
import { LoginPage } from './pages/Login/LoginPage';
import { AccountPage } from './pages/Account/AccountPage';

// Components.
import { Navbar } from './components/Navbar/Navbar';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Switch>
          <Route path="/" component={LoginPage} exact />
          <>
            <br />
            <br />
            <Navbar />
            <Route path="/home" component={HomePage} exact />
            <Route path="/account-settings" component={AccountPage} exact />
          </>
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
