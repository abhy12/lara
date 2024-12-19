import { route } from 'ziggy-js';
import { Link } from '@inertiajs/react';
import PopupModal from "@/Components/PopupModal";
import { useState, useCallback, useRef, useEffect } from "react";
import PopupForm from "@/Components/PopupForm";
import { Popper, ClickAwayListener } from '@mui/material';
import { Menu } from '@mui/icons-material';
import Container from '@/Layouts/Container';
import { useForm } from "@inertiajs/react";

export default function Header() {
   const headerRef = useRef<null | HTMLElement>(null);
   const [isHelpModalActive, setIsHelpModalActive] = useState(false);
   const { post } = useForm();
   const handleCloseModal = useCallback(() => {
      setIsHelpModalActive(false);
   }, []);

   const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

   const handleMenuClick = (event: React.MouseEvent<HTMLElement>) => {
      setAnchorEl(anchorEl ? null : event.currentTarget);
   }

   const onFormSubmit = useCallback((data: any) => {
      handleCloseModal();
      post(route('forms.mail', data));
   }, []);

   const openMenu = Boolean(anchorEl);
   const menuId = openMenu ? 'simple-popper' : undefined;

   useEffect(() => {
      if (!headerRef.current) return
      document.documentElement.style.setProperty("--header-height", headerRef.current.getBoundingClientRect().height + "px");
   }, [headerRef]);

   return (
      <>
         <header
            className="text-white bg-secondary"
            ref={headerRef}
         >
            <Container className='flex flex-wrap
            justify-between items-center gap-x-5 md:gap-x-12 py-3.5 md:py-5'>

               <button
                  className='lg:hidden'
                  onClick={handleMenuClick}
                  aria-describedby={menuId}
               >
                  <Menu className='text-white' />
               </button>
               {openMenu &&
                  <ResponsiveMenu
                     clickAwayHandler={() => setAnchorEl(null)}
                     anchorEl={anchorEl}
                     openMenu
                  />
               }
               <div className='flex flex-wrap items-center gap-4 md:gap-6'>
                  <a className='grow max-w-16 md:max-w-20' href='https://indialeadersforsocialsector.com/' target='_blank'>
                     <img className='w-full' src='/assets/img/logo-1.svg' />
                  </a>
                  <a className='grow max-w-16 md:max-w-24' href='https://www.koitafoundation.org/' target='_blank'>
                     <img className='w-full' src='/assets/img/logo-2.png' />
                  </a>
               </div>
               <nav className="font-semibold md:text-lg hidden lg:flex flex-col md:flex-row gap-x-5 md:gap-x-12 ml-auto">
                  <HeaderLinks />
               </nav>
               <button
                  className="text-tertiary bg-primary font-semibold px-3 py-1 rounded-lg"
                  onClick={() => setIsHelpModalActive(true)}
               >Help</button>
            </Container>
         </header>
         <PopupModal
            isActive={isHelpModalActive}
            onClose={handleCloseModal}
         >
            <PopupForm
               footerText="The information provided here is created as a community resource and is not intended as professional advice or a recommendation by ILSS or Koita Foundation. While we strive to ensure the accuracy of the content, we do not take responsibility for any errors or omissions. Users should use their own discretion before making any decisions based on this information. ILSS or Koita Foundation assume no liability for any actions taken based on the information provided."
               submitButtonText='Send'
               showMessageField={true}
               onSubmit={onFormSubmit}
            />
         </PopupModal>
      </>
   );
}

function HeaderLinks() {
   return (
      <>
         <Link href={route('home')}>Home</Link>
         <Link href={route('about')}>About</Link>
         <Link href={route('tools.index')}>Tools</Link>
         <Link href={route('services.index')}>Service Providers</Link>
         <Link href={route('faqs')}>FAQs</Link>
      </>
   );
}

interface ResponsiveMenuProps {
   menuId?: string
   openMenu: boolean
   clickAwayHandler: (e: MouseEvent | TouchEvent) => void
   anchorEl: any
}

function ResponsiveMenu({ menuId, openMenu, clickAwayHandler, anchorEl }: ResponsiveMenuProps) {
   return (
      <ClickAwayListener onClickAway={clickAwayHandler}>
         <Popper
            id={menuId}
            open={openMenu}
            placement='bottom-start'
            anchorEl={anchorEl}
         >
            <div className='w-full max-w-60 flex flex-col bg-secondary text-white p-4 rounded-2xl text-lg gap-2'>
               <HeaderLinks />
            </div>
         </Popper>
      </ClickAwayListener>
   );
}
