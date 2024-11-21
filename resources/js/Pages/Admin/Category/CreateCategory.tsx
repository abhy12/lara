import { Head, router } from '@inertiajs/react';
import { useCallback } from 'react';
import { route } from 'ziggy-js';
import Dashboard from '@/Components/dashboard/Dashboard';
import type { Category } from '@/util/props';
import CategoryForm from '@/Components/Category/CategoryForm';

interface Props {
   category?: Category
   parents?: Category[]
}

export default function Create({ category, parents }: Props) {
   const formSubmitHandler = useCallback((values: any) => {
      router.post(route('category.index'), values);
   }, []);

   return (
      <Dashboard>
         <Head title='Edit Category' />
         <h1 className='text-xl mb-4 md:mb-6'>Category</h1>
         <CategoryForm
            category={category}
            parentCategories={parents}
            onSubmit={formSubmitHandler}
            submitButtonText='Create New Category'
         />
      </Dashboard>
   )
}
