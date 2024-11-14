import type { Category } from '@/util/props';
import { SyntheticEvent } from 'react';
import { useCallback, useEffect } from 'react';
import { useForm } from '@inertiajs/react';
import {
   FormControlLabel,
   Checkbox,
   FormControl,
   InputLabel,
   Select,
   MenuItem,
   TextField,
   Button,
   FormHelperText,
   Divider,
   FormGroup
}
   from '@mui/material';

interface Props {
   categories: Category[]
   selectedCategories?: number[]
   onChange: (arg0: SyntheticEvent<Element, Event>, arg: boolean) => void
}

export default function CategorySelector({ categories, selectedCategories, onChange }: Props) {
   const { data, setData, post, reset, errors } = useForm({
      name: '',
      parent_id: '',
   });

   const newCategorySubmitHandler = useCallback(() => {
      post('/category', {
         onSuccess: () => reset()
      });
   }, [data]);

   useEffect(() => {
      // console.error(errors);
   }, [errors]);

   if (!Array.isArray(categories)) return <></>;

   return (
      <div>
         <div className='py-1 px-3 rounded bg-white/5'>
            <label className='text-xl my-2 inline-block'>Category</label>
            <Divider />
            <div className='max-h-52 overflow-y-auto w-full mt-2'>
               <FormGroup>
                  {categories.map(cat => {
                     const subcat = cat.subcategory?.map(sub =>
                        <FormControlLabel
                           className='!block !ml-2 !mr-0'
                           key={sub.id}
                           label={sub.name}
                           title={sub.name}
                           onChange={onChange}
                           control={
                              <Checkbox
                                 value={sub.id}
                                 checked={selectedCategories?.includes(sub.id)}
                              />
                           }
                        />
                     );
                     return (
                        <div
                           key={cat.id}
                        >
                           <FormControlLabel
                              className='!block !mr-0'
                              label={cat.name}
                              title={cat.name}
                              onChange={onChange}
                              control={
                                 <Checkbox
                                    value={cat.id}
                                    checked={selectedCategories?.includes(cat.id)}
                                 />
                              }
                           />
                           {subcat}
                        </div>
                     );
                  })}
               </FormGroup>
            </div>
            <div className='py-4 flex flex-col gap-3'>
               <TextField
                  className='w-full'
                  label="New Category Name"
                  variant="outlined"
                  required={true}
                  value={data.name}
                  onChange={e => setData('name', e.target.value)}
                  error={errors.name !== undefined || false}
                  helperText={errors.name}
               />
               <FormControl fullWidth>
                  <InputLabel id="create-new-category">Parent Category</InputLabel>
                  <Select
                     labelId="create-new-category"
                     value={data.parent_id}
                     label="Parent Category"
                     onChange={e => {
                        setData('parent_id', e.target.value);
                     }}
                     error={errors.parent_id !== undefined || false}
                  >
                     <MenuItem value="">
                        <em className='uppercase'>--Parent Category--</em>
                     </MenuItem>
                     {categories.map(cat =>
                        <MenuItem
                           key={cat.id}
                           value={cat.id}
                        >
                           {cat.name}
                        </MenuItem>
                     )}
                  </Select>
                  {errors.parent_id && <FormHelperText error={true}>{errors.parent_id}</FormHelperText>}
               </FormControl>
               <Button
                  variant="contained"
                  onClick={newCategorySubmitHandler}
               >Add New Category</Button>
            </div>
         </div>
      </div>
   );
}
