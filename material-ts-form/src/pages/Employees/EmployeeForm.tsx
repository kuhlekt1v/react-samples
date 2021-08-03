import React, { useState, useEffect } from 'react';
import { Grid, TextField } from '@material-ui/core';

import { useStyles } from './Employee.style';

const initialValues = {
	id: 0,
	fullName: '',
	email: '',
	mobile: '',
	city: '',
	gender: 'female',
	departmentId: 0,
	hireDate: new Date(),
	isPermanent: false,
};

export const EmployeeForm = () => {
	const classes = useStyles();
	const [values, setValues] = useState(initialValues);

	return (
		<form className={classes.root}>
			<Grid container>
				<Grid item xs={6}>
					<TextField
						variant='outlined'
						label='Full Name'
						value={values.fullName}
					/>
				</Grid>
				<Grid item xs={6}>
					<TextField
						variant='outlined'
						label='Email Address'
						value={values.email}
					/>
				</Grid>
			</Grid>
		</form>
	);
};
