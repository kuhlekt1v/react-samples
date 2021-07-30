import {
	AppBar,
	Badge,
	Grid,
	IconButton,
	InputBase,
	Toolbar,
} from '@material-ui/core';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';
import React from 'react';
import { useStyles } from './Header.style';
import { SearchBar } from '../SearchBar';

export const Header = () => {
	const classes = useStyles();

	return (
		<AppBar position='static' className={classes.wrapper}>
			<Toolbar>
				<Grid container alignItems='center'>
					<Grid item>
						<SearchBar placeholder='Search...' />
					</Grid>
					<Grid item sm></Grid>
					<Grid item>
						<IconButton>
							<Badge badgeContent={4} color='secondary'>
								<NotificationsNoneIcon fontSize='small' />
							</Badge>
						</IconButton>
						<IconButton>
							<Badge badgeContent={3} color='primary'>
								<ChatBubbleOutlineIcon fontSize='small' />
							</Badge>
						</IconButton>
						<IconButton>
							<PowerSettingsNewIcon fontSize='small' />
						</IconButton>
					</Grid>
				</Grid>
			</Toolbar>
		</AppBar>
	);
};
