import React, { FC } from 'react';
import { TextField } from '@material-ui/core';
import { useFormContext } from 'react-hook-form';

interface IReactHookFormTextFieldProps {
  label: string;
  name: string;
}

export const ReactHookFormTextField = ({ label, name }: IReactHookFormTextFieldProps) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return <TextField label={label} variant="outlined" error={!!errors[name]} />;
};
