import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Drawer, { drawerClasses } from '@mui/material/Drawer';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';
import { usePage } from '@inertiajs/react';
import { route } from 'ziggy-js';
import MenuContent from './MenuContent';
import { Link } from '@inertiajs/react';

interface SideMenuMobileProps {
   open: boolean | undefined;
   toggleDrawer: (newOpen: boolean) => () => void;
}

export default function SideMenuMobile({ open, toggleDrawer }: SideMenuMobileProps) {
   const page = usePage();
   // @ts-ignore
   const user = page?.props?.auth?.user;

   return (
      <Drawer
         anchor="right"
         open={open}
         onClose={toggleDrawer(false)}
         sx={{
            zIndex: (theme) => theme.zIndex.drawer + 1,
            [`& .${drawerClasses.paper}`]: {
               backgroundImage: 'none',
               backgroundColor: 'background.paper',
            },
         }}
      >
         <Stack
            sx={{
               minWidth: '55vw',
               height: '100%',
            }}
         >
            <Stack direction="row" sx={{ p: 2, pb: 0, gap: 1 }}>
               <Stack
                  direction="row"
                  sx={{ gap: 1, alignItems: 'center', flexGrow: 1, p: 1 }}
               >
                  <Typography component="p" variant="h6">
                     {user.name}
                  </Typography>
               </Stack>
            </Stack>
            <Divider />
            <Stack sx={{ flexGrow: 1 }}>
               <MenuContent />
               <Divider />
            </Stack>
            <Stack sx={{ p: 2 }}>
               <Link href={route('logout')} className='block' method='post'>
                  <Button variant="outlined" fullWidth startIcon={<LogoutRoundedIcon />}>
                     Logout
                  </Button>
               </Link>
            </Stack>
         </Stack>
      </Drawer>
   );
}
