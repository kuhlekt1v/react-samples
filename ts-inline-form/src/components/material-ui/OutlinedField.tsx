import { TextField } from '@material-ui/core';
import React from 'react';

type Props = {
  label: string;
  error?: boolean;
  helperText?: string;
};

export const OutlinedField = ({ label, error, helperText }: Props) => {
  return <TextField id="outlined-basic" variant="outlined" label={label} error={error} helperText={helperText} />;
};
