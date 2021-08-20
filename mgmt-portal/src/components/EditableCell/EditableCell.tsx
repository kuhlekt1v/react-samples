import React from 'react';
import TextField from '@material-ui/core/TextField';

import { Theme, makeStyles, createStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      '& .MuiTableCell-root': {
        fontSize: '1rem',
        padding: 0,
        margin: 0,
        border: 0,
      },
    },
  }),
);

export const EditableCell = ({ value: initialValue, row: { index }, column: { id } }: any) => {
  const classes = useStyles();
  const [value, setValue] = React.useState(initialValue);

  const onChange = (e: any) => {
    setValue(e.target.value);
  };

  const onBlur = () => {
    console.log(value);
    // updateMyData(index, id, value); // This is where we will pass data to backend
  };

  // Sync initial value with state if changed externally.
  React.useEffect(() => {
    setValue(initialValue);
  }, [initialValue]);

  return <TextField value={value} onChange={onChange} onBlur={onBlur} className={classes.root} />;
};
