import { Head, Link } from '@inertiajs/react';
import type { ServiceProps } from '@/util/props';
import { route } from 'ziggy-js';
import Layout from '@/Components/Layout';
import { useState } from 'react';

interface Props {
   services?: ServiceProps[]
}

export default function Index({ services }: Props) {
   const [sortBy, setSortBy] = useState( false );

   if( !services ) return<></>

   const filterServices = sortBy ? [...services].reverse() : services;

   return (
      <Layout>
         <Head title='Services' />
         <section className="bg-primary px-[5%] pt-10 md:pt-20 pb-5 md:pb-7">
            <nav className="text-[#909090] text-lg">
               <Link href={route('home')}>Home</Link>&nbsp; / &nbsp;
               <Link href={route('services.index')} className="text-secondary font-semibold">Service Providers</Link>
            </nav>
            <div className="flex justify-between items-center">
               <h1 className="text-[#363636] font-DMSerifDisplay text-5xl md:text-[4.071rem] leading-none">Service Providers</h1>
               <img src="/assets/img/gear.gif" alt="Image" className="w-28 rounded-full" />
            </div>
         </section>

         <section className="px-[5%] py-10 md:pt-14 md:pb-28 flex flex-col md:flex-row gap-16 relative">
            <div className="basis-1/4">
               <div className="bg-white max-w-80 p-5 shadow rounded-[15px]">
                  <select
                     name="sortby"
                     className="text-secondary bg-white text-[1.375rem] font-medium w-full border-b border-tertiary appearance-none bg-dropdown bg-no-repeat bg-right"
                     onChange={e => {
                        const value = e.currentTarget.value;
                        if( value == '1' ) {
                           setSortBy( true );
                        } else {
                           setSortBy( false );
                        }
                     }}
                  >
                     <option value="0">Ascending</option>
                     <option value="1">Descending</option>
                  </select>
               </div>
            </div>
            <div className="basis-3/4">
               <div className="flex flex-wrap gap-y-14 md:gap-y-20">
                  {Array.isArray(filterServices) && filterServices.map(service =>
                     <div className="basis-1/2 md:basis-1/3" key={service.id}>
                        <div className="w-36 md:w-60 mx-auto md:mr-0 text-center">
                           <div className="relative mb-5 md:mb-10">
                              <div
                                 className="bg-white w-36 md:w-60 aspect-square flex justify-center items-center border border-primary rounded-full p-4 md:p-7">
                                 <img
                                    src="/assets/img/studiosubu.png"
                                    alt="Image"
                                 />
                              </div>
                              <Link href={route('services.show', { id: service.id })}
                                 className="bg-primary w-11 md:w-20 aspect-square p-2 rounded-full flex justify-center items-center absolute right-0 bottom-0">
                                 <img
                                    src="/assets/img/arrow.svg"
                                    alt="Image"
                                 />
                              </Link>
                           </div>
                           <h2 className="text-[#F9B624] font-semibold text-2xl md:text-[2.188rem] leading-[1.457em]">{service.name}</h2>
                           <p className="text-[#454545] font-medium text-xs md:text-[1.375rem] leading-[1.455em]">{service.description}</p>
                        </div>
                     </div>
                  )}
               </div>
            </div>
            <img src="/assets/img/folder.svg" alt="Image" className="w-10 md:w-16 absolute left-2 -bottom-3" />
         </section>
      </Layout>
   )
}
