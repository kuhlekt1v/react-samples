import { Theme, makeStyles, createStyles } from '@material-ui/core';

import blueGrey from '@material-ui/core/colors/blueGrey';
import grey from '@material-ui/core/colors/grey';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
    },
    sectionTop: {
      paddingTop: theme.spacing(3),
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(2),
      paddingBottom: theme.spacing(2),
      '& .MuiTypography-body1': {
        color: blueGrey[900],
        fontWeight: 'bold',
      },
    },
    notificationChip: {
      backgroundColor: theme.palette.secondary.main,
      fontWeight: 800,
      textAlign: 'center',
      lineHeight: '100%',
      height: 25,
      width: 40,
    },
    readLinkContainer: {
      marginLeft: theme.spacing(4),
    },
    readLink: {
      color: theme.palette.info.main,
      fontSize: '.75em',
      '&:hover': {
        color: theme.palette.primary.main,
        cursor: 'pointer',
      },
    },
  }),
);
