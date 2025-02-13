import { useCallback } from 'react';
import type { FormProps } from '@/util/props';
import { Head, router } from '@inertiajs/react';
import { route } from 'ziggy-js';
import Dashboard from '@/Components/dashboard/Dashboard';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import { Button } from '@mui/material';
import { Visibility, Delete, GetApp } from '@mui/icons-material';
import {
   GridRowsProp,
   DataGrid,
   GridColDef,
   GridActionsCellItem,
   GridToolbar,
} from '@mui/x-data-grid';
import ExcelJS from 'exceljs';
import { saveAs } from 'file-saver';

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
   const rows: GridRowsProp | undefined = forms?.map(form => {
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
                  onClick={() => router.get(route('forms.show', { id }))}
                  title='View'
               />,
               <GridActionsCellItem
                  icon={<Delete />}
                  label='Delete'
                  title='Delete'
                  onClick={() => router.delete(route('forms.destroy', { id }))}
               />
            ];
         }
      },
   ];

   const exportJsonToExcel = useCallback(async (data?: FormProps[]) => {
      if (!data) return

      const fileName = 'Form Data';
      // Create a new workbook
      const workbook = new ExcelJS.Workbook();
      const worksheet = workbook.addWorksheet("Sheet1");

      // Add column headers
      worksheet.columns = [
         { header: "ID", key: "id" },
         { header: "Name", key: "name" },
         { header: "Organization", key: "organization" },
         { header: "Email", key: "email" },
         { header: "Message", key: "message" },
      ];

      // Add rows to the worksheet
      data.forEach(row => {
         worksheet.addRow({
            id: row.id,
            name: row.name,
            organization: row.organization,
            email: row.email,
            message: row.message,
         });
      });

      // Export the workbook to Excel file
      const buffer = await workbook.xlsx.writeBuffer();
      const blob = new Blob([buffer],
         {
            type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
         });
      saveAs(blob, `${fileName}.xlsx`);
   }, []);

   return (
      <Dashboard>
         <Head title='Services' />
         <h1 className='mb-4 md:mb-6 text-xl md:text-2xl'>Form Data</h1>
         <div className='mb-3'>
            <Button
               variant='outlined'
               color="primary"
               startIcon={<GetApp />}
               onClick={() => exportJsonToExcel(forms)}
            >
               Export
            </Button>
         </div>

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
               slots={{ toolbar: GridToolbar }}
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
