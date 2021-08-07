import { Theme, makeStyles, createStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(4),
      position: 'absolute',
      margin: 'auto',
      width: 400,
      top: '50%',
      left: '50%',
      transform: 'translateY(-50%) translateX(-50%)',
    },
    titleBlock: {
      marginBottom: theme.spacing(1),
    },
    title: {
      fontFamily: '"Nanum Gothic", sans-serif',
    },
    avatar: {
      height: theme.spacing(6),
      width: theme.spacing(6),
      backgroundColor: theme.palette.primary.main,
    },
    button: {
      padding: '16px 14px',
    },
    link: {
      fontStyle: 'italic',
      marginTop: theme.spacing(2),
      marginBottom: theme.spacing(2),
      color: theme.palette.primary.light,
      '&:hover': {
        cursor: 'pointer',
        textDecoration: 'none',
        textAlign: 'center',
        color: theme.palette.primary.dark,
      },
    },
  }),
);
