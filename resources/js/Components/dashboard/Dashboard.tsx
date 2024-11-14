import type { } from '@mui/x-data-grid/themeAugmentation';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import AppNavbar from './components/AppNavbar';
import SideMenu from './components/SideMenu';
import AppTheme from '../shared-theme/AppTheme';

export default function Dashboard(props: { disableCustomTheme?: boolean, children?: any }) {
   return (
      <AppTheme {...props}>
         <CssBaseline enableColorScheme />
         <Box sx={{ display: 'flex' }}>
            <SideMenu />
            <AppNavbar />
            {/* Main content */}
            <Box
               component="main"
               sx={() => ({
                  flexGrow: 1,
                  overflow: 'auto',
               })}
            >
               <div className='p-4 md:p-6'>
                  {props.children}
               </div>
            </Box>
         </Box>
      </AppTheme>
   );
}
