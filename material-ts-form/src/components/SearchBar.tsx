import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import { InputBase } from '@material-ui/core';
import React from 'react';

type Props = {
	placeholder: string;
};

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		searchInput: {
			opacity: '0.6',
			padding: `0px ${theme.spacing(1)}px`,
			fontSize: '0.8rem',
			'&:hover': {
				backgroundColor: '#f2f2f2',
			},
			'& .MuiSvgIcon-root': {
				marginRight: theme.spacing(1),
			},
		},
	})
);

export const SearchBar = ({ placeholder }: Props) => {
	const classes = useStyles();
	return (
		<InputBase
			className={classes.searchInput}
			placeholder={placeholder}
			startAdornment={<SearchIcon fontSize='small' />}
		/>
	);
};
