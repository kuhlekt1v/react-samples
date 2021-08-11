import { createTheme } from '@material-ui/core/styles';

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
