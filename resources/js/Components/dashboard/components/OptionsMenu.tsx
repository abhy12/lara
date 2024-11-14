import * as React from 'react';
import { Link } from '@inertiajs/react';
import { route } from 'ziggy-js';
import { styled } from '@mui/material/styles';
import Divider, { dividerClasses } from '@mui/material/Divider';
import Menu from '@mui/material/Menu';
import MuiMenuItem from '@mui/material/MenuItem';
import { paperClasses } from '@mui/material/Paper';
import { listClasses } from '@mui/material/List';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon, { listItemIconClasses } from '@mui/material/ListItemIcon';
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';
import MoreVertRoundedIcon from '@mui/icons-material/MoreVertRounded';
import MenuButton from './MenuButton';

const MenuItem = styled(MuiMenuItem)({
   margin: '2px 0',
});

export default function OptionsMenu() {
   const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
   const open = Boolean(anchorEl);
   const handleClick = (event: React.MouseEvent<HTMLElement>) => {
      setAnchorEl(event.currentTarget);
   };
   const handleClose = () => {
      setAnchorEl(null);
   };
   return (
      <React.Fragment>
         <MenuButton
            aria-label="Open menu"
            onClick={handleClick}
            sx={{ borderColor: 'transparent' }}
         >
            <MoreVertRoundedIcon />
         </MenuButton>
         <Menu
            anchorEl={anchorEl}
            id="menu"
            open={open}
            onClose={handleClose}
            onClick={handleClose}
            transformOrigin={{ horizontal: 'right', vertical: 'top' }}
            anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
            sx={{
               [`& .${listClasses.root}`]: {
                  padding: '4px',
               },
               [`& .${paperClasses.root}`]: {
                  padding: 0,
               },
               [`& .${dividerClasses.root}`]: {
                  margin: '4px -4px',
               },
            }}
         >
            <MenuItem onClick={handleClose}><Link className='inline-block w-full' href={route('profile.edit')}>Profile</Link></MenuItem>
            <Divider />
            <Divider />
            <MenuItem
               onClick={handleClose}
               sx={{
                  [`& .${listItemIconClasses.root}`]: {
                     ml: 'auto',
                     minWidth: 0,
                  },
               }}
            >
               <ListItemText><Link className='inline-block mr-1' href={route('logout')} method='post' as='button'>Logout</Link></ListItemText>
               <ListItemIcon>
                  <LogoutRoundedIcon fontSize="small" />
               </ListItemIcon>
            </MenuItem>
         </Menu>
      </React.Fragment>
   );
}
