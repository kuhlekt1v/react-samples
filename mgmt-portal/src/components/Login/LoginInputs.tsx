import { TextField } from '@material-ui/core';
import React from 'react';
import { Controller, useFormContext } from 'react-hook-form';

type Props = {
  name: string;
  label: string;
};

export const LoginInputs = ({ name, label }: Props) => {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      defaultValue=""
      render={({ field }) => (
        <TextField
          {...field}
          label={label}
          variant="outlined"
          fullWidth={true}
          error={!!errors.username}
          helperText={errors.username ? errors.username?.message : ''}
        />
      )}
    ></Controller>
  );
};
