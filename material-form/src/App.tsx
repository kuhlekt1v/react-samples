import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Pages
import HomePage from './components/pages/HomePage';
import LoginPage from './components/pages/auth/LoginPage';
import NotFoundPage from './components/pages/NotFoundPage';
import RegisterPage from './components/pages/auth/RegisterPage';

// Pages - account.
import { SettingsPage } from './components/pages/account/SettingsPage';
import { MessagesPage } from './components/pages/account/MessagesPage';
import { NotificationsPage } from './components/pages/account/NotificationsPage';

import { Navbar } from './components/layout/Navbar';
import { getLoggedInUser, UserData } from './UserData';

// Custom Material-UI Theme.
import { createTheme, ThemeProvider } from '@material-ui/core';
const theme = createTheme({
	palette: {
		primary: {
			light: '#59869f',
			main: '#306887',
			dark: '#21485e',
		},
		secondary: {
			light: '#9ad6c5',
			main: '#81ccb7',
			dark: '#5a8e80',
		},
	},
});

function App() {
	const [user, setUser] = React.useState<UserData[]>([]);

	React.useEffect(() => {
		const doGetLoggedInUser = async () => {
			const loggedInUser = await getLoggedInUser();
			setUser(loggedInUser);
		};
		doGetLoggedInUser();
	}, []);

	return (
		<ThemeProvider theme={theme}>
			<BrowserRouter>
				<Navbar data={user} />
				<Routes>
					<Route path='' element={<HomePage />} />
					<Route path='*' element={<NotFoundPage />} />
					<Route path='/auth/login' element={<LoginPage />} />
					<Route path='/auth/register' element={<RegisterPage />} />
					<Route path='/account/messages' element={<MessagesPage />} />
					<Route path='/account/settings' element={<SettingsPage />} />
					<Route
						path='/account/notifications'
						element={<NotificationsPage />}
					/>
				</Routes>
			</BrowserRouter>
		</ThemeProvider>
	);
}

export default App;
