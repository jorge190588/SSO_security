import React from 'react';
import pure from 'recompose/pure';
import {SvgIcon} from '@material-ui/core';

let smile = (props) => (
 
  <SvgIcon {...props}

    component={props => {
      return (
        <svg {...props}>
          {React.cloneElement(props.children[0], {
            fill: props.fill
          })}
        </svg>
      );
    }}
  >
   <path d="M256,32C132.281,32,32,132.281,32,256s100.281,224,224,224s224-100.281,224-224S379.719,32,256,32z M256,448
            c-105.875,0-192-86.125-192-192S150.125,64,256,64s192,86.125,192,192S361.875,448,256,448z M160,192c0-26.5,14.313-48,32-48
            s32,21.5,32,48c0,26.531-14.313,48-32,48S160,218.531,160,192z M288,192c0-26.5,14.313-48,32-48s32,21.5,32,48
            c0,26.531-14.313,48-32,48S288,218.531,288,192z M384,288c-16.594,56.875-68.75,96-128,96c-59.266,0-111.406-39.125-128-96"></path>
</SvgIcon>
);
smile = pure(smile);
smile.displayName = 'smile';
smile.muiName = 'SvgIcon';

export default smile;