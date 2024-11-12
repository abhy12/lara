import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, usePage, router } from '@inertiajs/react';
import ServiceForm from '@/Components/Services/ServiceForm';
import { useCallback, useEffect } from 'react';
import type { ToolsProps } from '@/Components/Tools/Tool';
import type { Category } from '@/util/props';
import { route } from 'ziggy-js';

interface Props {
   tools?: ToolsProps[]
   categories?: Category[]
}

export default function Create({ tools, categories }: Props) {
   const { errors } = usePage().props;
   const onFormSubmitHandler = useCallback((values: any) => {
      router.post( route( 'service.create' ), values );
   }, []);

   useEffect(() => {
      // console.log( errors );
   }, [errors]);

   return (
      <AuthenticatedLayout>
         <Head title='Add Service' />

         <div className="max-w-2xl mx-auto p-4 sm:p-6 lg:p-8">
            <h1 className='mb-2'>Add Service</h1>
            <ServiceForm
               onSubmit={onFormSubmitHandler}
               tools={tools}
               categories={categories}
            />
         </div>

      </AuthenticatedLayout>
   )
}
