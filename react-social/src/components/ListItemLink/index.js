import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { Link as RouterLink } from 'react-router-dom';
import {useStyles} from './style';

export default function ListItemLink(props) {
    const { icon, primary, to } = props;
    const classes = useStyles();

    const renderLink = React.useMemo(
      () =>
        React.forwardRef((itemProps, ref) => (
          // with react-router-dom@^5.0.0 use `ref` instead of `innerRef`
          <RouterLink to={to} {...itemProps} innerRef={ref} />
        )),
      [to],
    );
  
    return (
      <div>
        <ListItem button component={renderLink}  className={classes.nested}>
          <ListItemIcon>{icon}</ListItemIcon>
          <ListItemText primary={primary} />
        </ListItem>
      </div>
    );
  }