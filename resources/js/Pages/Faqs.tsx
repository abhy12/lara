import Layout from "@/Layouts/Layout";
import { Head } from "@inertiajs/react";
import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import { ArrowDropDown } from '@mui/icons-material';
import { useState, useCallback, SyntheticEvent } from "react";

interface Faq {
   title: string
   details: string
}

const faqs: Faq[] = [
   {
      title: 'What is the purpose of this compendium?',
      details: "The compendium aims to assist nonprofits on their digital transformation journey by providing a collated list of tools, technologies, and service providers.It serves as a starting point for nonprofits at various digital maturity levels in dealing with challenges such as identifying suitable digital tools and managing limited resources.",
   },
   {
      title: 'Who is this compendium for?',
      details: 'This resource is designed for nonprofits in India that seek to enhance their digital capabilities but face common obstacles related to technology choices, budgeting, and implementation.',
   },
   {
      title: 'How are the tools and organisations in this compendium selected?',
      details: 'Tools and organisations were selected based on findings of the "State Of The Sector Report On Digital Transformation For Nonprofits In India." There were consultations held with tech experts. The selection emphasizes tools and providers that cater to the diverse needs and constraints of the nonprofit sector.',
   },
   {
      title: 'What types of digital tools are included?',
      details: 'The compendium covers a range of digital tools and technologies relevant to nonprofit operations, such as program management, monitoring, evaluation, fundraising, finance, communications, and data management.',
   },
   {
      title: 'Are these digital tools free to use?',
      details: 'While all tools are not free, it aims to provide accessible options, with a mix of free and paid tools tailored to nonprofits’ budgets.',
   },
   {
      title: 'Can NGOs contact the organisations listed for direct support?',
      details: 'Yes, the compendium includes profiles of service providers, allowing NGOs to directly reach out for support.',
   },
   {
      title: 'How can I know which tool is right for my NGO?',
      details: 'The compendium serves as a guide, offering clear descriptions and references where possible to help nonprofits choose tools that align with their specific needs and digital maturity level.',
   },
   {
      title: 'Does the compendium provide training resources for these tools?',
      details: 'Where possible, references for implementation and training resources are included to assist nonprofits in using these tools effectively.',
   },
   {
      title: 'How often is this compendium updated?',
      details: 'The compendium is intended to be a continually evolving resource, with periodic updates to ensure it remains relevant and comprehensive.',
   },
   {
      title: 'How do I submit feedback or suggest new tools/organisations for the compendium?',
      details: 'The feedback and suggestions are encouraged as part of the ongoing refinement of the resource. You can submit your suggestions by clicking on the help button.',
   },
   {
      title: 'Is there any support for data privacy and cybersecurity tools?',
      details: 'The compendium includes tools across areas like data privacy and cybersecurity to address nonprofits\' needs for secure digital operations.',
   },
   {
      title: 'Can I share this compendium with other organisations?',
      details: 'The compendium is designed as a shared resource for the nonprofit sector, so sharing with relevant organisations is encouraged.',
   },
];

export default function Faq() {
   const [isActiveAccordion, setIsActiveAccordion] = useState<string | boolean>(false);
   const handleAccordionChange = useCallback((title: string) => (_: SyntheticEvent, newExpanded: boolean) => {
      setIsActiveAccordion(newExpanded ? title : false);
   }, []);

   return (
      <Layout>
         <Head title="FAQs" />
         <main className="grow">
            <section className="text-white px-8 py-8 lg:pt-20 lg:pb-16 bg-[url('/assets/img/faqs-01.svg')] bg-cover bg-bottom">
               <div className="container mx-auto flex justify-between items-center">
                  <h1 className="font-DMSerifDisplay text-5xl">FAQs</h1>
                  <img src="/assets/img/faqs-02.gif" alt="Image" className="w-20 lg:w-28 flex-shrink" />
               </div>
            </section>

            <section className="px-8 pt-10 lg:pt-20 lg:pb-32">
               <div className="container mx-auto flex flex-col lg:flex-row gap-20 lg:gap-24">
                  <div className="basis-2/3">
                     <div className="bg-white max-w-[40rem] p-5 lg:p-8 rounded-2xl">
                        {faqs.map(faq =>
                           <AccordionFaq
                              key={faq.title}
                              title={faq.title}
                              expanded={isActiveAccordion === faq.title}
                              onClick={handleAccordionChange(faq.title)}
                           ><p>{faq.details}</p></AccordionFaq>
                        )}
                     </div>
                  </div>
                  <div className="basis-1/3 flex justify-end">
                     <img src="/assets/img/faqs-04.svg" alt="Image" className="-mb-3" />
                  </div>
               </div>
            </section>
         </main>
      </Layout>
   );
}

interface AccordionFaqProps {
   title: string
   children?: any
   expanded: boolean
   onClick: CallableFunction
}

function AccordionFaq({ title, expanded, children, onClick }: AccordionFaqProps) {
   return (
      <Accordion
         className="!my-0 !shadow-none"
         expanded={expanded}
         //@ts-ignore
         onChange={onClick}
         sx={{
            '&::before': {
               backgroundColor: '#402B4A'
            },
            '& .MuiAccordionDetails-root': {
               padding: 0,
               paddingBottom: 1.5,
            }
         }}
      >
         <AccordionSummary
            className="!px-0"
            expandIcon={<ArrowDropDown className="text-secondary" fontSize="large" />}
         >
            <h2 className="font-semibold text-secondary">{title}</h2>
         </AccordionSummary>
         <AccordionDetails>
            {children}
         </AccordionDetails>
      </Accordion>
   );
}
