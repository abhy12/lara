import { Head, router, Link } from '@inertiajs/react';
import { useCallback } from 'react';
import { route } from 'ziggy-js';
import Dashboard from '@/Components/dashboard/Dashboard';
import ToolForm from '@/Components/Tools/ToolForm';
import { ToolsProps } from '@/util/props';
import { Button } from '@mui/material';
import type { Category } from '@/util/props';

interface Props {
   tool?: ToolsProps
   categories?: Category[]
   selectedCategories?: number[]
}

export default function Edit({ tool, categories, selectedCategories }: Props) {
   const onFormSubmitHandler = useCallback((values: any) => {
      if (!tool) return
      router.put(route('tools.update', { id: tool.id }), values);
   }, []);

   if (!tool) return <></>;

   return (
      <Dashboard>
         <Head title='Add Tool' />
         <div className="">
            <Link
               href={route('tools.show', { id: tool.id })}
               className='mb-4 inline-block'
            >
               <Button variant='outlined' color="primary">
                  Visit Tool
               </Button>
            </Link>
            <ToolForm
               onSubmit={onFormSubmitHandler}
               tool={tool}
               categories={categories}
               selectedCategories={selectedCategories}
               submitButtonText='Update'
            />
         </div>
      </Dashboard>
   )
}
