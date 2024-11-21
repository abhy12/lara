import { Head, Link } from '@inertiajs/react';
import type { ServiceProps } from '@/util/props';
import { route } from 'ziggy-js';
import Layout from '@/Layouts/Layout';
import Container from '@/Layouts/Container';

interface Props {
   service?: ServiceProps
}

export default function Single({ service }: Props) {
   if (!service) return <></>;

   return (
      <Layout>
         <Head title={service.name} />
         <section className="pt-10 lg:pt-16 pb-20 lg:pb-28 bg-[url('/assets/img/service-01.svg')] bg-cover bg-bottom">
            <Container>
               <p className="text-[#909090] font-semibold text-lg mb-10 lg:mb-16">
                  <Link href="/">Home</Link>
                  &nbsp;/&nbsp;
                  <Link
                     href={route('services.index')}
                  >Service Providers</Link>
                  &nbsp;/&nbsp;
                  <Link
                     className="text-[#762E5E]"
                     href={route('services.show', { id: service.id })}
                  >{service.name}</Link>
               </p>
               <div className="flex flex-col lg:flex-row lg:items-center gap-5 lg:gap-24">
                  <div className="basis-1/4">
                     <div
                        className="bg-white w-full max-w-36 lg:max-w-64 aspect-square
                           rounded-full p-5 lg:p-6 flex justify-center items-center overflow-hidden"
                     >
                        <img src={service?.logo || "/assets/img/placeholder-image.webp"} alt="Image" />
                     </div>
                  </div>
                  <div className="basis-2/4">
                     <h1 className="font-semibold text-2xl lg:text-3xl 2xl:text-[2.3rem] mb-2">{service.name}</h1>
                     <p className="text-[#363636] text-sm 2xl:text-[1.063rem] mb-5">{service.description}</p>
                  </div>
                  <div className="basis-1/4 hidden lg:flex lg:justify-end">
                     <div>
                        <p className="text-[#363636] flex gap-7 mb-7">
                           <img
                              className="w-6 text-lg"
                              src="/assets/img/service-03.svg"
                              alt="Image"
                           />
                           {service.point_contact} {service.point_contact ? `(${service.designation})` : ''}
                        </p>
                        <p className="text-[#363636] flex gap-7 mb-7">
                           <img src="/assets/img/service-04.svg" alt="Image"
                              className="w-6 text-lg" />
                           <a
                              className="underline"
                              href={`mailto:${service.email}`}
                              target='_blank'
                           >{service.email}</a>
                        </p>
                        <p className="text-[#363636] flex gap-7 mb-7">
                           <img
                              src="/assets/img/service-05.svg"
                              alt="Image"
                              className="w-6 text-lg"
                           />
                           <a
                              target='_blank'
                              href={`tel:${service.contact_number}`}
                           >{service.contact_number}</a></p>
                        <a
                           className="bg-white hover:bg-dark hover:text-primary transition
                              text-lg text-center block max-w-64 p-2 rounded-lg shadow-md"
                           href={service.website}
                           target='_blank'
                        >Visit Website</a>
                     </div>
                  </div>
               </div>
            </Container>
         </section>

         <section className="pt-16 lg:pt-24 pb-10 lg:pb-40">
            <Container>
               <div className="mb-8 lg:mb-24">
                  <img src="/assets/img/service-06.svg" alt="Image" className="w-9 lg:w-16 aspect-square" />
                  <hr className="border-primary mt-5 mb-3 max-w-44" />
                  <h2 className="text-[#494949] font-semibold text-[0.919rem] lg:text-lg 2xl:text-[1.309rem] mb-2">Services Provided</h2>
                  <p className="text-[#4A4A4A] text-sm lg:text-base 2xl:text-[1.154rem]">{service.services_provided}</p>
               </div>
               <div className='grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-20 2xl:gap-24 gap-y-16'>
                  <div>
                     <img src="/assets/img/service-07.svg" alt="Image" className="w-9 lg:w-16 aspect-square" />
                     <hr className="border-primary mt-5 mb-3" />
                     <h2 className="text-[#494949] font-semibold text-[0.919rem] lg:text-xl 2xl:text-[1.309rem] mb-2">Cost of services</h2>
                     <p className="text-[#4A4A4A] text-sm lg:text-base 2xl:text-[1.154rem]">{service.services_cost}</p>
                  </div>
                  <div>
                     <img src="/assets/img/service-08.svg" alt="Image" className="w-9 lg:w-16 aspect-square" />
                     <hr className="border-primary mt-5 mb-3" />
                     <h2 className="text-[#494949] font-semibold text-[0.919rem] lg:text-xl 2xl:text-[1.309rem] mb-2">Products Offered</h2>
                     <p className="text-[#4A4A4A] text-sm lg:text-base 2xl:text-[1.154rem]">{service.product_offered}</p>
                  </div>
                  <div>
                     <img src="/assets/img/service-09.svg" alt="Image" className="w-9 lg:w-16 aspect-square" />
                     <hr className="border-primary mt-5 mb-3" />
                     <h2 className="text-[#494949] font-semibold text-[0.919rem] lg:text-xl 2xl:text-[1.309rem] mb-2">Cost of products</h2>
                     <p className="text-[#4A4A4A] text-sm lg:text-base 2xl:text-[1.154rem]">{service.product_cost || 'N.A'}</p>
                  </div>
                  <div>
                     <img src="/assets/img/service-10.svg" alt="Image" className="w-9 lg:w-16 aspect-square" />
                     <hr className="border-primary mt-5 mb-3" />
                     <h2 className="text-[#494949] font-semibold text-[0.919rem] lg:text-xl 2xl:text-[1.309rem] mb-2">Functional Expertise
                     </h2>
                     <p className="text-[#4A4A4A] text-sm lg:text-base 2xl:text-[1.154rem]">{service.functional_expertise}</p>
                  </div>
               </div>
            </Container>
         </section>

         <section className="py-14 -mb-3 bg-[url(/assets/img/service-11.svg)] bg-cover lg:hidden">
            <Container>
               <p className="text-[#363636] flex gap-7 mb-7">
                  <img src="/assets/img/service-12.svg" alt="Image" className="w-6 text-lg" />
                  {service.point_contact} {service.point_contact ? `(${service.designation})` : ''}
               </p>
               <p className="text-[#363636] flex gap-7 mb-7">
                  <img src="/assets/img/service-13.svg" alt="Image" className="w-6 text-lg" />
                  <a
                     className="underline"
                     href={`mailto:${service.email}`}
                     target='_blank'
                  >{service.email}</a></p>
               <p className="text-[#363636] flex gap-7 mb-7">
                  <img src="/assets/img/service-14.svg" alt="Image" className="w-6 text-lg" />
                  <a
                     href={`tel:${service.contact_number}`}
                     target='_blank'
                  >{service.contact_number}</a></p>
               <a
                  className="bg-primary text-lg text-center block max-w-64 p-2 rounded-lg shadow-md"
                  href={service.website}
                  target='_blank'
               >Visit Website</a>
            </Container>
         </section>
      </Layout>
   )
}
