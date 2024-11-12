import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { useState } from 'react';
import { useForm, Head, router } from '@inertiajs/react';
import PrimaryButton from '@/Components/PrimaryButton';

export default function Create() {
    const [values, setValues] = useState({
        title: '',
        content: '',
    });

    function handleChange(e) {
        const key = e.target.id;
        const value = e.target.value
        setValues(values => ({
            ...values,
            [key]: value,
        }))
    }

    function formSubmitHandler( e ) {
        e.preventDefault();
        router.post( '/posts', values );
    }

    return(
        <AuthenticatedLayout>
            <Head title='Add Post' />

            <div className="max-w-2xl mx-auto p-4 sm:p-6 lg:p-8">
                <h1 className='mb-2'>Add Post</h1>
                <form onSubmit={formSubmitHandler}>
                    <div className='mb-4'>
                        <label className='block' htmlFor="title">Title</label>
                        <input className='w-full' type='text' id='title' onChange={handleChange} value={values.title} />
                    </div>
                    <div>
                        <label className='block' htmlFor="Content">Content</label>
                        <textarea className='w-full' type='text' id='content' onChange={handleChange} value={values.content} />
                    </div>
                    <PrimaryButton type="submit">Submit</PrimaryButton>
                </form>
            </div>
        </AuthenticatedLayout>
    )
}
