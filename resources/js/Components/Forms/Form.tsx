import { useForm } from '@inertiajs/react';
import { TextField } from '@mui/material';
import type { FormProps } from '@/util/props';

interface Props {
   form: FormProps
}

export default function Form({ form }: Props) {
   const { data: values } = useForm({
      name: form?.name || '',
      organization: form?.organization || '',
      email: form?.email || '',
      message: form?.message || '',
   });

   return (
      <div className='flex flex-col gap-4 md:gap-6'>
         <div className='flex flex-col gap-4 md:gap-6 pt-2 md:pt-4'>
            <div>
               <TextField
                  className='w-full'
                  id="name"
                  label="Name"
                  variant="outlined"
                  value={values.name}
                  required
                  disabled
               />
            </div>
            <div>
               <TextField
                  className='w-full'
                  id="email"
                  label="Email"
                  variant="outlined"
                  value={values.email}
                  required
                  disabled
               />
            </div>
            <div>
               <TextField
                  className='w-full'
                  id="organization"
                  label="Organization"
                  variant="outlined"
                  value={values.organization}
                  required
                  disabled
               />
            </div>
            <div>
               <TextField
                  className='w-full'
                  id="message"
                  label="Message"
                  variant="outlined"
                  value={values.message}
                  multiline
                  rows={4}
                  required
                  disabled
               />
            </div>
         </div>
      </div>
   );
}
