import { Head, router } from '@inertiajs/react';
import ServiceForm from '@/Components/Services/ServiceForm';
import { useCallback } from 'react';
import type { ToolsProps } from '@/util/props';
import type { Category } from '@/util/props';
import { route } from 'ziggy-js';
import Dashboard from '@/Components/dashboard/Dashboard';

interface Props {
   tools?: ToolsProps[]
   categories?: Category[]
}

export default function Create({ tools, categories }: Props) {
   const onFormSubmitHandler = useCallback((values: any) => {
      router.post(route('services.store'), values);
   }, []);

   return (
      <Dashboard>
         <Head title='Add Service' />
         <div className="">
            <h1 className='mb-2'>Add Service</h1>
            <ServiceForm
               onSubmit={onFormSubmitHandler}
               tools={tools}
               categories={categories}
            />
         </div>
      </Dashboard>
   )
}
