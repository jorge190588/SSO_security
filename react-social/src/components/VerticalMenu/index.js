import React from 'react';
import Group from 'components/Group';

export default function ListMenu(props) {
  
    if (props.menu===null){
        return <div></div>;
    }

  return ( 
    <div>
        {Object.keys(props.menu).map(key => 
            <Group key={key} group={props.menu[key]}></Group>    
        )}
    </div>
    );
  
}