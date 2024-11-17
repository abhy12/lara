import { route } from 'ziggy-js';
import { Link } from '@inertiajs/react';
import PopupModal from "@/Components/PopupModal";
import { useState, useCallback } from "react";
import PopupForm from "@/Components/PopupForm";
import { Popper, ClickAwayListener } from '@mui/material';
import { Menu } from '@mui/icons-material';

export default function Header() {
   const [isHelpModalActive, setIsHelpModalActive] = useState(false);
   const handleCloseModal = useCallback(() => {
      setIsHelpModalActive(false);
   }, []);

   const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

   const handleMenuClick = (event: React.MouseEvent<HTMLElement>) => {
      setAnchorEl(anchorEl ? null : event.currentTarget);
   };

   const openMenu = Boolean(anchorEl);
   const menuId = openMenu ? 'simple-popper' : undefined;

   return (
      <>
         <header
            className="text-white bg-secondary px-[5%] py-2 md:py-5 flex flex-wrap justify-between items-center gap-x-5 md:gap-x-12">
            <ClickAwayListener onClickAway={() => setAnchorEl(null)}>
               <button
                  className='lg:hidden'
                  onClick={handleMenuClick}
                  aria-describedby={menuId}
               >
                  <Menu className='text-white' />
               </button>
            </ClickAwayListener>
            <Popper
               id={menuId}
               open={openMenu}
               anchorEl={anchorEl}
               placement='bottom-start'
            >
               <div className='w-full max-w-60 flex flex-col bg-secondary text-white p-4 rounded-2xl text-lg gap-2'>
                  <HeaderLinks />
               </div>
            </Popper>
            <div className='flex flex-wrap items-center gap-4 md:gap-6'>
               <a className='grow max-w-20' href='https://indialeadersforsocialsector.com/' target='_blank'>
                  <img className='w-full' src='/assets/img/logo-1.svg' />
               </a>
               <a className='grow max-w-24' href='https://www.koitafoundation.org/' target='_blank'>
                  <img className='w-full brightness-0 invert' src='/assets/img/logo-2.png' />
               </a>
            </div>
            <nav className="font-semibold md:text-lg hidden lg:flex flex-col md:flex-row gap-x-5 md:gap-x-12 ml-auto">
               <HeaderLinks />
            </nav>
            <button
               className="text-tertiary bg-primary font-semibold px-3 py-1 rounded-lg"
               onClick={() => setIsHelpModalActive(true)}
            >Help</button>
         </header>
         <PopupModal
            isActive={isHelpModalActive}
            onClose={handleCloseModal}
         >
            <PopupForm
               afterSuccess={handleCloseModal}
               footerText="Lorem Ipsum is simply dummy text of the printing and typesetting industry.
               Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
               Lorem Ipsum is simply dummy text of the printing and typesetting."
               submitButtonText='Send'
               showMessageField={true}
            />
         </PopupModal>
      </>
   );
}

function HeaderLinks() {
   return (
      <>
         <Link href={route('home')}>Home</Link>
         <Link href={route('tools.index')}>Tools</Link>
         <Link href={route('services.index')}>Service Provider</Link>
         <Link href={route('faqs')}>FAQs</Link>
         <Link href={route('about')}>About</Link>
      </>
   );
}
