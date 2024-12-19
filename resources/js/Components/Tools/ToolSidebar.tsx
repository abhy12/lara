import ToolCategoryFilter from "./ToolCategoryFilter";
import type { Category } from '@/util/props';
import { clearCategoryFilter, getStoredFilterCategoryValue, storeCategoryFilterValue } from "@/util/utils";
import { useState, useEffect } from 'react';

interface Props {
   categories?: Category[]
   initFilterCategory?: Category | null
   onResetClick?: CallableFunction
   onCategoryClick?: (cat: Category) => any
   expandAndSetFilter?: Category
}

export default function ToolSidebar({
   categories,
   initFilterCategory = null,
   onResetClick,
   onCategoryClick,
   expandAndSetFilter
}: Props) {
   const [activeFilterCategory, setActiveFilterCategory] = useState<Category | null>(initFilterCategory);

   useEffect(() => {
      if (!expandAndSetFilter || getStoredFilterCategoryValue()) return
      storeCategoryFilterValue(expandAndSetFilter);
      setActiveFilterCategory(expandAndSetFilter);
   }, [expandAndSetFilter]);

   return (
      <div className="bg-white lg:max-w-80 p-5 shadow-[3px_3px_3px_0px_grey] rounded-[15px] text-lg font-medium border border-secondary">
         <button
            className="text-left text-secondary bg-white w-full border-b-2 border-tertiary mb-5"
            onClick={() => {
               clearCategoryFilter();
               setActiveFilterCategory(null);
               if (onResetClick) onResetClick()
            }}
         >All Tools</button>

         <ToolCategoryFilter
            categories={categories}
            activeFilterCategory={activeFilterCategory}
            expandParentFilterAccordion={expandAndSetFilter && activeFilterCategory?.parent_id}
            onCategoryClick={(cat) => {
               setActiveFilterCategory(cat)
               storeCategoryFilterValue(cat);
               if (onCategoryClick) onCategoryClick(cat)
            }}
         />
      </div>
   );
}
