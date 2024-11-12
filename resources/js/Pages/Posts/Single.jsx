import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

export default function Index({ post }) {
    return(
        <AuthenticatedLayout>
            <Head title='Posts' />

            <div className="max-w-2xl mx-auto p-4 sm:p-6 lg:p-8">
                <div
                    className='p-3 mb-2 rounded bg-white border'
                >
                    <h3>{post.title}</h3>
                    <p>{post.content}</p>
                </div>
            </div>
        </AuthenticatedLayout>
    )
}
