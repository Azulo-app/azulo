import React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';

/* -- Add / Plus Icon -- */
let AddIcon = (props) => (
  <SvgIcon {...props} viewBox="0 0 11.36 11.36">
        <path id="ic_close_24px" d="M13.033,5.809,12.224,5,9.017,8.207,5.809,5,5,5.809,8.207,9.017,5,12.224l.809.809L9.017,9.826l3.207,3.207.809-.809L9.826,9.017Z" transform="translate(5.68 -7.071) rotate(45)"/>
  </SvgIcon>
);
AddIcon.displayName = 'AddIcon';
AddIcon.muiName = 'SvgIcon';

/* -- People Icon -- */
let PeopleIcon = (props) => (
    <SvgIcon {...props} viewBox="0 0 20 20">
        <path id="ic_account_circle_24px" d="M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,3A3,3,0,1,1,9,8,3,3,0,0,1,12,5Zm0,14.2a7.2,7.2,0,0,1-6-3.22c.03-1.99,4-3.08,6-3.08s5.97,1.09,6,3.08A7.2,7.2,0,0,1,12,19.2Z" transform="translate(-2 -2)"/>
    </SvgIcon>
  );
  PeopleIcon.displayName = 'PeopleIcon';
  PeopleIcon.muiName = 'SvgIcon';

/* -- Tick Icon -- */
let TickIcon = (props) => (
    <SvgIcon {...props} viewBox="0 0 24 24">
        <path d="M8.9,19.7l-6.3-6.3l2.2-2.2l4.1,4.1L19.2,4.9l2.2,2.2L8.9,19.7z"/>
    </SvgIcon>
  );
  TickIcon.displayName = 'TickIcon';
  TickIcon.muiName = 'SvgIcon';
  
/* -- Close Icon -- */
let CloseIcon = (props) => (
    <SvgIcon {...props} viewBox="0 0 16.5 16.5">
        <polygon points="16.5,1.7 14.9,0 8.3,6.6 1.7,0 0,1.7 6.6,8.3 0,14.9 1.7,16.5 8.3,9.9 14.9,16.5 16.5,14.9 9.9,8.3 "/>
    </SvgIcon>
  );
  CloseIcon.displayName = 'CloseIcon';
  CloseIcon.muiName = 'SvgIcon';

const CustomIcons = {
    AddIcon,
    PeopleIcon,
    TickIcon,
    CloseIcon
};

export default CustomIcons;