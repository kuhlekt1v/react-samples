import React from 'react';
import clsx from 'clsx';
import {
  Link,
  AppBar,
  Avatar,
  Drawer,
  Toolbar,
  Divider,
  ListItem,
  IconButton,
  Typography,
  ListItemText,
  ListItemIcon,
} from '@material-ui/core';

import { icons, DrawerMenuItems } from './DrawerMenuItems';

// Styles.
import { useStyles, StyledAccountButton } from './Navbar.style';

// Material icons.
import MenuIcon from '@material-ui/icons/Menu';
import SettingsIcon from '@material-ui/icons/Settings';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';

// Components
import { InputSearch } from '../Input/InputSearch';
import { AccountMenu } from '../AccountMenu/AccountMenu';
import { NotificationMenu } from '../NotificationMenu/NotificationMenu';

type Props = {
  open: Boolean;
  onOpenChange: React.Dispatch<React.SetStateAction<boolean>>;
};

export const Navbar = ({ open, onOpenChange }: Props) => {
  const classes = useStyles();
  const [menuOpen, setMenuOpen] = React.useState(false);
  const [expandedDrawer, setExpandedDrawer] = React.useState(false);
  const [drawerOpen, setDrawerOpen] = React.useState(false);

  const [visibleMenu, setVisibleMenu] = React.useState<string>('');
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  let [greeting, setGreeting] = React.useState<string>('Welcome');

  const handleMenuClick = (event: React.MouseEvent<HTMLElement>) => {
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

    setVisibleMenu(event.currentTarget.id);
    setAnchorEl(anchorEl ? null : event.currentTarget);
    setGreeting(greeting);
    setMenuOpen(!menuOpen);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
    setMenuOpen(false);
  };

  const handleDrawerOpen = () => {
    setDrawerOpen(true);
    onOpenChange(true);
  };

  const handleDrawerClose = () => {
    setDrawerOpen(false);
    onOpenChange(false);
  };

  const handleExpandedDrawer = () => {
    if (window.innerWidth < 960) {
      setExpandedDrawer(true);
    } else {
      setExpandedDrawer(false);
    }
  };

  window.addEventListener('resize', () => {
    handleCloseMenu();
    handleExpandedDrawer();
  });

  return (
    <div className={classes.root}>
      {/* Navigation bar. */}
      <AppBar className={clsx(classes.appBar, { [classes.appBarShift]: drawerOpen })} position="fixed">
        <Toolbar>
          {/* Title area. */}
          <IconButton
            edge="start"
            className={clsx(classes.menuButton, drawerOpen && classes.hide)}
            aria-label="open drawer"
            onClick={handleDrawerOpen}
          >
            <MenuIcon className={classes.largeIcon} />
          </IconButton>
          <Typography variant="h4" className={classes.title} noWrap>
            <span className={classes.titleBold}>MGMT</span>portal
          </Typography>
          <InputSearch placeholder="Search..." />
          <div className={classes.navPadding}></div>

          {/* Action icons. */}
          <div className={classes.actionIcons}>
            {/* Notifications. */}
            <IconButton
              id="notificationMenu"
              aria-label="show messages"
              className={classes.notifications}
              onClick={handleMenuClick}
            >
              <NotificationsNoneIcon />
            </IconButton>

            {/* User settings. */}
            <StyledAccountButton id="accountMenu" onClick={handleMenuClick}>
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
      {/* Drawer side menu. */}
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={drawerOpen}
        classes={{ paper: classes.drawerPaper }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        {DrawerMenuItems.map((item) => {
          const Icon = icons[item.icon];
          return (
            <Link
              href={item.path}
              style={{ textDecoration: 'none', display: !expandedDrawer && !item.alwaysVisible ? 'none' : '' }}
            >
              <ListItem button key={item.label} className={classes.drawerLink}>
                <ListItemIcon>
                  <Icon />
                </ListItemIcon>
                <ListItemText primary={item.label} />
              </ListItem>
            </Link>
          );
        })}
        <Divider />
      </Drawer>

      {visibleMenu === 'accountMenu' ? (
        <AccountMenu
          open={menuOpen}
          greeting={greeting}
          anchorEl={anchorEl}
          handleClose={handleCloseMenu}
          handleSelect={handleCloseMenu}
        />
      ) : null}

      {visibleMenu === 'notificationMenu' ? (
        <NotificationMenu
          open={menuOpen}
          anchorEl={anchorEl}
          handleClose={handleCloseMenu}
          handleSelect={handleCloseMenu}
        />
      ) : null}
    </div>
  );
};
