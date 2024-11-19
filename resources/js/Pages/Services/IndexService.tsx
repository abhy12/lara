import { Head, Link } from '@inertiajs/react';
import type { ServiceProps } from '@/util/props';
import { route } from 'ziggy-js';
import Layout from '@/Components/Layout';
import { useState } from 'react';

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
         <section className="bg-primary px-[5%] pt-10 md:pt-20 pb-12 md:pb-7 lg:pt-16 lg:pb-6">
            <nav className="text-[#909090] text-xl font-semibold">
               <Link href={route('home')}>Home</Link>
               &nbsp;/&nbsp;
               <Link
                  className="text-secondary "
                  href={route('services.index')}
               >Service Providers</Link>
            </nav>
            <div className="flex justify-between items-center mt-12 md:mt-6">
               <h1 className="text-[#363636] font-DMSerifDisplay text-6xl">Service Providers</h1>
               <img className="w-full max-w-28" src="/assets/img/gear.gif" alt="Image" />
            </div>
         </section>

         <section className="px-[5%] py-10 md:pt-14 md:pb-28 flex flex-col lg:flex-row gap-16 relative">
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
                     <div className="w-full " key={service.id}>
                        <div className="relative mb-5 md:mb-10">
                           <div
                              className="bg-white aspect-square flex justify-center items-center
                              border border-primary rounded-full p-5 md:p-7"
                           >
                              <img
                                 src={service?.logo || "/assets/img/placeholder-image.webp"}
                                 alt="Image"
                              />
                           </div>
                           <Link href={route('services.show', { id: service.id })}
                              className="bg-primary w-full max-w-12 md:max-w-14 aspect-square p-2 rounded-full
                              flex justify-center items-center absolute right-0 bottom-0"
                           >
                              <img
                                 src="/assets/img/arrow.svg"
                                 alt="Image"
                              />
                           </Link>
                        </div>
                        <h2 className="text-[#F9B624] font-semibold text-xl md:text-2xl">{service.name}</h2>
                        {/* <p className="text-[#454545] font-medium text-xs md:text-[1.375rem] leading-[1.455em]">{service.description}</p> */}
                     </div>
                  )}
               </div>
            </div>
         </section>
      </Layout>
   )
}
