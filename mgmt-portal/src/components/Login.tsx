import React from 'react';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { createStyles, makeStyles, Theme, Grid, Paper, Avatar, TextField, Button, Link } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
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

export const Login = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper className={classes.paper} elevation={10}>
        <Grid container justifyContent="center">
          <Grid container className={classes.titleBlock}>
            <Grid container justifyContent="center">
              <Avatar className={classes.avatar}>
                <LockOutlinedIcon />
              </Avatar>
            </Grid>
            <Grid container justifyContent="center">
              <h1 className={classes.title}>Sign In</h1>
            </Grid>
          </Grid>

          <Grid container spacing={4}>
            <Grid item xs={12}>
              <TextField label="Username" variant="outlined" fullWidth={true} />
            </Grid>
            <Grid item xs={12}>
              <TextField label="Password" variant="outlined" fullWidth={true} />
            </Grid>
            <Grid item xs={12}>
              <Button className={classes.button} variant="contained" color="primary" fullWidth={true} size="medium">
                SIGN IN
              </Button>
            </Grid>
            <Grid container xs={12} justifyContent="center">
              <Link className={classes.link}>Forgot username or password?</Link>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
};
