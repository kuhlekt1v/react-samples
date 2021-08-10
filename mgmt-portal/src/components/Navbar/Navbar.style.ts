import { createStyles, makeStyles, Theme } from '@material-ui/core';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    appBar: {
      background: '#fff',
      zIndex: 0,
    },
    menuButton: {
      marginRight: theme.spacing(2),
      color: theme.palette.primary.dark,
      '&:hover': {
        backgroundColor: 'inherit',
      },
    },
    largeIcon: {
      fontSize: '2.25rem',
      '&:hover': {
        color: theme.palette.primary.light,
      },
    },
    title: {
      color: theme.palette.primary.dark,
      fontWeight: 500,
      fontFamily: '"Nanum Gothic", sans-serif',
      display: 'none',
      [theme.breakpoints.up('sm')]: {
        display: 'block',
      },
    },
    titleBold: {
      fontWeight: 800,
    },
    navPadding: {
      flexGrow: 1,
    },
    actionIcons: {
      display: 'none',
      color: theme.palette.primary.dark,
      [theme.breakpoints.up('md')]: {
        display: 'flex',
      },
    },
    notifications: {
      borderRadius: '8px',
      height: '36px',
      width: '36px',
      marginRight: theme.spacing(2),
      color: theme.palette.primary.dark,
      backgroundColor: '#eaf2f6',
      '&:hover': {
        color: '#fff',
        backgroundColor: theme.palette.primary.dark,
        transition: 'background-color .5s ease-in',
      },
    },
    settingsContainer: {
      display: 'flex',
      cursor: 'pointer',
      position: 'relative',
      justifyContent: 'space-evenly',
      alignItems: 'center',
      height: '30px',
      borderRadius: '8px 16px 16px 8px',
      width: '55px',
      '&:hover': {
        color: '#fff',
        backgroundColor: theme.palette.primary.dark,
        transition: 'background-color .5s ease-in',
      },
    },
    userAvatar: {
      width: '30px',
      height: '30px',
      borderRadius: '8px',
      backgroundColor: theme.palette.primary.dark,
    },
  }),
);
