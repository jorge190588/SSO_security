import React  from 'react';
import { IconButton, Tooltip, Icon  } from '@material-ui/core';
import {useStyles} from './Style';

export default function ButtonAction(props) {
    const classes = useStyles(props);

    return (
        <Tooltip title={props.tooltip} leaveDelay={150}>
            <IconButton aria-label={props.icon} size="small"
                        onClick={props.onClick} label={props.tooltip}
                        className={classes.buttonColor}>
                <Icon>{props.icon}</Icon>
            </IconButton>
        </Tooltip>
    )
}
 