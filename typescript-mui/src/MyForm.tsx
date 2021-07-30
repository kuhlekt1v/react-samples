import * as React from 'react';
import {Form, Formik} from 'formik';
import { TextField } from '@material-ui/core';

interface Values {
  firstName: string;
  lastName: string;
  email: string;
}

interface Props {
  onSubmit: (values: Values) => void;
}

export const MyForm = ({onSubmit}: Props) => {
  return (
    <Formik initialValues={{firstName: '', lastName: '', email: ''}} onSubmit={values => {
      onSubmit(values);
    }}
    >
      {({values, handleChange, handleBlur}) => {
        <Form>
          <TextField 
            name="firstName" 
            value={values.firstName} 
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <pre>
            {JSON.stringify(values, null, 2)}
          </pre>
        </Form>
      }}
    </Formik>
  );
}