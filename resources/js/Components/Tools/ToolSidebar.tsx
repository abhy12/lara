import ToolCategoryFilter from "./ToolCategoryFilter";
import type { Category } from '@/util/props';
import { clearCategoryFilter } from "@/util/utils";

interface Props {
   categories?: Category[]
   filterCategory?: Category | null
   onButtonClickCallback?: CallableFunction
   onCategoryClick?: (cat: Category) => any
}

export default function ToolSidebar({ categories, onButtonClickCallback, onCategoryClick, filterCategory }: Props) {
   return (
      <div className="bg-white lg:max-w-80 p-5 shadow-[3px_3px_3px_0px_grey] rounded-[15px] text-lg font-medium border border-secondary">
         <button
            className="text-left text-secondary bg-white w-full border-b-2 border-tertiary mb-5"
            onClick={() => {
               clearCategoryFilter();
               if (onButtonClickCallback) onButtonClickCallback()
            }}
         >All Tools</button>
         <ToolCategoryFilter categories={categories} onCategoryClick={onCategoryClick} filterCategory={filterCategory} />
      </div>
   );
}
