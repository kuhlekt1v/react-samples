import React from 'react';
import { useStyles, StyledMenuItem } from './AccountMenu.style';
import { icons, AccountMenuItems } from './AccountMenuItems';
import { Menu, MenuList, ListItemText, ListItemIcon, Typography, Divider, Link, Popper } from '@material-ui/core';

// https://berrydashboard.io/user/account-profile/profile1 for reference.

type Props = {
  open: boolean;
  greeting: string;
  anchorEl: HTMLElement | null;
  handleClose: ((event: {}, reason: 'backdropClick' | 'escapeKeyDown' | 'resize') => void) | undefined;
  handleSelect: React.MouseEventHandler<HTMLLIElement> | undefined;
};

export const AccountMenu = ({ anchorEl, greeting, handleClose, handleSelect }: Props) => {
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
        vertical: 'bottom',
        horizontal: 'right',
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      style={{ marginTop: 10 }}
    >
      <div className={classes.menuContainer}>
        <div className={classes.sectionTop}>
          <Typography variant="h6" noWrap>
            <span style={{ fontWeight: 800 }}>{greeting},</span> <span style={{ fontSize: '1rem' }}>Username</span>
          </Typography>
          <Typography variant="subtitle2">Administrator</Typography>
        </div>
        <Divider variant="middle" />
        <div className={classes.sectionBottom}>
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
        </div>
      </div>
    </Menu>
  );
};
