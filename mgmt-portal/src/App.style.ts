import { createStyles, createTheme, makeStyles, Theme } from '@material-ui/core/styles';

export const theme = createTheme({
  palette: {
    primary: {
      light: '#5999bb',
      main: '#3080ab',
      dark: '#215977',
    },
    secondary: {
      light: '#9ad6c5',
      main: '#81ccb7',
      dark: '#5a8e80',
    },
  },
  overrides: {
    MuiOutlinedInput: {
      root: {
        '&:hover:not($disabled):not($focused):not($error) $notchedOutline': {
          borderColor: '#5999bb',
        },
      },
    },
  },
  props: {
    MuiIconButton: {
      disableRipple: true,
    },
  },
  typography: {
    fontFamily: ['Montserrat', 'sans-serif'].join(','),
  },
});

const drawerWidth = 240;

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    content: {
      padding: theme.spacing(3),
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
    },
    contentShift: {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: drawerWidth,
    },
  }),
);
