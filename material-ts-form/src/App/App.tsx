import React from 'react';
import { useStyles, theme } from './App.style';
import { SideMenu } from '../components/SideMenu/SideMenu';
import { Header } from '../components/Header/Header';
import { CssBaseline, useTheme } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/core';

// React Material UI Complete Tutorial - Stopped at 51:05
// https://www.youtube.com/watch?v=m-2_gb_3L7Q

function App() {
	const classes = useStyles();

	return (
		<ThemeProvider theme={theme}>
			<SideMenu />
			<div className={classes.appMain}>
				<Header />
			</div>
			<CssBaseline />
		</ThemeProvider>
	);
}

export default App;
