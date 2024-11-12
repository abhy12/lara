import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Stack from '@mui/material/Stack';
import AnalyticsRoundedIcon from '@mui/icons-material/AnalyticsRounded';
import PeopleRoundedIcon from '@mui/icons-material/PeopleRounded';
import AssignmentRoundedIcon from '@mui/icons-material/AssignmentRounded';
import { Link } from '@inertiajs/react';
import { route } from 'ziggy-js';
import type { ReactElement } from 'react';

interface List {
   name: string
   icon: ReactElement<any>
   link: string
}
const mainListItems: List[] = [
   { name: 'Services', icon: <AnalyticsRoundedIcon />, link: 'services.index' },
   { name: 'Posts', icon: <AssignmentRoundedIcon />, link: 'posts.index' },
   { name: 'Chirps', icon: <AssignmentRoundedIcon />, link: 'chirps.index' },
   // { name: 'Tools', icon: <PeopleRoundedIcon /> },
];

export default function MenuContent() {
   return (
      <Stack sx={{ flexGrow: 1, p: 1, justifyContent: 'space-between' }}>
         <List dense>
            {mainListItems.map((item, index) => (
               <ListItem key={index} disablePadding sx={{ display: 'block' }}>
                  <Link href={route(item.link)}>
                     <ListItemButton selected={index === 0}>
                        <ListItemIcon>{item.icon}</ListItemIcon>
                        <ListItemText primary={item.name} />
                     </ListItemButton>
                  </Link>
               </ListItem>
            ))}
         </List>
      </Stack>
   );
}
