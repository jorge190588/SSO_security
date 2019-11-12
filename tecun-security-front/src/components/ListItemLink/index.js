import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { Link as RouterLink } from 'react-router-dom';
import Icon from '@material-ui/core/Icon';
import {useStyles} from './style';

export default function ListItemLink(props) {
    const { icon, primary, to, isNested } = props;
    const classes = useStyles();

    const renderLink = React.useMemo(
      () =>
        React.forwardRef((itemProps, ref) => (
          // with react-router-dom@^5.0.0 use `ref` instead of `innerRef`
          <RouterLink to={to} {...itemProps} innerRef={ref} />
        )),
      [to],
    );
  
    if (isNested){
      return (
        <div>
          <ListItem button component={renderLink}  className={classes.nested}>
            <Icon>{icon}</Icon>
            <ListItemText primary={primary} />
          </ListItem>
        </div>
      );
    }

    return (
      <div>
        <ListItem button component={renderLink}>
          <Icon>{icon}</Icon>
          <ListItemText primary={primary} />
        </ListItem>
      </div>
    );
  }