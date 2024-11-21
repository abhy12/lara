import Layout from '@/Layouts/Layout';
import { Head } from "@inertiajs/react";
import Container from '@/Layouts/Container';

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
                     <p
                        className="text-[#363636] text-[0.888rem] 2xl:text-[1.075rem] mb-6"
                     >Nonprofits embarking on a digital transformation journey often encounter fundamental challenges
                        such as identifying available tools, determining where to start, operating on a resource constraint,
                        and articulating their technology needs and goals. This compendium aims to address these challenges
                        by providing a comprehensive resource of tools, technologies, and service providers tailored for the unique requirements of the nonprofit sector.</p>
                     <p
                        className="text-[#363636] text-[0.888rem] 2xl:text-[1.075rem]"
                     >In our <a
                        className='text-blue-500'
                        href='https://indialeadersforsocialsector.com/download-ilss-digital-transformation-for-social-impact-program-report/'
                        target='_blank'
                     >The State Of The Sector Report On Digital Transformation For Nonprofits In India</a>,
                        we found that organisations, despite their diverse objectives and locations,
                        face common technology-related challenges. These challenges include uncertainty
                        about the available digital tools and technologies, struggles with identifying and
                        articulating technology needs and goals, and budgeting dilemmas beyond just applications and subscriptions.<br />
                        We also learnt that nonprofits are at various stages in their digital journey. While many have experimented with some form of digital tools and technologies, a significant number still grapple with foundational questions and uncertainties.
                     </p>
                     <br />
                     <p
                        className="text-[#363636] text-[0.888rem] 2xl:text-[1.075rem] mb-6"
                     >This compendium was inspired by the needs and opportunities highlighted in our study. Our goal is to offer nonprofits a practical starting point by providing clear and accessible information on available digital tools and technologies. We aim to empower organizations to confidently embark and progress on their digital transformation journey.</p>
                     <p
                        className="text-[#363636] text-[0.888rem] 2xl:text-[1.075rem] font-semibold mb-6"
                     >The compendium will cover information on:</p>
                     <div className="text-center flex gap-6 lg:gap-32 mb-10">
                        <div className="max-w-44 flex flex-col items-center">
                           <div
                              className="bg-tertiary w-full max-w-28 lg:max-w-36 aspect-square rounded-full p-4 mb-4 flex justify-center items-center">
                              <img src="/assets/img/about-03.gif" alt="Image" className="rounded-full" />
                           </div>
                           <p className="text-[#363636] 2xl:text-[1.075rem] font-semibold">Digital Tools & Technologies</p>
                        </div>
                        <div className="max-w-44 flex flex-col items-center">
                           <div className="bg-primary w-full max-w-28 lg:max-w-36 aspect-square rounded-full p-4 mb-4 flex justify-center items-center">
                              <img src="/assets/img/about-04.gif" alt="Image" className="rounded-full" />
                           </div>
                           <p className="text-[#363636] 2xl:text-[1.075rem] font-semibold">Service Providers</p>
                        </div>
                     </div>
                     <p className="text-[#363636] text-[0.888rem] 2xl:text-[1.075rem]">Where possible, we will include references for
                        implementation and detailed profiles of service providers. Our intention is to continually expand and refine
                        this resource, ultimately creating a comprehensive handbook as a meetingplace for tech providers and
                        beneficiaries in the social sector.</p>
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
