import { Head, Link } from '@inertiajs/react';
import Layout from '@/Layouts/Layout';
import type { ToolsProps, Category } from '@/util/props';
import { route } from 'ziggy-js';
import { useState } from 'react';
import Container from '@/Layouts/Container';
import ToolSidebar from '@/Components/Tools/ToolSidebar';
import { getStoredFilterCategoryValue } from "@/util/utils";

const maxItemPerPage = 9;

interface Props {
   tools: ToolsProps[]
   categories?: Category[]
}

export default function Index({ tools, categories }: Props) {
   const [filterCatgory, setFilterCategory] = useState<Category | null>(getStoredFilterCategoryValue());
   const [maxShow, setMaxShow] = useState(maxItemPerPage);

   const allTools = tools.filter(tool => {
      if (filterCatgory === null) return true

      if (!Array.isArray(tool.categories)) return false

      for (let i = 0; i < tool.categories.length; i++) {
         if (tool.categories[i].id == filterCatgory.id) return true;
      }
   }).filter((_, i) => (i < maxShow && i < 250));

   return (
      <Layout>
         <Head title='Tools' />
         <section className="text-white bg-tertiary pt-10 md:pt-14 pb-6 md:pb-7">
            <Container>
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
            </Container>
         </section>

         <section className="py-10 md:pt-14 md:pb-28">
            <Container className='flex flex-col lg:flex-row gap-16 relative'>
               <div className="basis-1/4">
                  <ToolSidebar
                     categories={categories}
                     onResetClick={() => { setFilterCategory(null); setMaxShow(maxItemPerPage) }}
                     onCategoryClick={setFilterCategory}
                  />
               </div>
               <div className="basis-3/4">
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-8 gap-y-14 lg:gap-x-40 lg:gap-y-32">
                     {allTools.map(tool =>
                        <div className="text-center" key={tool.id}>
                           <div className="relative mb-5 md:mb-10">
                              <div
                                 className="bg-white w-full aspect-square
                                 flex justify-center items-center border border-tertiary rounded-full p-5 lg:p-6 overflow-hidden"
                              >
                                 <img
                                    src={tool?.logo || "/assets/img/placeholder-image.webp"}
                                    alt="Image"
                                 />
                              </div>
                              <Link
                                 href={route('tools.show', { tool: tool.slug })}
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
                        </div>
                     )}
                  </div>
                  <button
                     className='bg-primary text-lg text-center w-64 p-2 md:px-6 rounded-lg shadow-md
                           transition hover:bg-dark hover:text-primary block mx-auto max-w-max mt-8 md:mt-12'
                     onClick={() => setMaxShow(state => state + maxItemPerPage)}
                  >Load More</button>
               </div>
            </Container>
         </section>
      </Layout>
   );
}
