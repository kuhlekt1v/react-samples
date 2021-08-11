import React from 'react';
import { Avatar, AppBar, Toolbar, IconButton, Typography, ButtonBase, PopperPlacementType } from '@material-ui/core';

// Styles.
import { useStyles, StyledAccountButton } from './Navbar.style';

// Material icons.
import MenuIcon from '@material-ui/icons/Menu';
import SettingsIcon from '@material-ui/icons/Settings';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';

// Components
import { InputSearch } from '../Input/InputSearch';
import { AccountMenu } from '../AccountMenu/AccountMenu';

export const Navbar = () => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  let [greeting, setGreeting] = React.useState<string>('Welcome');

  const handleSettingsClick = (newPlacement: PopperPlacementType) => (event: React.MouseEvent<HTMLElement>) => {
    // Get current hour.
    const date = new Date();
    const hour = date.getHours();

    // Set AccountMenu greeting message.
    if (hour < 12) {
      greeting = 'Good Morning';
    } else if (hour >= 12 && hour <= 17) {
      greeting = 'Good Afternoon';
    } else if (hour >= 17 && hour <= 24) {
      greeting = 'Good Evening';
    }

    setGreeting(greeting);
    setAnchorEl(anchorEl ? null : event.currentTarget);
    setOpen(!open);
  };

  const handleSettingsClose = () => {
    setAnchorEl(null);
  };

  const handleSelectedItem = () => {
    setAnchorEl(null);
  };

  return (
    <div className={classes.root}>
      <AppBar className={classes.appBar}>
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} aria-label="open drawer">
            <MenuIcon className={classes.largeIcon} />
          </IconButton>
          <Typography variant="h4" className={classes.title} noWrap>
            <span className={classes.titleBold}>MGMT</span>portal
          </Typography>
          <InputSearch placeholder="Search..." />
          <div className={classes.navPadding}></div>
          <div className={classes.actionIcons}>
            <IconButton aria-label="show messages" className={classes.notifications}>
              <NotificationsNoneIcon />
            </IconButton>
            <StyledAccountButton onClick={handleSettingsClick('right-start')}>
              <Avatar alt="user initial" className={classes.userAvatar}>
                A
              </Avatar>
              <div className={classes.settingsContainer}>
                <SettingsIcon />
              </div>
            </StyledAccountButton>
          </div>
        </Toolbar>
      </AppBar>
      <AccountMenu
        open={open}
        greeting={greeting}
        anchorEl={anchorEl}
        handleClose={handleSettingsClose}
        handleSelect={handleSelectedItem}
      />
    </div>
  );
};
