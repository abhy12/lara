import { route } from 'ziggy-js';
import { Link } from '@inertiajs/react';

export default function Header() {
   return (
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
            <Link href="#">FAQs</Link>
         </nav>
         <Link href="#" className="text-tertiary bg-primary font-semibold px-3 py-1 rounded-lg">Help</Link>
      </header>
   );
}
