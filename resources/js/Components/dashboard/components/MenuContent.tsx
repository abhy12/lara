import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import Stack from '@mui/material/Stack';
import { Handyman, HomeRepairService } from '@mui/icons-material';
import { Link } from '@inertiajs/react';
import { route } from 'ziggy-js';
import type { ReactElement } from 'react';

interface List {
   name: string
   icon: ReactElement<any>
   link: string
}
const mainListItems: List[] = [
   { name: 'Services', icon: <HomeRepairService />, link: 'admin.services.index' },
   { name: 'Tools', icon: <Handyman/>, link: 'admin.tools.index' },
];

export default function MenuContent() {
   return (
      <Stack sx={{ flexGrow: 1, p: 1, justifyContent: 'space-between' }}>
         <List className='text-lg !gap-2' dense>
            {mainListItems.map((item, index) => (
               <ListItem key={index} disablePadding sx={{ display: 'block' }}>
                  <Link href={route(item.link)}>
                     <ListItemButton selected={route().current() === item.link}>
                        <ListItemIcon>{item.icon}</ListItemIcon>
                        <span>{item.name}</span>
                     </ListItemButton>
                  </Link>
               </ListItem>
            ))}
         </List>
      </Stack>
   );
}
