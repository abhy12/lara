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

export default function Edit({ category, parents }: Props) {
   const formSubmitHandler = useCallback((values: any) => {
      router.put(route('category.update', { id: category?.id }), values);
   }, []);

   return (
      <Dashboard>
         <Head title='Edit Category' />
         <h1 className='text-xl mb-4 md:mb-6'>Category</h1>
         <CategoryForm
            category={category}
            parentCategories={parents}
            onSubmit={formSubmitHandler}
         />
      </Dashboard>
   )
}
