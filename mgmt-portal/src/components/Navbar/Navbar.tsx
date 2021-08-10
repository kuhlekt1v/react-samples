import React from 'react';
import { useHistory } from 'react-router-dom';
import { Avatar, AppBar, Toolbar, IconButton, Typography, ButtonBase, PopperPlacementType } from '@material-ui/core';

// Styles.
import styled from 'styled-components';
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
  const history = useHistory();
  const [open, setOpen] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleSettingsClick = (newPlacement: PopperPlacementType) => (event: React.MouseEvent<HTMLElement>) => {
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
        anchorEl={anchorEl}
        handleClose={handleSettingsClose}
        handleSelect={handleSelectedItem}
      />
    </div>
  );
};
