import * as React from 'react';
import { styled } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';

// Components.
//import { InputField } from '../Inputs/InputField';

const Item = styled(Paper)(({ theme }) => ({
	...theme.typography.body2,
	padding: theme.spacing(1),
	textAlign: 'center',
	color: theme.palette.text.secondary,
}));

// https://next.material-ui.com/components/text-fields/

export const Form = () => {
	return (
		<Grid container spacing={1}>
			<Grid item xs={12} md={6} lg={2}>
				<TextField id='outline-basic' label='Part #' variant='outlined' />
			</Grid>
			<Grid item xs={12} md={6} lg={2}>
				<TextField
					label='Job #'
					id='outlined-start-adornment'
					InputProps={{
						startAdornment: <InputAdornment position='start'>M</InputAdornment>,
					}}
				/>
			</Grid>
			<Grid item xs={12} md={6} lg={2}>
				// Operation dropdown
			</Grid>
			<Grid item xs={12} md={6} lg={2}>
				// Operator dropdown
			</Grid>
			<Grid item xs={12} md={6} lg={2}>
				// Date picker
			</Grid>
			<Grid item xs={12} md={6} lg={2}>
				// Job QTY
			</Grid>
			<Grid item xs={12} md={6} lg={2}>
				// QTY Ran
			</Grid>
			<Grid item xs={12} md={6} lg={2}>
				// CALC QTY LEFT
			</Grid>
			<Grid item xs={12} md={6} lg={2}>
				// HRS
			</Grid>
			<Grid item xs={12} md={6} lg={2}>
				// CALC PC/HR
			</Grid>
		</Grid>
	);
};
