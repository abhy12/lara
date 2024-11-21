import { Head, Link, router } from '@inertiajs/react';
import type { Category } from '@/util/props';
import { route } from 'ziggy-js';
import Dashboard from '@/Components/dashboard/Dashboard';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
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

interface Props {
   categories?: Category[]
}

const removeDefaultColSettings = {
   disableReorder: true,
   filterable: false,
   hideSortIcons: true,
   sortable: false,
   disableColumnMenu: true,
   flex: 1,
}

export default function Index({ categories }: Props) {
   const rows: GridRowsProp | undefined = categories?.map(cat => {
      return {
         id: cat.id,
         name: cat.name,
         parent: (cat.parent_id && cat.parent) ? cat.parent.name : '',
         created_at: cat.created_at ? dayjs(cat.created_at || '').format('DD/MM/YY') : '',
      }
   });

   const categoryEditHandler = useCallback((id: GridRowId) => {
      router.get(route('category.edit', { id: id }));
   }, []);

   const columns: GridColDef[] = [
      { field: 'name', headerName: 'Name', width: 200, ...removeDefaultColSettings },
      { field: 'parent', headerName: 'Parent', width: 200, ...removeDefaultColSettings },
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
                  onClick={() => categoryEditHandler(id)}
                  title='Edit'
               />,
               <GridActionsCellItem
                  icon={<DeleteIcon />}
                  label='Delete'
                  title='Delete'
                  onClick={() => router.delete(route('category.destroy', { id }))}
               />
            ];
         }
      },
   ];

   return (
      <Dashboard>
         <Head title='Categories' />
         <Link
            href={route('category.create')}
            className='mb-4 inline-block'
         >
            <Button variant='outlined' color="primary" startIcon={<AddIcon />}>
               Add Category
            </Button>
         </Link>

         <div className='w-full'>
            <DataGrid
               rows={rows}
               columns={columns}
               disableColumnFilter={true}
            />
         </div>
      </Dashboard>
   )
}
