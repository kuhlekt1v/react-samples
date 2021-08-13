import React from 'react';

import { Grid, Typography, Menu, Select, FormControl, InputLabel, Chip, Divider } from '@material-ui/core';
import { NotificationCard } from '../NotificationCard/NotificationCard';

import { useStyles } from './NotificationMenu.style';

type Props = {
  open: boolean;
  anchorEl: HTMLElement | null;
  handleClose: ((event: {}, reason: 'backdropClick' | 'escapeKeyDown' | 'resize') => void) | undefined;
  handleSelect: React.MouseEventHandler<HTMLLIElement> | undefined;
};

export const NotificationMenu = ({ anchorEl, handleClose }: Props) => {
  const classes = useStyles();
  const [filter, setFilter] = React.useState('');

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setFilter(event.target.value as string);
  };

  // Reference https://material-ui.com/components/grid/
  //  Need to separate notification card to own component

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
        className={classes.menuRoot}
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
          <Grid container>
            <Grid item xs={12} className={classes.selectContainer}>
              <FormControl variant="outlined" fullWidth={true}>
                <InputLabel htmlFor="outlined-filter-native-simple">Filter</InputLabel>
                <Select
                  native
                  value={filter}
                  onChange={handleChange}
                  label="filter"
                  inputProps={{ name: 'filter', id: 'outlined-filter-native-simple' }}
                  fullWidth={true}
                >
                  <option aria-label="None" value="" />
                  <option value="all">All Notifications</option>
                  <option value="unread">Unread</option>
                  <option value="read">Read</option>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <Divider className={classes.divider} />
            </Grid>
          </Grid>
          <NotificationCard />
        </div>
      </Menu>
    </div>
  );
};
