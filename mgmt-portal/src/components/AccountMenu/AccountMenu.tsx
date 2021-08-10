import React from 'react';
import {
  makeStyles,
  createStyles,
  Avatar,
  withStyles,
  Theme,
  Menu,
  MenuItem,
  MenuList,
  ListItemText,
  ListItemIcon,
  Typography,
  Link,
} from '@material-ui/core';

import { icons, AccountMenuItems } from './AccountMenuItems';

// https://berrydashboard.io/user/account-profile/profile1 for reference.

type Props = {
  open: boolean;
  anchorEl: HTMLElement | null;
  handleClose: ((event: {}, reason: 'backdropClick' | 'escapeKeyDown') => void) | undefined;
  handleSelect: React.MouseEventHandler<HTMLLIElement> | undefined;
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      '& .MuiMenu-list': {
        padding: theme.spacing(4),
      },
    },

    linkText: {
      color: theme.palette.text.secondary,
    },
  }),
);

const StyledMenuItem = withStyles((theme: Theme) => ({
  root: {
    '& .MuiTypography-body1': {
      fontFamily: "'Montserrat', sans-serif",
    },

    '&:focus': {
      backgroundColor: theme.palette.primary.main,
      '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
        color: theme.palette.common.white,
      },
    },
  },
}))(MenuItem);

export const AccountMenu = ({ anchorEl, handleClose, handleSelect }: Props) => {
  const classes = useStyles();
  return (
    <Menu
      id="customized-menu"
      anchorEl={anchorEl}
      keepMounted
      open={Boolean(anchorEl)}
      onClose={handleClose}
      elevation={2}
      getContentAnchorEl={null}
      anchorOrigin={{
        vertical: 'top',
        horizontal: -15,
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
    >
      <Typography variant="h6" noWrap>
        Good Morning, <span style={{ fontSize: '1rem' }}>Username</span>
      </Typography>
      <hr />
      <MenuList>
        {AccountMenuItems.map((item) => {
          const Icon = icons[item.icon];

          return (
            <Link
              key={item.id}
              href={item.path}
              style={{ textDecoration: 'none' }}
              color="inherit"
              className={classes.linkText}
            >
              <StyledMenuItem onClick={handleSelect}>
                <ListItemIcon>
                  <Icon />
                </ListItemIcon>
                <ListItemText primary={item.label} />
              </StyledMenuItem>
            </Link>
          );
        })}
      </MenuList>
    </Menu>
  );
};
