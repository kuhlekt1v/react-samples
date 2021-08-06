import { TextField } from '@material-ui/core';
import React from 'react';
import { useFormContext, Controller } from 'react-hook-form';

export const SubComponent1 = () => {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  return (
    <>
      <Controller
        name="userName"
        control={control}
        defaultValue=""
        render={({ field }) => (
          // TextField imported from material-ui/core
          <TextField
            {...field}
            label="Username"
            variant="outlined"
            error={!!errors.userName}
            helperText={errors.userName ? errors.userName?.message : ''}
          />
        )}
      ></Controller>

      <Controller
        name="password"
        control={control}
        defaultValue=""
        render={({ field }) => (
          // TextField imported from material-ui/core
          <TextField
            {...field}
            label="Password"
            variant="outlined"
            error={!!errors.password}
            helperText={errors.password ? errors.password?.message : ''}
          />
        )}
      ></Controller>
    </>
  );
};
