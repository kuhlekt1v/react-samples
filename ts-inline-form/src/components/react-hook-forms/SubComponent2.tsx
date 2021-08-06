import { TextField } from '@material-ui/core';
import React from 'react';
import { Controller, useFormContext } from 'react-hook-form';

export const SubComponent2 = () => {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  return (
    <>
      <Controller
        name="firstName"
        control={control}
        defaultValue=""
        render={({ field }) => (
          // TextField imported from material-ui/core
          <TextField
            {...field}
            label="First Name"
            variant="outlined"
            error={!!errors.firstName}
            helperText={errors.firstName ? errors.firstName?.message : ''}
          />
        )}
      ></Controller>

      <Controller
        name="lastName"
        control={control}
        defaultValue=""
        render={({ field }) => (
          // TextField imported from material-ui/core
          <TextField
            {...field}
            label="Last Name"
            variant="outlined"
            error={!!errors.lastName}
            helperText={errors.lastName ? errors.lastName?.message : ''}
          />
        )}
      ></Controller>
    </>
  );
};
