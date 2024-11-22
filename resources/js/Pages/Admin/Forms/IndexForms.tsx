import type { FormProps } from '@/util/props';
import { Head, router } from '@inertiajs/react';
import { route } from 'ziggy-js';
import Dashboard from '@/Components/dashboard/Dashboard';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import { Visibility, Delete } from '@mui/icons-material';
import {
   GridRowsProp,
   DataGrid,
   GridColDef,
   GridActionsCellItem,
   GridToolbar,
} from '@mui/x-data-grid';

dayjs.extend(relativeTime);

interface Props {
   forms?: FormProps[]
}

const removeDefaultColSettings = {
   disableReorder: true,
   filterable: false,
   hideSortIcons: true,
   sortable: false,
   disableColumnMenu: true,
   flex: 1,
}

export default function Index({ forms }: Props) {
   const rows: GridRowsProp | undefined = forms?.map( form => {
      return {
         id: form.id,
         name: form.name,
         email: form.email,
         organization: form.organization,
         created_at: form.created_at ? dayjs(form.created_at || '').format('DD/MM/YY') : '',
      }
   });

   const columns: GridColDef[] = [
      { field: 'name', headerName: 'Name', width: 200, ...removeDefaultColSettings },
      { field: 'email', headerName: 'Email', width: 200, ...removeDefaultColSettings },
      { field: 'organization', headerName: 'Organization', width: 200, ...removeDefaultColSettings },
      { field: 'created_at', headerName: 'Created', width: 200, ...removeDefaultColSettings },
      {
         field: 'actions',
         type: 'actions',
         headerName: 'Actions',
         getActions: ({ id }) => {
            return [
               <GridActionsCellItem
                  icon={<Visibility />}
                  label='View'
                  onClick={() => router.get(route('forms.show', {id}))}
                  title='View'
               />,
               <GridActionsCellItem
                  icon={<Delete />}
                  label='Delete'
                  title='Delete'
                  onClick={() => router.delete(route('forms.destroy', {id}))}
               />
            ];
         }
      },
   ];

   return (
      <Dashboard>
         <Head title='Services' />
         <h1 className='mb-4 md:mb-6 text-xl md:text-2xl'>Form Data</h1>

         <div className='w-full'>
            <DataGrid
               sx={{
                  '& .MuiDataGrid-toolbarContainer > button': {
                     display: 'none',
                  },
                  '& .MuiDataGrid-toolbarContainer >:nth-child(2)': {
                     display: 'none',
                  }
               }}
               rows={rows}
               columns={columns}
               disableColumnFilter={true}
               disableColumnSelector
               disableDensitySelector
               slots={{ toolbar: GridToolbar}}
               slotProps={{
                  toolbar: {
                     showQuickFilter: true,
                  }
               }}
            />
         </div>
      </Dashboard>
   )
}
