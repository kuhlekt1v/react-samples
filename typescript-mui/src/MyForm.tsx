import { Button, Grid } from '@material-ui/core';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { Field, Form, Formik } from 'formik';
import React from 'react';
import { MyField } from './MyField';

interface Values {
	firstName: string;
	lastName: string;
	email: string;
}

interface Props {
	onSubmit: (values: Values) => void;
}

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		input: {
			margin: theme.spacing(1),
			height: 38,
		},
	})
);

export const MyForm = ({ onSubmit }: Props) => {
	const classes = useStyles();

	return (
		<Formik
			initialValues={{ firstName: '', lastName: '', email: '' }}
			onSubmit={(values, { resetForm }) => {
				onSubmit(values);
				resetForm();
			}}
		>
			{({ values }) => (
				<Form>
					<Grid container>
						<Grid item xs={12} sm={6} md={3}>
							<Field
								name='firstName'
								placeholder='First name'
								component={MyField}
								className={classes.input}
							/>
						</Grid>
						<Grid item xs={12} sm={6} md={3}>
							<Field
								name='lastName'
								placeholder='Fast name'
								component={MyField}
								className={classes.input}
							/>
						</Grid>
						<Grid item xs={12} sm={6} md={3}>
							<Field
								name='email'
								placeholder='Email address'
								component={MyField}
								className={classes.input}
							/>
						</Grid>
						<Grid item xs={12} sm={6} md={3}>
							<Button
								type='submit'
								variant='contained'
								color='primary'
								className={classes.input}
							>
								Submit
							</Button>
						</Grid>
					</Grid>
				</Form>
			)}
		</Formik>
	);
};
