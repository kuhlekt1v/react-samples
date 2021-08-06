import { TextField } from '@material-ui/core';
import React from 'react';

// react-hook-form v7 with material ui and typescript
// https://www.youtube.com/watch?v=nt8NTuUbuG4
// Stopped @ 11:02

type Props = {
  label: string;
  error?: boolean;
  helperText?: string;
};

export const OutlinedField = ({ label, error, helperText }: Props) => {
  return <TextField id="outlined-basic" variant="outlined" label={label} error={error} helperText={helperText} />;
};
