import React from 'react';
import { useStyles } from './SideMenu.style';

export const SideMenu = () => {
	const classes = useStyles();
	return <div className={classes.sideMenu}></div>;
};
