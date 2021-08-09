import React from 'react';
import {
  Avatar,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  ButtonBase,
  Popper,
  PopperPlacementType,
  Fade,
} from '@material-ui/core';

// Styles.
import styled, { StyledComponent } from 'styled-components';
import { useStyles } from './Navbar.style';

// Material icons.
import MenuIcon from '@material-ui/icons/Menu';
import SettingsIcon from '@material-ui/icons/Settings';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';

// Components
import { InputSearch } from '../Input/InputSearch';
import { AccountMenu } from '../AccountMenu/AccountMenu';

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
  const [open, setOpen] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [placement, setPlacement] = React.useState<PopperPlacementType>();
  const id = open ? 'transitions-popper' : undefined;

  const handleSettingsClick = (newPlacement: PopperPlacementType) => (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
    setPlacement(newPlacement);
    setOpen(!open);
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
      <AccountMenu id={id} open={open} anchorEl={anchorEl} placement={placement} />
    </div>
  );
};
