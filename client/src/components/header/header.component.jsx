import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import TwitterIcon from '@material-ui/icons/Twitter';

export default () => (
  <AppBar position="static">
    <Toolbar>
      <TwitterIcon style={{ marginRight: 10 }} />
      <Typography variant="h6">Tweet Saver</Typography>
    </Toolbar>
  </AppBar>
);
