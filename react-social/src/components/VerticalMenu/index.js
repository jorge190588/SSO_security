import React from 'react';
import Group from 'components/Group';
import ListItemLink from 'components/ListItemLink';
import { Divider } from '@material-ui/core';

export default function ListMenu(props) {
  

  return ( 
    <div>
        {(props.menu!=null) ?
            Object.keys(props.menu).map(key => 
            <Group key={key} group={props.menu[key]}></Group>    
            ) : null
        }
        <Divider />
        <ListItemLink  key='help' to='/help' primary="Ayuda" icon='help' isNested={false}></ListItemLink>
    </div>
    );
  
}