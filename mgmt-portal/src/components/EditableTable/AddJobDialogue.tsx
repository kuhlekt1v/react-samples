import React, { useState } from 'react';

import AddIcon from '@material-ui/icons/Add';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import IconButton from '@material-ui/core/IconButton';
import PropTypes from 'prop-types';
import Switch from '@material-ui/core/Switch';
import TextField from '@material-ui/core/TextField';
import Tooltip from '@material-ui/core/Tooltip';

// https://codesandbox.io/s/github/tannerlinsley/react-table/tree/master/examples/material-UI-kitchen-sink?file=/src/components/AddjobDialog.js

type Props = {
  addJobHandler: ({ job }: any) => void;
};

const initialJob = {
  partNumber: '',
  jobNumber: 0,
  description: '',
  operator: '',
  recvDate: '',
  stockDate: '',
  subRows: undefined,
};

export const AddJobDialogue = ({ addJobHandler }: Props) => {
  const [job, setJob] = useState(initialJob);
  const [open, setOpen] = React.useState(false);
  const today: string = Date.now().toLocaleString();

  const [switchState, setSwitchState] = React.useState({
    addMultiple: false,
  });

  const handleSwitchChange = (name: any) => (event: React.ChangeEvent<HTMLInputElement>) => {
    setSwitchState({ ...switchState, [name]: event.target.checked });
  };

  const resetSwitch = () => {
    setSwitchState({ addMultiple: false });
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    resetSwitch();
  };

  const handleAdd = ({ job }: any) => {
    addJobHandler(job);
    setJob(initialJob);
    switchState.addMultiple ? setOpen(true) : setOpen(false);
  };

  // const handleChange =
  //   (name) =>
  //   ({ target: { value } }) => {
  //     setjob({ ...job, [name]: value });
  //   };

  return (
    <div>
      <Tooltip title="Add">
        <IconButton aria-label="add" onClick={handleClickOpen}>
          <AddIcon />
        </IconButton>
      </Tooltip>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Add Job</DialogTitle>
        <DialogContent>
          <DialogContentText>Demo add item to react table.</DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            label="Part Number"
            type="text"
            fullWidth
            value={job.partNumber}
            //onChange={handleChange('firstName')}
          />
          <TextField
            margin="dense"
            label="Job Number"
            type="number"
            fullWidth
            value={job.jobNumber}
            // onChange={handleChange('lastName')}
          />
          <TextField
            margin="dense"
            label="Description"
            type="text"
            fullWidth
            value={job.description}
            //  onChange={handleChange('age')}
          />
          <TextField
            margin="dense"
            label="Operator"
            type="text"
            fullWidth
            value={job.operator}
            //onChange={handleChange('visits')}
          />
          <TextField
            margin="dense"
            label="Date Received"
            type="date"
            defaultValue={today}
            fullWidth
            value={job.recvDate}
            InputLabelProps={{
              shrink: true,
            }}
            // onChange={handleChange('status')}
          />
          <TextField
            margin="dense"
            label="Stock Date"
            type="date"
            fullWidth
            value={job.stockDate}
            InputLabelProps={{
              shrink: true,
            }}
            //    onChange={handleChange('progress')}
          />
        </DialogContent>
        <DialogActions>
          <Tooltip title="Add multiple">
            <Switch
              checked={switchState.addMultiple}
              onChange={handleSwitchChange('addMultiple')}
              value="addMultiple"
              inputProps={{ 'aria-label': 'secondary checkbox' }}
            />
          </Tooltip>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleAdd} color="primary">
            Add
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};
