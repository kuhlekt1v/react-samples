import React from 'react';
import { Avatar, Button, Grid, Link, Paper } from '@material-ui/core';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

// Components.
import { InputRequired } from '../../components/Input/InputRequired';
import { useStyles } from './LoginPage.style';

// Icons.
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';

interface IFormProps {
  username: string;
  password: string;
}

const schema = yup.object().shape({
  username: yup.string().required('Username is required.'),
  password: yup.string().required('Password is required.'),
});

export const LoginPage = () => {
  const classes = useStyles();

  const methods = useForm<IFormProps>({
    resolver: yupResolver(schema),
  });

  const formSubmitHandler: SubmitHandler<IFormProps> = ({ username, password }: IFormProps) => {
    console.log(`Username: ${username}, Password: ${password}`);
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
                  <InputRequired label="Username" name="username" />
                </Grid>
                <Grid item xs={12}>
                  <InputRequired label="Password" name="password" type="password" />
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
