import React from 'react';
import { useStyles } from './App.style';
import { SideMenu } from '../components/SideMenu/SideMenu';
import { Header } from '../components/Header/Header';

function App() {
	const classes = useStyles();
	return (
		<>
			<SideMenu />
			<div className={classes.appMain}>
				<Header />
			</div>
		</>
	);
}

export default App;
