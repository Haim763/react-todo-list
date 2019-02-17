import React from 'react';
import {
  AppBar,
  Typography,
  withStyles
} from '@material-ui/core';

const styles = {
  root: {
    flexGrow: 1,
    paddingBottom: 30,
  },
  grow: {
    flexGrow: 1,
    padding: 17,
    background: '#2196f3'
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};

export default withStyles(styles)((props) => {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Typography variant="h5" color="inherit" className={classes.grow}>
          Todo List
          </Typography>
      </AppBar>
    </div>
  )
});