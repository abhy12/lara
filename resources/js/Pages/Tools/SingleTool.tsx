import type { ToolsProps } from "@/util/props"
import Layout from "@/Layouts/Layout";
import { Head, Link } from "@inertiajs/react";
import { route } from 'ziggy-js';

interface Props {
   tool?: ToolsProps
}

export default function Single({ tool }: Props) {
   if (!tool) return <></>

   return (
      <Layout>
         <Head title={tool.name} />
         <main className="grow">
            <section className="text-white px-8 pt-10 lg:pt-16 pb-20 lg:pb-28 bg-[url('/assets/img/tool-01.svg')] bg-cover bg-bottom">
               <div className="container mx-auto">
                  <p className="text-[#909090] font-semibold text-lg mb-10">
                     <Link href="/">Home</Link>
                     &nbsp;/&nbsp;
                     <Link href={route('tools.index')}>Tools</Link>
                     &nbsp;/&nbsp;
                     <Link href={route('tools.show', { id: tool.id })} className="text-[#762E5E]">{tool.name}</Link>
                  </p>
                  <div className="flex flex-col lg:flex-row lg:items-end gap-10 lg:gap-24">
                     <div className="basis-1/4">
                        <div className="bg-white w-36 lg:w-64 aspect-square rounded-full p-3 lg:p-7 flex justify-center items-center">
                           <img src={tool.logo || "/assets/img/placeholder-image.webp"} alt="Image" />
                        </div>
                     </div>
                     <div className="basis-2/4">
                        <h1 className="font-semibold text-[2.625rem] lg:text-3xl 2xl:text-[2.313rem] mb-2">{tool.name}</h1>
                        <ul
                           className="font-medium text-[1.375rem] lg:text-sm 2xl:text-[1.375rem] mb-4"
                        >{tool.services?.map(service => <li key={service.id}><Link href={route('services.show', { id: service.id })}>{service.name}</Link></li>)}
                        </ul>
                        <p className="text-lg leading-relaxed hidden lg:block">
                           {tool.service_provider}
                        </p>
                     </div>
                     <div className="basis-1/4 flex lg:justify-end items-end">
                        <a href={tool.website || '#'} target="_blank" className="bg-primary text-lg text-center block w-64 p-2 rounded-lg shadow-md">Visit Website</a>
                     </div>
                  </div>
               </div>
            </section>

            <section className="px-8 pt-16 lg:pt-24 pb-10 lg:pb-40">
               <div className="container mx-auto grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-20 2xl:gap-24 gap-y-16">
                  <div className="basis-1/5">
                     <img src="/assets/img/tool-03.svg" alt="Image" className="w-9 lg:w-16 aspect-square" />
                     <hr className="border-secondary mt-5 mb-3" />
                     <h2 className="text-[#494949] font-semibold text-[0.919rem] lg:text-lg 2xl:text-[1.309rem]">Cost Structure</h2>
                     <p className="text-[#4A4A4A] text-[0.931rem] lg:text-[0.869rem] 2xl:text-base">{tool.cost_structure}</p>
                  </div>
                  <div className="basis-1/5">
                     <img src="/assets/img/tool-04.svg" alt="Image" className="w-9 lg:w-16 aspect-square" />
                     <hr className="border-secondary mt-5 mb-3" />
                     <h2 className="text-[#494949] font-semibold text-[0.919rem] lg:text-lg 2xl:text-[1.309rem]">Fee Amount</h2>
                     <p className="text-[#4A4A4A] text-[0.931rem] lg:text-[0.869rem] 2xl:text-base">{tool.fee_amount}</p>
                  </div>
                  <div className="basis-1/5">
                     <img src="/assets/img/tool-05.svg" alt="Image" className="w-9 lg:w-16 aspect-square" />
                     <hr className="border-secondary mt-5 mb-3" />
                     <h2 className="text-[#494949] font-semibold text-[0.919rem] lg:text-lg 2xl:text-[1.309rem]">Additional Comments
                     </h2>
                     <p className="text-[#4A4A4A] text-[0.931rem] lg:text-[0.869rem] 2xl:text-base">{tool.additional_comments || 'N.A'}</p>
                  </div>
                  <div className="basis-1/5">
                     <img src="/assets/img/tool-06.svg" alt="Image" className="w-9 lg:w-16 aspect-square" />
                     <hr className="border-secondary mt-5 mb-3" />
                     <h2 className="text-[#494949] font-semibold text-[0.919rem] lg:text-lg 2xl:text-[1.309rem]">Fee Credit</h2>
                     <p className="text-[#4A4A4A] text-[0.931rem] lg:text-[0.869rem] 2xl:text-base">{tool.free_credit || 'N.A'}</p>
                  </div>
                  <div className="basis-1/5">
                     <img src="/assets/img/tool-07.svg" alt="Image" className="w-9 lg:w-16 aspect-square" />
                     <hr className="border-secondary mt-5 mb-3" />
                     <h2 className="text-[#494949] font-semibold text-[0.919rem] lg:text-lg 2xl:text-[1.309rem]">Support Structure</h2>
                     <p className="text-[#4A4A4A] text-[0.931rem] lg:text-[0.869rem] 2xl:text-base">{tool.support_structure}</p>
                  </div>
                  <div className="basis-1/5">
                     <img src="/assets/img/tool-08.svg" alt="Image" className="w-9 lg:w-16 aspect-square" />
                     <hr className="border-secondary mt-5 mb-3" />
                     <h2 className="text-[#494949] font-semibold text-[0.919rem] lg:text-lg 2xl:text-[1.309rem]">SDG Domain</h2>
                     <p className="text-[#4A4A4A] text-[0.931rem] lg:text-[0.869rem] 2xl:text-base">{tool.sgb_domain}</p>
                  </div>
                  <div className="basis-1/5">
                     <img src="/assets/img/tool-09.svg" alt="Image" className="w-9 lg:w-16 aspect-square" />
                     <hr className="border-secondary mt-5 mb-3" />
                     <h2 className="text-[#494949] font-semibold text-[0.919rem] lg:text-lg 2xl:text-[1.309rem]">NGO References</h2>
                     <p className="text-[#4A4A4A] text-[0.869rem] 2xl:text-base">{tool.ngo_ref}</p>
                  </div>
               </div>
            </section>
         </main>
      </Layout>
   );
}
