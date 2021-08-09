import React from 'react';
import { Avatar, AppBar, Toolbar, IconButton, Typography, ButtonBase } from '@material-ui/core';

// Styles.
import styled from 'styled-components';
import { useStyles } from './Navbar.style';

// Material icons.
import MenuIcon from '@material-ui/icons/Menu';
import SettingsIcon from '@material-ui/icons/Settings';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';

// Components
import { InputSearch } from '../Input/InputSearch';

const StyledAccountButton = styled(ButtonBase)`
  &.MuiButtonBase-root {
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
    justify-content: space-between;
    cursor: default;
    color: #215977;
    background-color: #eaf2f6;
    border-radius: 8px 16px 16px 8px;
    padding-left: 0.5em;
    padding-right: 0.5em;
    width: 100px;
  }
`;

export const Navbar = () => {
  const classes = useStyles();

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
            <StyledAccountButton>
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
    </div>
  );
};
