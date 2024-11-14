import { Head, router } from '@inertiajs/react';
import { useCallback } from 'react';
import { route } from 'ziggy-js';
import Dashboard from '@/Components/dashboard/Dashboard';
import ToolForm from '@/Components/Tools/ToolForm';

interface Props {

}

export default function Create({ }: Props) {
   const onFormSubmitHandler = useCallback((values: any) => {
      router.post(route('tools.store'), values);
   }, []);

   return (
      <Dashboard>
         <Head title='Add Tool' />
         <div className="">
            <h1 className='mb-2 text-xl'>Add Tool</h1>
            <ToolForm
               onSubmit={onFormSubmitHandler}
               submitButtonText='Add Tool'
            />
         </div>
      </Dashboard>
   )
}
