import { Head, Link, router } from '@inertiajs/react';
import PrimaryButton from '@/Components/PrimaryButton';
import type { ServiceProps } from '@/Components/Services/Service';
import { Card, CardContent, CardActionArea, Typography } from '@mui/material';
import { route } from 'ziggy-js';
import Dashboard from '@/Components/dashboard/Dashboard';

interface Props {
   services?: ServiceProps[]
}

export default function Index({ services }: Props) {
   // console.log( services );
      return (
      <Dashboard>
         <Head title='Services' />
         <div className="max-w-2xl mx-auto p-4 sm:p-6 lg:p-8">
            <Link
               href={route('services.create')}
               className='mb-4 inline-block'
            >
               <PrimaryButton>Add New Service</PrimaryButton>
            </Link>
            <div className='flex flex-col gap-5'>
               {Array.isArray(services) && services.map(service =>
                  <Card key={service.id}>
                     <CardActionArea>
                        <CardContent>
                           <Link className='block' href={route('services.show', { id: service.id })}>
                              <Typography gutterBottom variant="h5" component="div">
                                 {service.name}
                              </Typography>
                              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                 {service.description}
                              </Typography>
                           </Link>
                        </CardContent>
                     </CardActionArea>
                  </Card>
               )}
            </div>
         </div>
      </Dashboard>
   )
}
