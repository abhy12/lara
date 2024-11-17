import { Head, router, Link } from '@inertiajs/react';
import type { ServiceProps } from '@/Components/Services/Service';
import ServiceForm from '@/Components/Services/ServiceForm';
import { useCallback } from 'react';
import type { ToolsProps } from '@/util/props';
import type { Category } from '@/util/props';
import { route } from 'ziggy-js';
import Dashboard from '@/Components/dashboard/Dashboard';
import { Button } from '@mui/material';

interface Props {
   service: ServiceProps
   tools?: ToolsProps[]
   selectedToolIds?: number[]
   categories?: Category[]
   selectedCategories?: number[]
}

export default function Edit({ service, tools, selectedToolIds, categories, selectedCategories }: Props) {
   const onFormSubmitHandler = useCallback((values: any) => {
      router.put(route('services.update', { id: service.id }), values);
   }, []);

   if (!service) return <></>

   return (
      <Dashboard>
         <Head title='Edit Service' />
         <div>
            <Link
               href={`/services/${service?.id}`}
               className='mb-4 inline-block'
            >
               <Button variant='outlined' color="primary">
                  Visit Service
               </Button>
            </Link>
            <ServiceForm
               service={service}
               submitButtonText='Update'
               onSubmit={onFormSubmitHandler}
               tools={tools}
               selectedTools={selectedToolIds}
               categories={categories}
               selectedCategories={selectedCategories}
            />
         </div>
      </Dashboard>
   );
}
