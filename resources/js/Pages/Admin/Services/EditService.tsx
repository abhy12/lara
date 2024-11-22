import { Head, router, Link } from '@inertiajs/react';
import ServiceForm from '@/Components/Services/ServiceForm';
import { useCallback } from 'react';
import type { ToolsProps, ServiceProps, Category } from '@/util/props';
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
      if (!service) return
      router.post(
         route('services.update', { service: service.slug  }),
         { ...values, _method: 'put' }
      );
   }, []);

   if (!service) return <></>

   return (
      <Dashboard>
         <Head title='Edit Service' />
         <div>
            <Link
               href={route('services.show', { service: service.slug })}
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
