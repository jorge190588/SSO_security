import React  from 'react';
import {Button} from '@material-ui/core/';
import Icon from '@material-ui/core/Icon';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles(theme => ({
    button: {
      margin: theme.spacing(1),
    },
    icon:{
        marginRight: theme.spacing(1),
    }
  }));

export default function ButtonBack(props) {
    const classes = useStyles();

    return (
        <Button className={classes.button} label={props.tooltip} onClick={props.onClick}  color="primary"  variant="contained"> 
            <Icon className={classes.icon} >{props.icon}</Icon>
            {props.tooltip}
        </Button>
    )
}
 