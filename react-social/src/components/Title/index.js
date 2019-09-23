import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Divider from '@material-ui/core/Divider';
import Icon from '@material-ui/core/Icon';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  h1:{
      color: '#000'
  },
  icon:{
    "padding-top": 5
  }
}));

export default function Title(props) {
  const classes = useStyles();

  return (
      <div>
          
          <h1 className={classes.h1}>
            <Icon className={classes.icon} fontSize="large" >{(props.icon) ? props.icon : "check"}</Icon> {props.title}
            </h1>
          <Divider />
      </div>
  );
}