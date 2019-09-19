import React from 'react';
import {ListItem, ListItemIcon, ListItemText  } from '@material-ui/core';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import ListOfGroup from 'components/ListOfGroup';

export default function Group(props) {
    
    if (props.group===null || props.group === undefined){
        return <div></div>;
    }

    return (   
      <div>
        {(props.group.length===1) ? (
            <ListItem button key={props.group[0].name} >
                <ListItemIcon>{props.group % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                <ListItemText primary={props.group[0].name} />
            </ListItem>
        ):( <ListOfGroup listOfGroup={props.group}/>  )
        }
      </div>
    );
  
}