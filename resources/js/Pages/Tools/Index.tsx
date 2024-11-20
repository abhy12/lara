import { Head, Link } from '@inertiajs/react';
import Layout from '@/Layouts/Layout';
import type { ToolsProps } from '@/util/props';
import { route } from 'ziggy-js';
import type { Category } from '@/util/props';
import { useState } from 'react';
import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import { ArrowDropDown } from '@mui/icons-material';

interface Props {
   tools: ToolsProps[]
   categories?: Category[]
}

export default function Index({ tools, categories }: Props) {
   const [filterCatgory, setFilterCategory] = useState<ToolsProps | null>(null);

   return (
      <Layout>
         <Head title='Tools' />
         <section className="text-white bg-tertiary px-[5%] pt-10 md:pt-14 pb-6 md:pb-7">
            <nav className="text-[#909090] text-lg">
               <Link href={route('home')}>Home</Link>
               &nbsp;&nbsp;/&nbsp;&nbsp;
               <Link href={route('tools.index')} className="text-secondary font-semibold">Tools</Link>
            </nav>
            <div className="flex flex-wrap justify-between items-center mt-8 md:mt-6">
               <h1 className="font-DMSerifDisplay text-5xl">
                  {filterCatgory !== null ? filterCatgory.name : 'All Tools'}
               </h1>
               <img className="w-full max-w-16" src="/assets/img/wheel.gif" alt="Image" />
            </div>
         </section>

         <section className="px-[5%] py-10 md:pt-14 md:pb-28 flex flex-col lg:flex-row gap-16 relative">
            <div className="basis-1/4">
               <div className="bg-white lg:max-w-80 p-5 shadow rounded-[15px] text-lg font-medium">
                  <button
                     className="text-left text-secondary bg-white w-full border-b-2 border-tertiary mb-5"
                     onClick={() => setFilterCategory(null)}
                  >All Tools</button>

                  <Accordion className="!my-0 !shadow-none"
                     sx={{
                        '& .MuiAccordionDetails-root': {
                           padding: 0,
                           paddingTop: 1,
                        },
                        '& .MuiButtonBase-root': {
                           borderBottom: '2px solid #402B4A',
                           minHeight: 'unset!important',
                        },
                        '& .MuiAccordionSummary-content': {
                           margin: '5px 0!important',
                        }
                     }}
                  >
                     <AccordionSummary
                        className="!px-0"
                        expandIcon={<ArrowDropDown className="text-secondary" fontSize="large" />}
                     >
                        <h2 className="font-medium text-secondary">Category</h2>
                     </AccordionSummary>
                     <AccordionDetails>
                        {Array.isArray(categories) &&
                        categories
                        .sort((a, b) => ( a.name > b.name ) ? 1 : 0 )
                        .map(cat =>
                           <Accordion
                              className="!my-0 !shadow-none"
                              key={cat.id}
                              sx={{
                                 '&::before': {
                                    content: 'unset',
                                 },
                                 '& .MuiAccordionDetails-root': {
                                    padding: '0 0 5px 0',
                                 },
                                 '& .MuiButtonBase-root': {
                                    border: 'unset!important',
                                 },
                              }}
                           >
                              <AccordionSummary
                                 className="!px-0"
                                 expandIcon={<ArrowDropDown className="text-secondary" fontSize="large" />}
                              >
                                 <h2 className="text-secondary font-normal">{cat.name}</h2>
                              </AccordionSummary>
                              <AccordionDetails>
                                 {Array.isArray(cat.subcategory) &&
                                    <div className='flex flex-col gap-2'>
                                       {cat.subcategory
                                       .sort((a, b) => ( a.name > b.name ) ? 1 : 0 )
                                       .map(sub =>
                                          <button
                                             className='block font-normal text-left text-sm
                                             text-[#7A7A7A] hover:text-primary'
                                             onClick={() => setFilterCategory( sub )}
                                             key={sub.id}
                                          >{sub.name}</button>
                                       )}
                                    </div>
                                 }
                              </AccordionDetails>
                           </Accordion>
                        )}
                     </AccordionDetails>
                  </Accordion>
               </div>
            </div>
            <div className="basis-3/4">
               <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-8 gap-y-14 lg:gap-x-40 lg:gap-y-32">
                  {Array.isArray(tools) && tools.filter(tool => {
                     if (filterCatgory === null) return true

                     if (!Array.isArray(tool.categories)) return false

                     for (let i = 0; i < tool.categories.length; i++) {
                        if (tool.categories[i].id == filterCatgory.id) return true;
                     }
                  }).map(tool =>
                     <div className="" key={tool.id}>
                        <div className="text-center">
                           <div className="relative mb-5 md:mb-10">
                              <div
                                 className="bg-white w-full aspect-square
                                 flex justify-center items-center border border-tertiary rounded-full p-5 md:p-7"
                              >
                                 <img
                                    src={tool?.logo || "/assets/img/placeholder-image.webp"}
                                    alt="Image"
                                 />
                              </div>
                              <Link
                                 href={route('tools.show', { id: tool.id })}
                                 className="bg-tertiary w-full max-w-10 md:max-w-14 aspect-square p-2
                                 rounded-full flex justify-center items-center absolute right-0 bottom-0"
                              >
                                 <img
                                    src="/assets/img/arrow.svg"
                                    alt="Image"
                                 />
                              </Link>
                           </div>
                           <h2 className="text-tertiary font-semibold text-xl md:text-2xl">{tool.name}</h2>
                           {tool?.service_provider &&
                              <p className="text-secondary font-medium md:text-[1.375rem] leading-[1.455em]">{tool.service_provider}</p>
                           }
                        </div>
                     </div>
                  )}
               </div>
            </div>
         </section>
      </Layout>
   );
}
