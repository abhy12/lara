import { Head } from '@inertiajs/react';
import Dashboard from '@/Components/dashboard/Dashboard';
import type { FormProps } from '@/util/props';
import Form from '@/Components/Forms/Form';

interface Props {
   form: FormProps
}

export default function Edit({ form }: Props) {
   if (!form) return <></>

   return (
      <Dashboard>
         <Head title='Edit Service' />
         <div>
            <Form form={form} />
         </div>
      </Dashboard>
   );
}
