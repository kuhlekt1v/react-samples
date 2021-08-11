import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Badge from '@material-ui/core/Badge';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Chip from '@material-ui/core/Chip';
import Divider from '@material-ui/core/Divider';

import { useStyles } from './NotificationMenu.style';

type Props = {
  open: boolean;
  anchorEl: HTMLElement | null;
  handleClose: ((event: {}, reason: 'backdropClick' | 'escapeKeyDown' | 'resize') => void) | undefined;
  handleSelect: React.MouseEventHandler<HTMLLIElement> | undefined;
};

export const NotificationMenu = ({ anchorEl, handleClose, handleSelect }: Props) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Menu
        id="customized-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
        elevation={2}
        getContentAnchorEl={null}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        style={{ marginTop: 10 }}
      >
        <div className={classes.sectionTop}>
          <Grid container spacing={2} alignItems="center" wrap="nowrap">
            {/* Notification label. */}
            <Grid item container xs spacing={2} alignItems="center">
              <Grid item>
                <Typography variant="body1">Notifications</Typography>
              </Grid>
              <Grid item>
                <Chip label="03" className={classes.notificationChip} />
              </Grid>
            </Grid>

            {/* Mark all link. */}
            <Grid item className={classes.readLinkContainer}>
              <Typography variant="body2" className={classes.readLink}>
                Mark all as read
              </Typography>
            </Grid>
          </Grid>
        </div>
      </Menu>
    </div>
  );
};
