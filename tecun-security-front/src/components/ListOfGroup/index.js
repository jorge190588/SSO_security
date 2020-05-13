import React from 'react';
import {ListItem, ListItemText, List } from '@material-ui/core';
import Icon from '@material-ui/core/Icon';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import Collapse from '@material-ui/core/Collapse';
import {useStyles} from './style';
import ListItemLink from 'components/ListItemLink';

export default function ListOfGroup(props) {
    const classes = useStyles();
    const [open, setOpen] = React.useState(true);

    function handleClick() {
        setOpen(!open);
    }

    if (props.listOfGroup===null || props.listOfGroup=== undefined){
        return <div></div>;
    }

    return (
        <List component="nav" aria-labelledby="nested-list-subheader" className={classes.root}>
            <ListItem button onClick={handleClick}>
                <Icon>{props.listOfGroup.icon}</Icon>
                <ListItemText primary={props.listOfGroup.name} />
                {open ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
        
            <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    {props.listOfGroup.form.map((option, index) => (
                        <ListItemLink  key={index} to={option.path} primary={option.name} icon={option.icon}  isNested={true}></ListItemLink>
                    ))}
                </List>
            </Collapse>
        </List>
   );
  
}