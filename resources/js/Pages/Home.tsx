import { Head, Link } from '@inertiajs/react';
import { route } from 'ziggy-js';
import Layout from '@/Layouts/Layout';
import Container from '@/Layouts/Container';

export default function Home() {
   return (
      <Layout>
         <Head title='Home' />
         <section
            className="grow lg:grow-0 relative mt-auto"
         >
            <div className='absolute inset-0 bg-homeBg bg-no-repeat bg-cover bg-[right_110px] z-[-1] translate-y-2'></div>
            <Container
               className='flex flex-col lg:flex-row lg:justify-between lg:items-center home-hero-section'
            >
               <div className="lg:basis-2/5 pt-8">
                  <div className="relative">
                     <h1 className="text-tertiary font-DMSerifDisplay text-[2.558rem] md:text-[3rem] xl:text-[4rem] leading-none">
                        Digital <br />
                        <span
                           className="text-primary text-[2.95rem] md:text-[4.25rem] xl:text-8xl"
                        >Toolbook</span>
                     </h1>
                     <img
                        className="w-20 md:w-auto absolute right-0 bottom-2 md:-right-8 md:bottom-3 -z-10"
                        src="/assets/img/cloud.svg"
                        alt="Image"
                     />
                  </div>
                  <p
                     className="text-tertiary font-light text-[1.728rem] md:text-[2rem]
                     leading-none text-right mt-2 mb-10 flex items-center gap-3"
                  >
                     <span
                        className="flex-shrink-0 m-4 md:ml-10 lg:ml-16"
                     >for Social Impact (<strong className='font-medium'>DiTSI</strong>)</span>
                  </p>
                  <h2 className="text-[#454545] text-xl md:text-[1.65rem] leading-[1.486em] mb-3 md:mb-6">
                     What are you looking for?
                  </h2>
                  <div
                     className="flex justify-between sm:justify-start gap-5 sm:gap-14 md:gap-20 lg:gap-28 2xl:gap-28"
                  >
                     <Link href={route('tools.index')} className="block text-center">
                        <div className="bg-tertiary aspect-square rounded-full mx-auto p-5 md:p-8 mb-3 max-w-32 md:max-w-44 xl:max-w-48">
                           <img src="/assets/img/wheel.gif" alt="Image" className="rounded-full" />
                        </div>
                        <h3 className="text-[#454545] text-xl md:text-3xl leading-tight">Tools</h3>
                     </Link>
                     <Link href={route('services.index')} className="block text-center ">
                        <div className="bg-primary aspect-square rounded-full mx-auto p-5 md:p-8 mb-3 max-w-32 md:max-w-44 xl:max-w-48">
                           <img src="/assets/img/gear.gif" alt="Image" className="rounded-full" />
                        </div>
                        <h3 className="text-[#454545] text-xl md:text-3xl leading-tight">Service Providers</h3>
                     </Link>
                  </div>
               </div>
               <div className="basis-1/2 hidden lg:flex self-end justify-end items-start pt-6 z-10">
                  <img
                     className="home-hero-image w-full translate-y-7 object-contain object-right"
                     src="/assets/img/featured.svg"
                     alt="Image"
                  />
               </div>
            </Container>
         </section>
      </Layout>
   );
}
