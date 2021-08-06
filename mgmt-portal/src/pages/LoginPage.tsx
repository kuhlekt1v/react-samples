import { yupResolver } from '@hookform/resolvers/yup';
import { Avatar, createStyles, Grid, makeStyles, Paper, Theme, Button, Link, TextField } from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import React from 'react';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import * as yup from 'yup';
import { LoginInputs } from '../components/Login/LoginInputs';

interface IFormInputs {
  username: string;
  password: string;
}

const schema = yup.object().shape({
  username: yup.string().required(),
  password: yup.string().required(),
});

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

export const LoginPage = () => {
  const classes = useStyles();

  const methods = useForm<IFormInputs>({
    resolver: yupResolver(schema),
  });

  const formSubmitHandler: SubmitHandler<IFormInputs> = ({ username, password }: IFormInputs) => {
    console.log(`Username: ${username}, Password: ${password}`);

    // Clear fields.
    username = '';
    password = '';
  };

  return (
    <FormProvider {...methods}>
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
            <form onSubmit={methods.handleSubmit(formSubmitHandler)}>
              <Grid container spacing={4}>
                <Grid item xs={12}>
                  {/* <TextField label="Username" variant="outlined" fullWidth={true} /> */}
                  <LoginInputs name="username" label="Username" />
                </Grid>
                <Grid item xs={12}>
                  <LoginInputs name="password" label="Password" />
                </Grid>
                <Grid item xs={12}>
                  <Button
                    type="submit"
                    className={classes.button}
                    variant="contained"
                    color="primary"
                    fullWidth={true}
                    size="medium"
                  >
                    SIGN IN
                  </Button>
                </Grid>
                <Grid container justifyContent="center">
                  <Link className={classes.link}>Forgot username or password?</Link>
                </Grid>
              </Grid>
            </form>
          </Grid>
        </Paper>
      </div>
    </FormProvider>
  );
};
