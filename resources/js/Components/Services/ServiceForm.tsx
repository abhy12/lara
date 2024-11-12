import { useForm } from '@inertiajs/react';
import PrimaryButton from '@/Components/PrimaryButton';
import type { ServiceProps } from './Service';
import { FormEvent, useState, useCallback, useEffect } from 'react';
import type { SyntheticEvent } from 'react';
import ToolSelector from '../Tools/ToolSelector';
import type { ToolsProps } from '../Tools/Tool';
import type { Category } from '@/util/props';
import CategorySelector from '@/Components/Category/CategorySelector';

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

   function formSubmitHandler(e: FormEvent<HTMLFormElement>) {
      e.preventDefault();
      console.log(categoriesValues);
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

   useEffect(() => {
      console.log(selectedCategories);
   }, [selectedCategories]);

   return (
      <div>
         {Array.isArray(categories) &&
            <CategorySelector
               categories={categories}
               onChange={handleCategoriesChange}
               selectedCategories={categoriesValues}
            />
         }
         <form onSubmit={formSubmitHandler} className='pt-4'>
            <div className='mb-4'>
               <label className='block' htmlFor="name">Name</label>
               <input className='w-full' type='text' id='name' onChange={handleChange} value={values.name} />
            </div>
            <div>
               <label className='block' htmlFor="description">Description</label>
               <textarea className='w-full' id='description' onChange={handleChange} value={values.description} />
            </div>
            <div>
               <label className='block' htmlFor="services_provided">Service Provided</label>
               <textarea className='w-full' id='services_provided' onChange={handleChange} value={values.services_provided} />
            </div>
            <div>
               <label className='block' htmlFor="services_cost">Service Cost</label>
               <textarea className='w-full' id='services_cost' onChange={handleChange} value={values.services_cost} />
            </div>
            <div>
               <label className='block' htmlFor="product_offered">Product Offered</label>
               <textarea className='w-full' id='product_offered' onChange={handleChange} value={values.product_offered} />
            </div>
            <div>
               <label className='block' htmlFor="product_cost">Product Cost</label>
               <textarea className='w-full' id='product_cost' onChange={handleChange} value={values.product_cost} />
            </div>
            <div>
               <label className='block' htmlFor="functional_expertise">Functional Expertise</label>
               <textarea className='w-full' id='functional_expertise' onChange={handleChange} value={values.functional_expertise} />
            </div>
            <div>
               <label className='block' htmlFor="sgb_domain">SGD Domain</label>
               <textarea className='w-full' id='sgb_domain' onChange={handleChange} value={values.sgb_domain} />
            </div>
            <div>
               <label className='block' htmlFor="website">Website</label>
               <input className='w-full' id='website' onChange={handleChange} value={values.website} />
            </div>
            <div>
               <label className='block' htmlFor="point_contact">Point Contact</label>
               <textarea className='w-full' id='point_contact' onChange={handleChange} value={values.point_contact} />
            </div>
            <div>
               <label className='block' htmlFor="designation">Designation</label>
               <input className='w-full' id='designation' onChange={handleChange} value={values.designation} />
            </div>
            <div>
               <label className='block' htmlFor="email">Email</label>
               <input type='email' className='w-full' id='email' onChange={handleChange} value={values.email} />
            </div>
            <div>
               <label className='block' htmlFor="contact_number">Contact Number</label>
               <input className='w-full' id='contact_number' onChange={handleChange} value={values.contact_number} />
            </div>
            {tools && <ToolSelector tools={tools} onChange={toolChangeHandler} selectedTools={selectedTools} />}
            <PrimaryButton className='mt-4' type="submit">{submitButtonText}</PrimaryButton>
         </form>
      </div>
   );
}
