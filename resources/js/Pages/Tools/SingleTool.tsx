import type { ToolsProps } from "@/util/props"
import Layout from "@/Layouts/Layout";
import { Head, Link } from "@inertiajs/react";
import { route } from 'ziggy-js';
import Container from "@/Layouts/Container";

interface Props {
   tool?: ToolsProps
}

export default function Single({ tool }: Props) {
   if (!tool) return <></>

   return (
      <Layout>
         <Head title={tool.name} />
         <section className="text-white pt-10 lg:pt-16 pb-10 bg-[url('/assets/img/tool-01.svg')] bg-cover bg-bottom">
            <Container>
               <p className="text-[#909090] font-semibold text-lg mb-10 lg:mb-16">
                  <Link href="/">Home</Link>
                  &nbsp;/&nbsp;
                  <Link href={route('tools.index')}>Tools</Link>
                  &nbsp;/&nbsp;
                  <Link href={route('tools.show', { tool: tool.slug })} className="text-[#762E5E]">{tool.name}</Link>
               </p>
               <div className="flex flex-col lg:flex-row lg:items-center gap-10 lg:gap-24">
                  <div className="basis-1/4">
                     <div className="bg-white w-36 lg:w-52 aspect-square rounded-full p-5 lg:p-6 flex justify-center items-center overflow-hidden">
                        <img src={tool.logo || "/assets/img/placeholder-image.webp"} alt="Image" />
                     </div>
                  </div>
                  <div className="basis-2/4">
                     <h1 className="font-semibold text-[2.625rem] lg:text-3xl 2xl:text-[2.313rem] mb-2">{tool.name}</h1>
                     <p
                        className="text-lg leading-relaxed hidden lg:block"
                        dangerouslySetInnerHTML={{__html: tool.service_provider || ''}}
                     />
                  </div>
                  <div className="basis-1/4 flex lg:justify-end items-end">
                     <a
                        className="bg-primary text-lg text-center block w-64 p-2 rounded-lg shadow-md
                           transition hover:bg-dark hover:text-primary"
                        href={tool.website || '#'}
                        target="_blank"
                     >Visit Website</a>
                  </div>
               </div>
            </Container>
         </section>

         <section className="pt-16 lg:pt-24 pb-10 lg:pb-40">
            <Container className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-20 2xl:gap-24 gap-y-16">
               <div className="basis-1/5">
                  <img src="/assets/img/tool-03.svg" alt="Image" className="w-9 lg:w-16 aspect-square" />
                  <hr className="border-secondary mt-5 mb-3" />
                  <h2 className="text-[#494949] font-semibold text-[0.919rem] lg:text-lg 2xl:text-[1.309rem]">Cost Structure</h2>
                  <p
                     className="text-[#4A4A4A] text-[0.931rem] lg:text-[0.869rem] 2xl:text-base"
                     dangerouslySetInnerHTML={{__html: tool.cost_structure || ''}}
                  />
               </div>
               <div className="basis-1/5">
                  <img src="/assets/img/tool-04.svg" alt="Image" className="w-9 lg:w-16 aspect-square" />
                  <hr className="border-secondary mt-5 mb-3" />
                  <h2 className="text-[#494949] font-semibold text-[0.919rem] lg:text-lg 2xl:text-[1.309rem]">Fee Amount</h2>
                  <p
                     className="text-[#4A4A4A] text-[0.931rem] lg:text-[0.869rem] 2xl:text-base"
                     dangerouslySetInnerHTML={{__html: tool.fee_amount || ''}}
                  />
               </div>
               <div className="basis-1/5">
                  <img src="/assets/img/tool-06.svg" alt="Image" className="w-9 lg:w-16 aspect-square" />
                  <hr className="border-secondary mt-5 mb-3" />
                  <h2 className="text-[#494949] font-semibold text-[0.919rem] lg:text-lg 2xl:text-[1.309rem]">Free Credit</h2>
                  <p
                     className="text-[#4A4A4A] text-[0.931rem] lg:text-[0.869rem] 2xl:text-base"
                     dangerouslySetInnerHTML={{__html: tool.free_credit || 'N.A'}}
                  />
               </div>
               <div className="basis-1/5">
                  <img src="/assets/img/tool-07.svg" alt="Image" className="w-9 lg:w-16 aspect-square" />
                  <hr className="border-secondary mt-5 mb-3" />
                  <h2 className="text-[#494949] font-semibold text-[0.919rem] lg:text-lg 2xl:text-[1.309rem]">Support Structure</h2>
                  <p
                     className="text-[#4A4A4A] text-[0.931rem] lg:text-[0.869rem] 2xl:text-base"
                     dangerouslySetInnerHTML={{ __html: tool.support_structure || ''}}
                  />
               </div>
               <div className="basis-1/5">
                  <img src="/assets/img/tool-08.svg" alt="Image" className="w-9 lg:w-16 aspect-square" />
                  <hr className="border-secondary mt-5 mb-3" />
                  <h2 className="text-[#494949] font-semibold text-[0.919rem] lg:text-lg 2xl:text-[1.309rem]">SDG Domain</h2>
                  <p
                     className="text-[#4A4A4A] text-[0.931rem] lg:text-[0.869rem] 2xl:text-base"
                     dangerouslySetInnerHTML={{__html: tool.sgb_domain || ''}}
                  />
               </div>
               <div className="basis-1/5">
                  <img src="/assets/img/tool-09.svg" alt="Image" className="w-9 lg:w-16 aspect-square" />
                  <hr className="border-secondary mt-5 mb-3" />
                  <h2 className="text-[#494949] font-semibold text-[0.919rem] lg:text-lg 2xl:text-[1.309rem]">NGO References</h2>
                  <p
                     className="text-[#4A4A4A] text-[0.869rem] 2xl:text-base"
                     dangerouslySetInnerHTML={{__html: tool.ngo_ref || ''}}
                  />
               </div>
               <div className="basis-1/5">
                  <img src="/assets/img/tool-05.svg" alt="Image" className="w-9 lg:w-16 aspect-square" />
                  <hr className="border-secondary mt-5 mb-3" />
                  <h2 className="text-[#494949] font-semibold text-[0.919rem] lg:text-lg 2xl:text-[1.309rem]">Additional Comments
                  </h2>
                  <p
                     className="text-[#4A4A4A] text-[0.931rem] lg:text-[0.869rem] 2xl:text-base"
                     dangerouslySetInnerHTML={{__html: tool.additional_comments || ''}}
                  />
               </div>
            </Container>
         </section>
      </Layout>
   );
}
