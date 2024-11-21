import type { Category } from "@/util/props"
import { useCallback, FormEvent } from 'react';
import { Button, TextField, FormControl, Select, MenuItem, InputLabel } from '@mui/material';
import { useForm } from '@inertiajs/react';

interface Props {
   category?: Category
   parentCategories?: Category[]
   onSubmit?: CallableFunction
   submitButtonText?: string
}

export default function CategoryForm({ category, parentCategories, onSubmit, submitButtonText = 'Update' }: Props) {
   const { data, setData, errors } = useForm({
      name: category?.name || '',
      parent_id: category?.parent_id || '',
   });

   const formSubmitHandler = useCallback((e: FormEvent) => {
      e.preventDefault();
      if (onSubmit) onSubmit(data);
   }, [data]);

   return (
      <form
         className="flex flex-col gap-4 md:gap-6"
         onSubmit={formSubmitHandler}
      >
         <TextField
            className='w-full'
            id="name"
            label="Category Name"
            variant="outlined"
            onChange={e => setData('name', e.currentTarget.value)}
            value={data.name}
            error={errors.name !== undefined || false}
            helperText={errors.name}
            required
         />
         <FormControl
            error={errors.parent_id !== undefined}
         >
            <InputLabel>Parent Category</InputLabel>
            <Select
               defaultValue={category?.parent_id || ''}
               onChange={e => {
                  const value = e.target.value;
                  if (!Number.isInteger(value)) return
                  setData('parent_id', value);
               }}
            >
               {parentCategories &&
                  parentCategories.map(parent =>
                     <MenuItem
                        key={parent.id}
                        value={parent.id}
                     >{parent.name}</MenuItem>
                  )
               }
            </Select>
         </FormControl>
         <Button
            variant='outlined'
            type='submit'
         >
            {submitButtonText}
         </Button>
      </form>
   );
}
