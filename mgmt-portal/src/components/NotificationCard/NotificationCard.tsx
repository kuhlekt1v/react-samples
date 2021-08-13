import React from 'react';
import { useStyles } from './NotificationCard.style';
import { icons, NotificationCardItems } from './NotificationCardItems';

import { Grid, Divider, Typography, Avatar } from '@material-ui/core';

export const NotificationCard = () => {
  const classes = useStyles();

  return (
    <>
      {NotificationCardItems.map((item) => {
        const Icon = icons[item.icon];

        return (
          <Grid container spacing={2} key={item.id}>
            <Grid item>
              <Avatar className={classes.message}>
                <Icon />
              </Avatar>
            </Grid>

            <Grid item xs={12} sm container>
              {/* Card subject */}
              <Grid item xs container spacing={2} alignItems="center" justifyContent="space-between">
                <Grid item>
                  <Typography variant="body1">{item.subject}</Typography>
                </Grid>
                {/* Date or time posted. */}
                <Grid item>
                  <Typography variant="body2" style={{ fontStyle: 'italic', fontSize: '.75em' }}>
                    {item.created.toLocaleDateString()}
                  </Typography>
                </Grid>
              </Grid>
              <div style={{ height: 0, flexBasis: '100%' }}></div>
              {/* Notification description. */}
              <Grid item>
                <Typography variant="body2" style={{ textAlign: 'left', fontSize: '.8em' }}>
                  {item.description && item.description.length > 50
                    ? `${item.description.substring(0, 50)}...`
                    : item.description}
                </Typography>
              </Grid>
            </Grid>
            {/* Divider */}
            <Grid item xs={12}>
              <Divider />
            </Grid>
          </Grid>
        );
      })}
    </>
  );
};
