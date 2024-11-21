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
            <div className='absolute inset-0 bg-homeBg bg-no-repeat bg-cover bg-[right_top] z-[-1] translate-y-8'></div>
            <Container
               className='flex flex-col lg:flex-row lg:justify-between lg:items-center min-h-[95vh]'
            >
               <div className="lg:basis-2/5 pt-10 md:pt-20 pb-10">
                  <div className="relative">
                     <h1 className="text-tertiary font-DMSerifDisplay text-[2.558rem] md:text-[3rem] xl:text-6xl leading-none">
                        Digital <br /><span
                           className="text-primary text-[2.95rem] md:text-[4.25rem] xl:text-8xl">Toolbook</span></h1>
                     <img src="/assets/img/cloud.svg" alt="Image"
                        className="w-20 md:w-auto absolute right-0 bottom-2 md:-right-8 md:bottom-3 -z-10" />
                  </div>
                  <p
                     className="text-tertiary font-light text-[1.728rem] md:text-[2rem]
                     leading-none text-right mt-2 mb-10 flex items-center gap-3"
                  >
                     <span className="flex-shrink-0">for Social impact (<strong className='font-bold'>DiTSI</strong>)</span>
                  </p>
                  <h2 className="text-[#454545] text-xl md:text-[1.65rem] leading-[1.486em] mb-3 md:mb-8">
                     What are you looking for?
                  </h2>
                  <div
                     className="flex justify-between sm:justify-start gap-5 sm:gap-14 md:gap-20 lg:gap-28 2xl:gap-32"
                  >
                     <Link href={route('tools.index')} className="block text-center max-w-36 md:max-w-44 xl:max-w-48">
                        <div className="bg-tertiary aspect-square rounded-full mx-auto p-5 md:p-8 mb-3">
                           <img src="/assets/img/wheel.gif" alt="Image" className="rounded-full" />
                        </div>
                        <h3 className="text-[#454545] text-xl md:text-3xl leading-tight">Tools</h3>
                     </Link>
                     <Link href={route('services.index')} className="block text-center max-w-36 md:max-w-44 xl:max-w-48">
                        <div className="bg-primary  aspect-square rounded-full mx-auto p-5 md:p-8 mb-3">
                           <img src="/assets/img/gear.gif" alt="Image" className="rounded-full" />
                        </div>
                        <h3 className="text-[#454545] text-xl md:text-3xl leading-tight">Service Providers</h3>
                     </Link>
                  </div>
               </div>
               <div className="basis-1/2 hidden lg:flex self-end justify-end items-start pt-10 z-10">
                  <img src="/assets/img/featured.svg" alt="Image" className="w-full translate-y-10" />
               </div>
            </Container>
         </section>
      </Layout>
   );
}
