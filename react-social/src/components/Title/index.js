import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: 'left',
    color: theme.palette.text.secondary,
  },
  h1:{
      color: '#000'
  }
}));

export default function Title(props) {
  const classes = useStyles();

  return (
      <div>
          <Paper className={classes.paper}>
            <h1 className={classes.h1}>{props.title}</h1>
          </Paper>
      </div>
  );
}