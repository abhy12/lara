import { route } from 'ziggy-js';
import { Link } from '@inertiajs/react';
import PopupModal from "@/Components/PopupModal";
import { useState, useCallback } from "react";
import PopupForm from "@/Components/PopupForm";

export default function Header() {
   const [isHelpModalActive, setIsHelpModalActive] = useState(false);
   const handleCloseModal = useCallback(() => {
      setIsHelpModalActive(false);
   }, []);

   return (
      <>
      <header
         className="text-white bg-secondary px-[5%] py-2 md:py-5 flex flex-wrap justify-between items-center gap-x-5 md:gap-x-12">
         <img src="/assets/img/menu.svg" alt="logo" className="cursor-pointer md:hidden" />
         <Link
            href={route('home')}
         >
            <img
               className="w-20 md:w-auto"
               src="/assets/img/logo.svg"
               alt="Image"
            />
         </Link>
         <nav className="font-semibold md:text-lg hidden md:flex flex-col md:flex-row gap-x-5 md:gap-x-12 ml-auto">
            <Link href={route('tools.index')}>Tools</Link>
            <Link href={route('services.index')}>Service Provider</Link>
            <Link href={route('faqs')}>FAQs</Link>
            <Link href={route('about')}>About</Link>
         </nav>
         <button
            className="text-tertiary bg-primary font-semibold px-3 py-1 rounded-lg"
            onClick={() => setIsHelpModalActive( true )}
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
