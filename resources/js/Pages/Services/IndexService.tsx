import { Head, Link } from '@inertiajs/react';
import type { ServiceProps } from '@/util/props';
import { route } from 'ziggy-js';
import Layout from '@/Layouts/Layout';
import { useState } from 'react';
import Container from '@/Layouts/Container';

interface Props {
   services?: ServiceProps[]
}

export default function Index({ services }: Props) {
   const [sortBy, setSortBy] = useState(false);

   if (!services) return <></>

   const filterServices = sortBy ? [...services].reverse() : services;

   return (
      <Layout>
         <Head title='Services' />
         <section className="bg-primary pt-10 md:pt-20 pb-12 md:pb-7 lg:pt-16 lg:pb-6">
            <Container>
               <nav className="text-[#909090] text-xl font-semibold">
                  <Link href={route('home')}>Home</Link>
                  &nbsp;/&nbsp;
                  <Link
                     className="text-secondary "
                     href={route('services.index')}
                  >Service Providers</Link>
               </nav>
               <div className="flex justify-between items-center mt-12 md:mt-6">
                  <h1 className="text-[#363636] font-DMSerifDisplay text-5xl">Service Providers</h1>
                  <img className="w-full max-w-28 flex-shrink" src="/assets/img/gear.gif" alt="Image" />
               </div>
            </Container>
         </section>

         <section className="py-10 md:pt-14 md:pb-28">
            <Container className='flex flex-col lg:flex-row gap-16 relative'>

               <div className="basis-1/4">
                  <div className="bg-white lg:max-w-80 p-5 shadow rounded-[15px]">
                     <select
                        name="sortby"
                        className="text-secondary bg-white text-lg font-medium w-full border-b
                     border-tertiary appearance-none bg-dropdown bg-no-repeat bg-right"
                        onChange={e => {
                           const value = e.currentTarget.value;
                           if (value == '1') {
                              setSortBy(true);
                           } else {
                              setSortBy(false);
                           }
                        }}
                     >
                        <option value=''>Sort by</option>
                        <option value="0">A to Z</option>
                        <option value="1">Z to A</option>
                     </select>
                  </div>
               </div>
               <div className="basis-3/4 pb-10 md:pb-0">
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-8 gap-y-14 lg:gap-x-40 lg:gap-y-32 text-center">
                     {Array.isArray(filterServices) && filterServices.map(service =>
                        <div className="w-full" key={service.id}>
                           <div className="relative mb-5 md:mb-10">
                              <div
                                 className="bg-white aspect-square flex justify-center items-center
                              border border-primary rounded-full p-5 lg:p-6 overflow-hidden"
                              >
                                 <img
                                    src={service?.logo || "/assets/img/placeholder-image.webp"}
                                    alt="Image"
                                 />
                              </div>
                              <Link href={route('services.show', { service: service.slug })}
                                 className="w-full max-w-12 md:max-w-14 aspect-square p-4 rounded-full
                              flex justify-center items-center absolute right-0 bottom-0 text-white
                              transition bg-primary border border-primary hover:bg-white hover:text-primary"
                              >
                                 <svg viewBox="0 0 23 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M22.2931 6.99029C22.586 6.6974 22.586 6.22253 22.2931 5.92963L17.5201 1.15666C17.2272 0.863768 16.7523 0.863768 16.4594 1.15666C16.1665 1.44955 16.1665 1.92443 16.4594 2.21732L20.7021 6.45996L16.4594 10.7026C16.1665 10.9955 16.1665 11.4704 16.4594 11.7633C16.7523 12.0562 17.2272 12.0562 17.5201 11.7633L22.2931 6.99029ZM0.476562 7.20996L21.7627 7.20996L21.7627 5.70996L0.476563 5.70996L0.476562 7.20996Z" fill="currentColor" />
                                 </svg>
                              </Link>
                           </div>
                           <h2 className="text-[#F9B624] font-semibold text-xl md:text-2xl">{service.name}</h2>
                           {/* <p className="text-[#454545] font-medium text-xs md:text-[1.375rem] leading-[1.455em]">{service.description}</p> */}
                        </div>
                     )}
                  </div>
               </div>
            </Container>
         </section>
      </Layout>
   )
}
