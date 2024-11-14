import { Head, Link, router } from '@inertiajs/react';
import type { ServiceProps } from '@/Components/Services/Service';
import { route } from 'ziggy-js';
import Dashboard from '@/Components/dashboard/Dashboard';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import customParseFormat from 'dayjs/plugin/customparseformat';
import { useCallback } from 'react';
import { Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/DeleteOutlined';
import {
   GridRowsProp,
   DataGrid,
   GridColDef,
   GridActionsCellItem,
   GridRowId,
} from '@mui/x-data-grid';

dayjs.extend(relativeTime);
dayjs.extend(customParseFormat);

interface Props {
   services?: ServiceProps[]
}

const removeDefaultColSettings = {
   disableReorder: true,
   filterable: false,
   hideSortIcons: true,
   sortable: false,
   disableColumnMenu: true,
   flex: 1,
}

export default function Index({ services }: Props) {
   const rows: GridRowsProp | undefined = services?.map(service => {
      const catgory: string[] = [];
      const tools: string[] = [];

      service.categories?.map(cat => {
         catgory.push(cat.name);
      });

      service.tools?.map(tool => {
         tools.push(tool.name);
      });

      return {
         id: service.id,
         name: service.name,
         category: catgory.join(', '),
         tools: tools.join(', '),
         created_at: service.created_at ? dayjs(service.created_at || '').format('DD/MM/YY') : '',
      }
   });

   const serviceEditHandler = useCallback((id: GridRowId) => {
      router.get(route('services.edit', { id: id }));
   }, []);

   const columns: GridColDef[] = [
      { field: 'name', headerName: 'Name', width: 200, ...removeDefaultColSettings },
      { field: 'category', headerName: 'Category', width: 200, ...removeDefaultColSettings },
      { field: 'tools', headerName: 'Tools', width: 200, ...removeDefaultColSettings },
      { field: 'created_at', headerName: 'Created', width: 200, ...removeDefaultColSettings },
      {
         field: 'actions',
         type: 'actions',
         headerName: 'Actions',
         getActions: ({ id }) => {
            return [
               <GridActionsCellItem
                  icon={<EditIcon />}
                  label='Edit'
                  onClick={() => serviceEditHandler(id)}
                  title='Edit'
               />,
               <GridActionsCellItem
                  icon={<DeleteIcon/>}
                  label='Delete'
                  title='Delete'
                  onClick={() => router.delete(route('services.destroy', {id}))}
               />
            ];
         }
      },
   ];

   return (
      <Dashboard>
         <Head title='Services' />
         <Link
            href={route('services.create')}
            className='mb-4 inline-block'
         >
            <Button variant='outlined' color="primary" startIcon={<AddIcon />}>
               Add Service
            </Button>
         </Link>

         <div className='w-full'>
            <DataGrid
               rows={rows}
               columns={columns}
               disableColumnFilter={true}
               hideFooter={true}
            />
         </div>
      </Dashboard>
   )
}
