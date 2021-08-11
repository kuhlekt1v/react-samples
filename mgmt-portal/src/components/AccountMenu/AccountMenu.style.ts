import { Theme, makeStyles, withStyles, createStyles, MenuItem } from '@material-ui/core';

import blueGrey from '@material-ui/core/colors/blueGrey';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    menuContainer: {
      '& .MuiTypography-h6': {
        fontFamily: "'Montserrat', sans-serif",
        color: blueGrey[900],
      },
      '& .MuiTypography-subtitle2': {
        fontFamily: "'Montserrat', sans-serif",
        color: blueGrey[400],
      },
      '& .MuiList-padding': {
        padding: 0,
      },
    },
    sectionTop: {
      paddingTop: theme.spacing(3),
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(2),
      paddingBottom: theme.spacing(2),
    },
    sectionBottom: {
      padding: theme.spacing(2),
      '& .MuiSvgIcon-root': {
        fill: blueGrey[600],
      },
    },
    linkText: {
      color: blueGrey[600],
    },
  }),
);

export const StyledMenuItem = withStyles((theme: Theme) => ({
  root: {
    '& .MuiTypography-body1': {
      fontFamily: "'Montserrat', sans-serif",
    },
    '&:focus': {
      backgroundColor: theme.palette.primary.main,
      '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
        color: theme.palette.common.white,
      },
    },
  },
}))(MenuItem);
