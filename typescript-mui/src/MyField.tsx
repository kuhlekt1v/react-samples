import React from 'react';
import { FieldProps } from 'formik';
import { TextField } from '@material-ui/core';
import { TextFieldProps } from '@material-ui/core/TextField/TextField';

export const MyField = ({
	placeholder,
	field,
}: FieldProps & TextFieldProps) => {
	return (
		<TextField
			id='outlined-basic'
			label={placeholder}
			placeholder={placeholder}
			{...field}
			variant='outlined'
		/>
	);
};
