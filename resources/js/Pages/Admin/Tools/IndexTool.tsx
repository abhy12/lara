import { Head, Link, router } from '@inertiajs/react';
import { route } from 'ziggy-js';
import { ToolsProps } from '@/util/props';
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
   GridToolbar,
} from '@mui/x-data-grid';

dayjs.extend(relativeTime);

interface Props {
   tools?: ToolsProps[]
}

const removeDefaultColSettings = {
   disableReorder: true,
   filterable: false,
   hideSortIcons: true,
   sortable: false,
   disableColumnMenu: true,
   flex: 1,
}

export default function Index({ tools }: Props) {
   const rows: GridRowsProp | undefined = tools?.map(tool=> {
      return {
         id: tool.slug,
         name: tool.name,
         created_at: tool.created_at ? dayjs(tool.created_at || '').format('DD/MM/YY') : '',
      }
   });

   const serviceEditHandler = useCallback((id: GridRowId) => {
      router.get(route('tools.edit', { tool: id }));
   }, []);

   const columns: GridColDef[] = [
      { field: 'name', headerName: 'Name', width: 200, ...removeDefaultColSettings },
      { field: 'category', headerName: 'Category', width: 200, ...removeDefaultColSettings },
      { field: 'services', headerName: 'Services', width: 200, ...removeDefaultColSettings },
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
                  onClick={() => router.delete(route('tools.destroy', {tool: id}))}
               />
            ];
         }
      },
   ];

   return (
      <Dashboard>
         <Head title='Services' />
         <Link
            href={route('tools.create')}
            className='mb-4 inline-block'
         >
            <Button variant='outlined' color="primary" startIcon={<AddIcon />}>
               Add Tool
            </Button>
         </Link>

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
