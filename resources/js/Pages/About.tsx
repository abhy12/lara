import Layout from '@/Layouts/Layout';
import { Head, Link } from "@inertiajs/react";
import Container from '@/Layouts/Container';
import { route } from 'ziggy-js';

export default function About() {
   return (
      <Layout>
         <Head title="About" />
         <section className="text-white py-10 lg:pt-20 lg:pb-16 bg-[url('/assets/img/about-01.svg')] bg-cover bg-bottom">
            <Container>
               <div className="container mx-auto flex justify-between items-center">
                  <h1 className="font-DMSerifDisplay text-5xl lg:text-[2.813rem]">About</h1>
                  <img src="/assets/img/about-02.gif" alt="Image" className="w-20 lg:w-28 flex-shrink" />
               </div>
            </Container>
         </section>

         <section className="py-10 lg:pt-20 lg:pb-28">
            <Container>
               <div className="container mx-auto flex flex-col lg:flex-row gap-20 lg:gap-24">
                  <div className="basis-2/3">
                     <h2
                        className="text-secondary font-semibold text-lg lg:text-[1.075rem] 2xl:text-2xl mb-6"
                     >Digital Toolbook for Social Impact (DiTSI)</h2>
                     <div className='text-[#363636] text-[0.888rem] 2xl:text-[1.075rem] flex flex-col gap-4'>
                        <p>Nonprofits embarking on a digital transformation journey often encounter fundamental
                           challenges such as identifying available tools, determining where to start, operating
                           on a resource constraint, and articulating their technology needs and goals.
                           To address these challenges, ILSS has launched the
                           <a className='link' target='_blank'
                              href="https://indialeadersforsocialsector.com/the-ilss-digital-transformation-for-social-impact-program/"
                           >&nbsp;Digital Transformation for Social Impact Program</a> to provide holistic and
                           valuable insights, helping organisations make informed technology-related decisions.
                        </p>
                        <p>
                           Complementing the program, this toolbook collates a comprehensive resource of tools,
                           technologies, and service providers tailored for the unique requirements of the
                           nonprofit sector. Our goal is to offer nonprofits a practical starting point by
                           providing clear and accessible information on available digital tools and technologies.
                           We aim to enable organisations to confidently embark and progress on their digital transformation journey
                        </p>
                        <p>
                           In <a className='link' target='_blank'
                              href='https://indialeadersforsocialsector.com/download-ilss-digital-transformation-for-social-impact-program-report/'>
                              The State Of The Sector Report On Digital Transformation For Nonprofits In India</a>,
                           it was found that organisations, despite their diverse objectives and locations,
                           face common technology-related challenges. These challenges include uncertainty
                           about the available digital tools and technologies, struggles with identifying
                           and articulating technology needs and goals, and budgeting dilemmas beyond just
                           applications and subscriptions.
                        </p>
                        <p>
                           It was also seen that nonprofits are at various stages in their digital journey.
                           While many have experimented with some form of digital tools and technologies,
                           a significant number still grapple with navigating the vast set of tools and
                           potential uncertainties around using them.
                        </p>
                        <p className='mb-2 font-medium'>
                           This toolbook was inspired by the needs and opportunities highlighted in the study and covers information on:
                        </p>
                        <div
                           className="flex justify-between sm:justify-start gap-5 sm:gap-14 md:gap-20 lg:gap-28 2xl:gap-32 mb-3"
                        >
                           <Link href={route('tools.index')} className="block text-center">
                              <div className="bg-tertiary aspect-square rounded-full mx-auto p-5 md:p-8 mb-3 max-w-32 md:max-w-40">
                                 <img src="/assets/img/wheel.gif" alt="Image" className="rounded-full" />
                              </div>
                              <h3 className="text-xl">Digital Tools and Technologies</h3>
                           </Link>
                           <Link href={route('services.index')} className="block text-center ">
                              <div className="bg-primary aspect-square rounded-full mx-auto p-5 md:p-8 mb-3 max-w-32 md:max-w-40">
                                 <img src="/assets/img/gear.gif" alt="Image" className="rounded-full" />
                              </div>
                              <h3 className="text-xl">Service Providers</h3>
                           </Link>
                        </div>
                        <p>
                           Where possible, we will include references for implementation and detailed profiles of
                           service providers. Our intention is to continually expand and refine this resource,
                           ultimately creating a comprehensive handbook as a meetingplace for tech providers
                           and beneficiaries  in the social sector.
                        </p>
                     </div>
                  </div>
                  <div className="basis-1/3 hidden lg:flex justify-end items-start">
                     <img src="/assets/img/about-05.svg" alt="Image" />
                  </div>
               </div>
            </Container>
         </section>
      </Layout>
   );
}
