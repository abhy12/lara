import { Head, Link } from '@inertiajs/react';
import Layout from '@/Components/Layout';
import type { ToolsProps } from '@/util/props';
import { route } from 'ziggy-js';
import type { Category } from '@/util/props';
import { useState } from 'react';

interface Props {
   tools: ToolsProps[]
   categories?: Category[]
}

export default function Index({ tools, categories }: Props) {
   const [filterCatgory, setFilterCategory] = useState<number | null>( null );

   return (
      <Layout>
         <Head title='Tools' />
         <section className="text-white bg-tertiary px-[5%] pt-10 md:pt-20 pb-5 md:pb-7">
            <nav className="text-[#909090] text-lg">
               <Link href={route('home')}>Home</Link> &nbsp; / &nbsp;
               <Link href={route('tools.index')} className="text-secondary font-semibold">Tools</Link>
            </nav>
            <div className="flex flex-wrap justify-between items-center">
               <h1 className="font-DMSerifDisplay text-[3.625rem] md:text-[4.071rem]">Tools</h1>
               <img src="/assets/img/wheel.gif" alt="Image" className="w-24" />
            </div>
         </section>

         <section className="px-[5%] py-10 md:pt-14 md:pb-28 flex flex-col md:flex-row gap-16 relative">
            <div className="basis-1/4">
               <div className="bg-white max-w-80 p-5 shadow rounded-[15px]">
                  <select name="tool"
                     className="appearance-none text-secondary bg-white text-[1.375rem] font-medium w-full border-b-2 border-tertiary mb-5">
                     <option value="">All Tools</option>
                  </select>
                  <select
                     name="category"
                     className="text-secondary bg-white text-[1.375rem] font-medium w-full border-b-2 border-tertiary appearance-none bg-dropdown bg-no-repeat bg-right"
                     onChange={(e) => {
                        if( e.currentTarget.value !== '' ) {
                           setFilterCategory( +e.currentTarget.value );
                        } else {
                           setFilterCategory( null );
                        }
                     }}
                  >
                     <option value="">Categories</option>
                     {categories?.map( cat => <option key={cat.id} value={cat.id}>{cat.name}</option>)}
                  </select>
               </div>
            </div>
            <div className="basis-3/4">
               <div className="flex flex-wrap justify-around gap-y-14 md:gap-y-20">
                  {Array.isArray(tools) && tools.filter(tool => {
                     if( filterCatgory === null ) return true

                     if( !Array.isArray( tool.categories ) ) return false

                     for(let i = 0; i < tool.categories.length; i++ ) {
                        if( tool.categories[i].id === filterCatgory || tool.categories[i].parent_id ) {
                           return true;
                        }
                     }
                  }).map(tool =>
                     <div className="basis-1/2 md:basis-1/3" key={tool.id}>
                        <div className="max-w-max mx-auto md:mr-0 text-center">
                           <div className="relative mb-5 md:mb-10">
                              <div
                                 className="mx-auto bg-white w-36 md:w-60 aspect-square flex justify-center items-center border border-tertiary rounded-full p-4 md:p-7">
                                 <img
                                    src="/assets/img/mform.png"
                                    alt="Image"
                                 />
                              </div>
                              <Link
                                 href={route('tools.show', { id: tool.id })}
                                 className="bg-tertiary w-11 md:w-20 aspect-square p-2 rounded-full flex justify-center items-center absolute right-0 bottom-0"
                              >
                                 <img
                                    src="/assets/img/arrow.svg"
                                    alt="Image"
                                 />
                              </Link>
                           </div>
                           <h2 className="text-tertiary font-semibold text-2xl md:text-[2.188rem] leading-[1.457em]">{tool.name}</h2>
                           <p className="text-secondary font-medium md:text-[1.375rem] leading-[1.455em]">Dhwani RIS</p>
                        </div>
                     </div>
                  )}
               </div>
            </div>
            <img src="/assets/img/folder.svg" alt="Image" className="w-10 md:w-16 absolute left-2 -bottom-3" />
         </section>
      </Layout>
   );
}
