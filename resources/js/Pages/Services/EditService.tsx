import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, usePage, router, Link } from '@inertiajs/react';
import type { ServiceProps } from '@/Components/Services/Service';
import PrimaryButton from '@/Components/PrimaryButton';
import ServiceForm from '@/Components/Services/ServiceForm';
import { useCallback, useEffect } from 'react';
import type { ToolsProps } from '@/Components/Tools/Tool';
import type { Category } from '@/util/props';
import { route } from 'ziggy-js';

interface Props {
   service: ServiceProps
   tools?: ToolsProps[]
   selectedToolIds?: number[]
   categories?: Category[]
   selectedCategories?: number[]
}

export default function Edit({ service, tools, selectedToolIds, categories, selectedCategories }: Props) {
   const { errors } = usePage().props;
   const onFormSubmitHandler = useCallback(( values: any ) => {
      router.put( route('services.update', {id: service.id} ), values );
   }, []);

   useEffect(() => {
      // console.log( errors );
   }, [errors]);
   console.log( service );
   if( !service ) return <></>

   return(
      <AuthenticatedLayout
         header={
               <h2 className="text-xl font-semibold leading-tight text-gray-800">
                  {service?.name}
               </h2>
            }
         >
         <Head title='Edit Service' />
         <div className="max-w-2xl mx-auto p-4 sm:p-6 lg:p-8">
            <Link
               href={`/services/${service?.id}`}
               className='mb-4 inline-block'
            >
               <PrimaryButton>Back to Service</PrimaryButton>
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
      </AuthenticatedLayout>
   );
}
