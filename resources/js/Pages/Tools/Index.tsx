import { Head, Link } from '@inertiajs/react';
import Layout from '@/Layouts/Layout';
import type { ToolsProps } from '@/util/props';
import { route } from 'ziggy-js';
import type { Category } from '@/util/props';
import { useState, useCallback, SyntheticEvent } from 'react';
import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import { ArrowDropDown } from '@mui/icons-material';

interface Props {
   tools: ToolsProps[]
   categories?: Category[]
}

export default function Index({ tools, categories }: Props) {
   const [filterCatgory, setFilterCategory] = useState<ToolsProps | null>(null);
   const [isActiveAccordion, setIsActiveAccordion] = useState<number | boolean>(false);
   const handleAccordionChange = useCallback((id: number) => (_: SyntheticEvent, newExpanded: boolean) => {
      setIsActiveAccordion(newExpanded ? id : false);
   }, []);

   return (
      <Layout>
         <Head title='Tools' />
         <section className="text-white bg-tertiary px-[5%] pt-10 md:pt-14 pb-6 md:pb-7">
            <nav className="text-[#909090] text-lg">
               <Link href={route('home')}>Home</Link>
               &nbsp;&nbsp;/&nbsp;&nbsp;
               <Link href={route('tools.index')} className="text-secondary font-semibold">Tools</Link>
            </nav>
            <div className="flex justify-between items-center mt-8 md:mt-6">
               <h1 className="font-DMSerifDisplay text-5xl">
                  {filterCatgory !== null ? filterCatgory.name : 'All Tools'}
               </h1>
               <img className="w-full flex-shrink max-w-16" src="/assets/img/wheel.gif" alt="Image" />
            </div>
         </section>

         <section className="px-[5%] py-10 md:pt-14 md:pb-28 flex flex-col lg:flex-row gap-16 relative">
            <div className="basis-1/4">
               <div className="bg-white lg:max-w-80 p-5 shadow rounded-[15px] text-lg font-medium">
                  <button
                     className="text-left text-secondary bg-white w-full border-b-2 border-tertiary mb-5"
                     onClick={() => setFilterCategory(null)}
                  >All Tools</button>

                  <Accordion
                     className="!my-0 !shadow-none"
                     onChange={handleAccordionChange( -1 )}
                     expanded={isActiveAccordion !== false}
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
                              .sort((a, b) => (a.name > b.name) ? 1 : 0)
                              .map(cat =>
                                 <Accordion
                                    className="!my-0 !shadow-none"
                                    key={cat.id}
                                    onChange={handleAccordionChange(cat.id)}
                                    expanded={cat.id === isActiveAccordion}
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
                                                .sort((a, b) => (a.name > b.name) ? 1 : 0)
                                                .map(sub =>
                                                   <button
                                                      className='block font-normal text-left text-sm
                                                    text-[#7A7A7A] hover:text-primary'
                                                      onClick={() => {
                                                         setFilterCategory(sub)
                                                         setIsActiveAccordion( false );
                                                      }}
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
                                 className="w-full max-w-10 md:max-w-14 aspect-square p-4 rounded-full
                                 flex justify-center items-center absolute right-0 bottom-0 transition text-white
                                 bg-tertiary border border-tertiary hover:bg-white hover:text-tertiary"
                              >
                                 <svg viewBox="0 0 23 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M22.2931 6.99029C22.586 6.6974 22.586 6.22253 22.2931 5.92963L17.5201 1.15666C17.2272 0.863768 16.7523 0.863768 16.4594 1.15666C16.1665 1.44955 16.1665 1.92443 16.4594 2.21732L20.7021 6.45996L16.4594 10.7026C16.1665 10.9955 16.1665 11.4704 16.4594 11.7633C16.7523 12.0562 17.2272 12.0562 17.5201 11.7633L22.2931 6.99029ZM0.476562 7.20996L21.7627 7.20996L21.7627 5.70996L0.476563 5.70996L0.476562 7.20996Z" fill="currentColor" />
                                 </svg>
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
