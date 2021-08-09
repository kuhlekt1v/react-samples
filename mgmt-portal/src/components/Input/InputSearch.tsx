import React from 'react';
import blueGrey from '@material-ui/core/colors/blueGrey';
import { alpha, createStyles, InputBase, makeStyles, Theme } from '@material-ui/core';

// Material icons.
import SearchIcon from '@material-ui/icons/Search';

type Props = {
  placeholder: string;
};

const bgLight = blueGrey[100];
const bgDark = blueGrey[600];

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    search: {
      position: 'relative',
      border: `1px solid ${bgLight}`,
      borderRadius: '8px',

      '&:hover': {
        backgroundColor: alpha(theme.palette.primary.dark, 0.05),
      },
      marginRight: theme.spacing(2),
      marginLeft: 0,
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(4),
        width: 'auto',
      },
    },
    searchIcon: {
      padding: theme.spacing(0, 2),
      height: '100%',
      position: 'absolute',
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: `${bgDark}`,
    },
    inputRoot: {
      color: `${bgDark}`,
    },
    inputInput: {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        width: '12ch',
        '&:focus': {
          width: '20ch',
        },
      },
    },
  }),
);

export const InputSearch = ({ placeholder }: Props) => {
  const classes = useStyles();

  return (
    <div className={classes.search}>
      <div className={classes.searchIcon}>
        <SearchIcon />
      </div>
      {/* InputSearch */}
      <InputBase
        placeholder={placeholder}
        classes={{
          root: classes.inputRoot,
          input: classes.inputInput,
        }}
        inputProps={{ 'aria-label': 'search' }}
      />
    </div>
  );
};
