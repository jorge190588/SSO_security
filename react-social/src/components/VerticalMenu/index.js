import React from 'react';
import Group from 'components/Group';
import ListItemLink from 'components/ListItemLink';
import { Divider } from '@material-ui/core';

export default function ListMenu(props) {
  
    if (props.menu===null){
        return <div></div>;
    }

  return ( 
    <div>

        {Object.keys(props.menu).map(key => 
            <Group key={key} group={props.menu[key]}></Group>    
        )}
        <Divider />
        <ListItemLink  key='help' to='/help' primary="Ayuda" icon='help' isNested={false}></ListItemLink>
    </div>
    );
  
}