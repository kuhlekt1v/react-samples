import { Theme, makeStyles, createStyles } from '@material-ui/core';

import red from '@material-ui/core/colors/red';
import blue from '@material-ui/core/colors/blue';
import teal from '@material-ui/core/colors/teal';
import green from '@material-ui/core/colors/green';
import yellow from '@material-ui/core/colors/yellow';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    message: {
      backgroundColor: blue[200],
    },
    complete: {
      '& .MuiAvatar-root': {
        backgroundColor: green[200],
      },
    },
    attention: {
      '& .MuiAvatar-root': {
        color: theme.palette.text.secondary,
        backgroundColor: yellow[200],
      },
    },
    start: {
      '& .MuiAvatar-root': {
        // color: theme.palette.text.secondary,
        backgroundColor: teal[200],
      },
    },
    stop: {
      '& .MuiAvatar-root': {
        backgroundColor: red[200],
      },
    },
  }),
);
