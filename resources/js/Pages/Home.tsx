import { Head } from '@inertiajs/react';
import Layout from '@/Layouts/Layout';
import Container from '@/Layouts/Container';

export default function Welcome() {
   return (
      <Layout>
         <Head title='Home' />
         <section
            className="grow lg:grow-0  relative mt-auto min-h-[85vh]"
         >
            <div className='absolute inset-0 bg-homeBg bg-no-repeat bg-cover bg-[right_top] z-[-1] translate-y-8'></div>
            <Container
               className='flex flex-col lg:flex-row justify-center lg:justify-between
               items-center'
            >
               <div className="md:basis-2/5 pt-10 md:pt-20 pb-10">
                  <div className="relative">
                     <h1 className="text-tertiary font-DMSerifDisplay text-[2.558rem] md:text-[3rem] leading-none">Digital <br /><span
                        className="text-primary text-[2.95rem] md:text-[4.25rem]">Transformation</span></h1>
                     <img src="/assets/img/cloud.svg" alt="Image"
                        className="w-20 md:w-auto absolute right-0 bottom-2 md:-right-8 md:bottom-3 -z-10" />
                  </div>
                  <p className="text-tertiary font-light text-[1.728rem] md:text-[2rem] leading-none text-right mt-2 mb-10">
                     <span className="border-current border-b">for non profits</span>
                  </p>
                  <h2 className="text-[#454545] text-xl md:text-[1.65rem] leading-[1.486em] mb-3 md:mb-8">What are you looking for?
                  </h2>
                  <div className="flex justify-between gap-5">
                     <div className="text-center max-w-36 md:max-w-none">
                        <div className="bg-tertiary max-w-36 md:max-w-44 aspect-square rounded-full mx-auto p-5 md:p-8 mb-3">
                           <img src="/assets/img/wheel.gif" alt="Image" className="rounded-full" />
                        </div>
                        <h3 className="text-[#454545] text-xl md:text-3xl leading-tight">Tools</h3>
                     </div>
                     <div className="text-center max-w-36 md:max-w-none">
                        <div className="bg-primary max-w-36 md:max-w-44 aspect-square rounded-full mx-auto p-5 md:p-8 mb-3">
                           <img src="/assets/img/gear.gif" alt="Image" className="rounded-full" />
                        </div>
                        <h3 className="text-[#454545] text-xl md:text-3xl leading-tight">Service Providers</h3>
                     </div>
                  </div>
               </div>
               <div className="basis-1/2 hidden lg:flex justify-end items-start pt-10 -mb-4 md:-mb-9">
                  <img src="/assets/img/featured.svg" alt="Image" className="max-w-[33rem]" />
               </div>
            </Container>
         </section>
      </Layout>
   );
}
