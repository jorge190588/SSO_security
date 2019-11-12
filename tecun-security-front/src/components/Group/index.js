import React from 'react';
import {ListItem, ListItemText  } from '@material-ui/core';
import Icon from '@material-ui/core/Icon';
import ListOfGroup from 'components/ListOfGroup';

export default function Group(props) {
    
    if (props.group===null || props.group === undefined){
        return <div></div>;
    }

    return (   
      <div>
        {(props.group.length===1) ? (
            <ListItem button key={props.group[0].name} >
                <Icon>{props.group[0].icon}</Icon>
                <ListItemText primary={props.group[0].name} />
            </ListItem>
        ):( <ListOfGroup listOfGroup={props.group}/>  )
        }
      </div>
    );
  
}