import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import { ArrowDropDown } from '@mui/icons-material';
import type { Category } from '@/util/props';
import { useState, useCallback, SyntheticEvent } from 'react';
import { getStoredFilterCategoryValue, storeCategoryFilterValue } from "@/util/utils";

interface Props {
   categories?: Category[]
   filterCategory?: Category | null
   onCategoryClick?: (cat: Category) => any
}

export default function ToolCategoryFilter({ categories, onCategoryClick, filterCategory = getStoredFilterCategoryValue() }: Props) {
   const [isActiveAccordion, setIsActiveAccordion] = useState<number | boolean>(false);
   const handleAccordionChange = useCallback((id: number) => (_: SyntheticEvent, newExpanded: boolean) => {
      setIsActiveAccordion(newExpanded ? id : false);
   }, []);

   return (
      <Accordion
         className="!my-0 !shadow-none"
         onChange={handleAccordionChange(-1)}
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
                                          className={`block font-normal text-left text-sm
                                                    text-[#7A7A7A] hover:text-primary ${filterCategory?.id === sub.id && 'text-primary'}`}
                                          onClick={() => {
                                             if (onCategoryClick) onCategoryClick(sub);
                                             storeCategoryFilterValue(sub);
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
   );
}
