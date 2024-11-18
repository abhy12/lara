import { useForm, usePage } from '@inertiajs/react';
import type { SyntheticEvent } from 'react';
import { useState } from 'react';
import type { ToolsProps } from '@/util/props';
import {
   Button,
   TextField,
   Radio,
   RadioGroup,
   FormControlLabel,
   FormControl,
   FormLabel,
   Avatar,
   Alert,
} from '@mui/material';
import { useCallback } from 'react';
import type { Category } from '@/util/props';
import CategorySelector from '@/Components/Category/CategorySelector';

interface Props {
   children?: any
   submitButtonText?: string
   onSubmit?: CallableFunction
   tool?: ToolsProps
   categories?: Category[]
   selectedCategories?: number[]
}

export default function ToolForm({
   submitButtonText = 'Submit',
   onSubmit,
   tool,
   categories,
   selectedCategories,
}: Props) {
   const [categoriesValues, setCategoriesValues] = useState<number[]>(selectedCategories || []);
   const { props: { errors } } = usePage();
   const { data: values, setData } = useForm({
      name: tool?.name || '',
      is_opensource: tool?.is_opensource || '',
      website: tool?.website || '',
      cost_structure: tool?.cost_structure || '',
      fee_amount: tool?.fee_amount || '',
      free_credit: tool?.free_credit || '',
      support_structure: tool?.support_structure || '',
      sgb_domain: tool?.sgb_domain || '',
      ngo_ref: tool?.ngo_ref || '',
      additional_comments: tool?.additional_comments || '',
      logo: '',
   });

   const handleChange = useCallback((e: SyntheticEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const target = e.currentTarget;
      const key = target.id;
      const value = target.value
      setData(values => ({
         ...values,
         [key]: value,
      }))
   }, []);

   const formSubmitHandler = useCallback((e: SyntheticEvent) => {
      e.preventDefault();
      if (typeof onSubmit === 'function') onSubmit({ ...values, categories: categoriesValues });
   }, [onSubmit, values, categoriesValues]);

   const radioButtonHandler = useCallback((e: SyntheticEvent) => {
      // @ts-ignore
      if (e.target?.value === undefined) return
      // @ts-ignore
      const value = +(e.target.value);
      setData(values => ({
         ...values,
         is_opensource: value,
      }))
   }, []);

   const handleCategoriesChange = useCallback((e: SyntheticEvent<Element>, checked: boolean) => {
      // @ts-ignore
      const inputValue = +(e.currentTarget?.value);
      if (!inputValue) return
      setCategoriesValues(state => {
         if (!checked) {
            return state.filter(value => value !== inputValue);
         } else {
            return [...state, inputValue];
         }
      });
   }, []);

   return (
      <div className='flex flex-col gap-4 md:gap-6'>
         <form
            className='flex flex-col gap-4 md:gap-6 pt-2 md:pt-4'
            onSubmit={formSubmitHandler}
            encType='multipart/form-data'
         >
            <div>
               {tool?.logo && <Avatar src={tool.logo} sx={{ width: 80, height: 80 }} />}
               <label htmlFor='logo' className='text-xl block mb-2'>Logo</label>
               <input
                  id="logo"
                  name="logo"
                  type='file'
                  onChange={e => {
                     if (!e.currentTarget.files || e.currentTarget.files.length <= 0) return
                     // @ts-ignore
                     setData('logo', e.currentTarget.files[0])
                  }}
               />
               {errors.logo && <Alert severity="error">{errors.logo}</Alert>}
            </div>
            <div>
               <TextField
                  className='w-full'
                  id="name"
                  label="Name"
                  variant="outlined"
                  onChange={handleChange}
                  value={values.name}
                  error={errors.name !== undefined || false}
                  helperText={errors.name}
                  required
               />
            </div>
            <div>
               <FormControl>
                  <FormLabel id="is_opensource">Is Opensource</FormLabel>
                  <RadioGroup
                     row
                     aria-labelledby="is_opensoruce"
                     name="is_opensource"
                     onChange={radioButtonHandler}
                  >
                     <FormControlLabel
                        value="1"
                        control={
                           <Radio
                              checked={values.is_opensource !== undefined && values.is_opensource === 1}
                           />}
                        label="Yes"
                     />
                     <FormControlLabel
                        value="0"
                        control={
                           <Radio
                              checked={values.is_opensource !== undefined && values.is_opensource === 0}
                           />}
                        label="No"
                     />
                  </RadioGroup>
               </FormControl>
            </div>
            <div>
               <TextField
                  className='w-full'
                  id="website"
                  label="Website"
                  variant="outlined"
                  onChange={handleChange}
                  value={values.website}
                  error={errors.website !== undefined || false}
                  helperText={errors.website}
               />
            </div>
            <div>
               <TextField
                  className='w-full'
                  id="cost_structure"
                  label="Cost Structure"
                  variant="outlined"
                  onChange={handleChange}
                  value={values.cost_structure}
                  error={errors.cost_structure !== undefined || false}
                  helperText={errors.cost_structure}
                  multiline
                  rows={4}
               />
            </div>
            <div>
               <TextField
                  className='w-full'
                  id="fee_amount"
                  label="Fee Amount"
                  variant="outlined"
                  onChange={handleChange}
                  value={values.fee_amount}
                  error={errors.fee_amount !== undefined || false}
                  helperText={errors.fee_amount}
                  multiline
                  rows={4}
               />
            </div>
            <div>
               <TextField
                  className='w-full'
                  id="free_credit"
                  label="Free Credit"
                  variant="outlined"
                  onChange={handleChange}
                  value={values.free_credit}
                  error={errors.free_credit !== undefined || false}
                  helperText={errors.free_credit}
                  multiline
                  rows={4}
               />
            </div>
            <div>
               <TextField
                  className='w-full'
                  id="support_structure"
                  label="Support Structure"
                  variant="outlined"
                  onChange={handleChange}
                  value={values.support_structure}
                  error={errors.support_structure !== undefined || false}
                  helperText={errors.support_structure}
                  multiline
                  rows={4}
               />
            </div>
            <div>
               <TextField
                  className='w-full'
                  id="sgb_domain"
                  label="SGD Domain"
                  variant="outlined"
                  onChange={handleChange}
                  value={values.sgb_domain}
                  error={errors.sgb_domain !== undefined || false}
                  helperText={errors.sgb_domain}
                  multiline
                  rows={4}
               />
            </div>
            <div>
               <TextField
                  className='w-full'
                  id="ngo_ref"
                  label="NGO Ref"
                  variant="outlined"
                  onChange={handleChange}
                  value={values.ngo_ref}
                  error={errors.ngo_ref !== undefined || false}
                  helperText={errors.ngo_ref}
                  multiline
                  rows={4}
               />
            </div>
            <div>
               <TextField
                  className='w-full'
                  id="additional_comments"
                  label="Additional Comments"
                  variant="outlined"
                  onChange={handleChange}
                  value={values.additional_comments}
                  error={errors.additional_comments !== undefined || false}
                  helperText={errors.additional_comments}
                  multiline
                  rows={4}
               />
            </div>
         </form>
         {Array.isArray(categories) &&
            <CategorySelector
               categories={categories}
               onChange={handleCategoriesChange}
               selectedCategories={categoriesValues}
            />
         }
         <Button
            onClick={formSubmitHandler}
            variant='outlined'
         >{submitButtonText}</Button>
      </div>
   );
}
