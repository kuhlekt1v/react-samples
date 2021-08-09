import React from 'react';
import Popper, { PopperPlacementType } from '@material-ui/core/Popper';
import Typography from '@material-ui/core/Typography';
import Fade from '@material-ui/core/Fade';
import Paper from '@material-ui/core/Paper';

// https://berrydashboard.io/user/account-profile/profile1 for reference.

type Props = {
  id: string | undefined;
  open: boolean;
  anchorEl: HTMLElement | null;
  placement: PopperPlacementType | undefined;
};

export const AccountMenu = ({ id, open, anchorEl, placement }: Props) => {
  return (
    <Popper id={id} open={open} placement={placement} anchorEl={anchorEl} transition>
      {({ TransitionProps }) => (
        <Fade {...TransitionProps} timeout={350}>
          <h1>The content of the Popper.</h1>
        </Fade>
      )}
    </Popper>
  );
};
