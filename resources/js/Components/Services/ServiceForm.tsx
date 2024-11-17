import { useForm, usePage } from '@inertiajs/react';
import type { ServiceProps } from './Service';
import { useState, useCallback } from 'react';
import type { SyntheticEvent } from 'react';
import ToolSelector from '../Tools/ToolSelector';
import type { ToolsProps } from '@/util/props';
import type { Category } from '@/util/props';
import CategorySelector from '@/Components/Category/CategorySelector';
import { Button, TextField } from '@mui/material';

interface Props {
   children?: any
   submitButtonText?: string
   service?: ServiceProps
   onSubmit?: CallableFunction
   tools?: ToolsProps[]
   selectedTools?: number[]
   categories?: Category[]
   selectedCategories?: number[]
}

export default function ServiceForm({
   submitButtonText = 'submit',
   onSubmit,
   service,
   tools,
   selectedTools,
   categories,
   selectedCategories,
}: Props) {
   const [toolValues, setToolValues] = useState<number[]>(selectedTools || []);
   const { props: { errors } } = usePage();
   const [categoriesValues, setCategoriesValues] = useState<number[]>(selectedCategories || []);
   const { data: values, setData } = useForm({
      name: service?.name || '',
      description: service?.description || '',
      services_provided: service?.services_provided || '',
      services_cost: service?.services_cost || '',
      product_offered: service?.product_offered || '',
      product_cost: service?.product_cost || '',
      functional_expertise: service?.functional_expertise || '',
      sgb_domain: service?.sgb_domain || '',
      website: service?.website || '',
      point_contact: service?.point_contact || '',
      designation: service?.designation || '',
      email: service?.email || '',
      contact_number: service?.contact_number || '',
   });

   const toolChangeHandler = useCallback((e: SyntheticEvent<HTMLInputElement>) => {
      const isChecked = e.currentTarget.checked;
      const inputValue = +(e.currentTarget.value);

      setToolValues(state => {
         if (!isChecked) {
            return state.filter(value => value !== inputValue);
         } else {
            return [...state, inputValue];
         }
      });
   }, []);

   function handleChange(e: SyntheticEvent<HTMLInputElement | HTMLTextAreaElement>) {
      const target = e.currentTarget;
      const key = target.id;
      const value = target.value
      setData(values => ({
         ...values,
         [key]: value,
      }))
   }

   function formSubmitHandler(e: SyntheticEvent) {
      e.preventDefault();
      if (typeof onSubmit === 'function') onSubmit({ ...values, tools: toolValues, categories: categoriesValues });
   }

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
         <form onSubmit={formSubmitHandler} className='flex flex-col gap-4 md:gap-6 pt-2 md:pt-4'>
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
               <TextField
                  className='w-full'
                  id="description"
                  label="Description"
                  variant="outlined"
                  onChange={handleChange}
                  value={values.description}
                  error={errors.description !== undefined || false}
                  helperText={errors.description}
               />
            </div>
            <div>
               <TextField
                  className='w-full'
                  id="services_provided"
                  label="Service Provided"
                  variant="outlined"
                  onChange={handleChange}
                  value={values.services_provided}
                  error={errors.services_provided !== undefined || false}
                  helperText={errors.services_provided}
                  multiline
                  rows={4}
               />
            </div>
            <div>
               <TextField
                  className='w-full'
                  id="services_cost"
                  label="Service Cost"
                  variant="outlined"
                  onChange={handleChange}
                  value={values.services_cost}
                  error={errors.services_cost !== undefined || false}
                  helperText={errors.services_cost}
                  multiline
                  rows={4}
               />
            </div>
            <div>
               <TextField
                  className='w-full'
                  id="product_offered"
                  label="Product Offered"
                  variant="outlined"
                  onChange={handleChange}
                  value={values.product_offered}
                  error={errors.product_offered !== undefined || false}
                  helperText={errors.product_offered}
                  multiline
                  rows={4}
               />
            </div>
            <div>
               <TextField
                  className='w-full'
                  id="product_cost"
                  label="Product Cost"
                  variant="outlined"
                  onChange={handleChange}
                  value={values.product_cost}
                  error={errors.product_cost !== undefined || false}
                  helperText={errors.product_cost}
                  multiline
                  rows={4}
               />
            </div>
            <div>
               <TextField
                  className='w-full'
                  id="functional_expertise"
                  label="Functional Expertise"
                  variant="outlined"
                  onChange={handleChange}
                  value={values.functional_expertise}
                  error={errors.functional_expertise !== undefined || false}
                  helperText={errors.functional_expertise}
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
                  id="website"
                  label="Website"
                  variant="outlined"
                  onChange={handleChange}
                  value={values.website}
                  error={errors.website !== undefined || false}
                  helperText={errors.website}
                  multiline
                  rows={4}
               />
            </div>
            <div>
               <TextField
                  className='w-full'
                  id="point_contact"
                  label="Point Contact"
                  variant="outlined"
                  onChange={handleChange}
                  value={values.point_contact}
                  error={errors.point_contact !== undefined || false}
                  helperText={errors.point_contact}
                  multiline
                  rows={4}
               />
            </div>
            <div>
               <TextField
                  className='w-full'
                  id="designation"
                  label="Designation"
                  variant="outlined"
                  onChange={handleChange}
                  value={values.designation}
                  error={errors.designation !== undefined || false}
                  helperText={errors.designation}
                  multiline
                  rows={4}
               />
            </div>
            <div>
               <TextField
                  className='w-full'
                  id="email"
                  label="Email"
                  variant="outlined"
                  onChange={handleChange}
                  value={values.email}
                  error={errors.email !== undefined || false}
                  helperText={errors.email}
                  multiline
                  rows={4}
               />
            </div>
            <div>
               <TextField
                  className='w-full'
                  id="contact_number"
                  label="Contact Number"
                  variant="outlined"
                  onChange={handleChange}
                  value={values.contact_number}
                  error={errors.contact_number !== undefined || false}
                  helperText={errors.contact_number}
                  multiline
                  rows={4}
               />
            </div>
            {tools && <ToolSelector tools={tools} onChange={toolChangeHandler} selectedTools={selectedTools} />}
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
