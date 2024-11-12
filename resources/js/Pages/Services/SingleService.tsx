import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link, router } from '@inertiajs/react';
import PrimaryButton from '@/Components/PrimaryButton';
import Dropdown from '@/Components/Dropdown';
import type { ServiceProps } from '@/Components/Services/Service';
import { route } from 'ziggy-js';

interface Props {
   service?: ServiceProps
}

export default function Single({ service }: Props) {
   if( !service ) return<></>;

   return (
      <AuthenticatedLayout
         header={
            <h2 className="text-xl font-semibold leading-tight text-gray-800">
               {service?.name}
            </h2>
         }
      >
      <Head title='Services' />
      <div className="max-w-2xl mx-auto p-4 sm:p-6 lg:p-8">
         <Link
            href={route('services.edit', { id: service.id })}
            className='mb-4 inline-block'
         >
            <PrimaryButton>Edit</PrimaryButton>
         </Link>
            <div
               className='relative p-3 mb-2 rounded bg-white border'
            >
               <div className='absolute z-50 right-4 top-2'>
                  <Dropdown>
                     <Dropdown.Trigger>
                        <button>
                           <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                              <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
                           </svg>
                        </button>
                     </Dropdown.Trigger>
                     <Dropdown.Content>
                        <Link
                           className="block w-full px-4 py-2 text-left text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:bg-gray-100 transition duration-150 ease-in-out"
                           href={route('services.edit', {id: service.id})}
                        >
                           Edit
                        </Link>
                        <button
                           onClick={() => router.delete(route('services.destroy', {id: service.id}))}
                           className="block w-full px-4 py-2 text-left text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:bg-gray-100 transition duration-150 ease-in-out"
                        >
                           Delete
                        </button>
                     </Dropdown.Content>
                  </Dropdown>
               </div>
               {Array.isArray( service?.categories ) &&
                  <div className='mt-3'>
                     <h2 className='font-bold mb-2 text-lg'>Category</h2>
                     <div className='flex flex-wrap gap-2'>
                     {service.categories.map( cat =>
                        <PrimaryButton
                           key={cat.id}
                        >{cat.name}</PrimaryButton>
                     )}
                     </div>
                  </div>
               }
               <h3><span className='block font-bold'>Service Name:</span> {service?.name}</h3>
               <hr />
               <p><span className='block font-bold'>Description:</span> {service?.description}</p>
               <hr />
               <p><span className='block font-bold'>Service Provided:</span> {service?.services_provided}</p>
               <hr />
               <p><span className='block font-bold'>Service Cost:</span> {service?.services_cost}</p>
               <hr />
               <p><span className='block font-bold'>Product Offered:</span> {service?.product_offered}</p>
               <hr />
               <p><span className='block font-bold'>Product Cost:</span> {service?.product_cost}</p>
               <hr />
               <p><span className='block font-bold'>Functional Expertise:</span> {service?.functional_expertise}</p>
               <hr />
               <p><span className='block font-bold'>SGD Domain:</span> {service?.sgb_domain}</p>
               <hr />
               <p><span className='block font-bold'>Website:</span> {service?.website}</p>
               <hr />
               <p><span className='block font-bold'>Point Contact:</span> {service?.point_contact}</p>
               <hr />
               <p><span className='block font-bold'>Designation:</span> {service?.designation}</p>
               <hr />
               <p><span className='block font-bold'>Email:</span> {service?.email}</p>
               <hr />
               <p><span className='block font-bold'>Contact:</span> {service?.contact_number}</p>
               {Array.isArray( service?.tools ) &&
                  <div className='mt-3'>
                     <h2 className='font-bold mb-2 text-lg'>Tools</h2>
                     <div className='flex flex-wrap gap-2'>
                     {service.tools.map( tool =>
                        <PrimaryButton
                           key={tool.id}
                        >{tool.name}
                        </PrimaryButton>
                     )}
                     </div>
                  </div>
               }
            </div>
         </div>
      </AuthenticatedLayout>
   )
}
