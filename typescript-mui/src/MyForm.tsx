import { Button } from '@material-ui/core';
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

export const MyForm = ({ onSubmit }: Props) => {
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
					<div>
						<Field
							name='firstName'
							placeholder='first name'
							component={MyField}
						/>
					</div>
					<div>
						<Field
							name='lastName'
							placeholder='last name'
							component={MyField}
						/>
					</div>
					<div>
						<Field name='email' placeholder='email' component={MyField} />
					</div>
					<Button type='submit'>Submit</Button>
					<pre>{JSON.stringify(values, null, 2)}</pre>
				</Form>
			)}
		</Formik>
	);
};
