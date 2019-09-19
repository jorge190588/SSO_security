import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {ListItem, ListItemIcon, ListItemText, List //, ListSubheader
        } from '@material-ui/core';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import Collapse from '@material-ui/core/Collapse';

const useStyles = makeStyles(theme => ({
    root: {
      width: '100%',
      maxWidth: 360,
      backgroundColor: theme.palette.background.paper,
    },
    nested: {
      paddingLeft: theme.spacing(4),
    },
  }));

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
       
      <List
      component="nav"
      aria-labelledby="nested-list-subheader"
      /*subheader={
        <ListSubheader component="div" id="nested-list-subheader">
          {props.listOfGroup[0].name}
        </ListSubheader>
      }*/
      className={classes.root}>
      
     
      
      <ListItem button onClick={handleClick}>
        <ListItemIcon>
          <InboxIcon />
        </ListItemIcon>
        <ListItemText primary={props.listOfGroup[0].name} />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
            {props.listOfGroup.map((option, index) => (
                (index>0) ? (
                    <ListItem button key={option.name}  to={option.url} className={classes.nested} >
                        <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <InboxIcon />}</ListItemIcon>
                        <ListItemText primary={option.name} />
                    </ListItem>
                ) :null 
                
            ))}
        </List>
      </Collapse>

    </List>
   );
  
}