import { TextField } from '@material-ui/core';
import React from 'react';
import { useFormContext } from 'react-hook-form';

type Props = {
  name: string;
  label: string;
  type?: string;
};

export const InputRequired = ({ name, label, type }: Props) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <TextField
      label={label}
      type={type}
      variant="outlined"
      fullWidth={true}
      error={!!errors[name]}
      helperText={errors[name]?.message ?? ''}
      {...register(name)}
    />
  );
};
