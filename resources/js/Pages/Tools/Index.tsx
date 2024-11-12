import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link } from '@inertiajs/react';
import PrimaryButton from '@/Components/PrimaryButton';

export default function Index() {
    return(
        <AuthenticatedLayout>
            <Head title='Posts' />

            <div className="max-w-2xl mx-auto p-4 sm:p-6 lg:p-8">
                <Link
                    href='/posts/create'
                    className='mb-4 inline-block'
                >
                    <PrimaryButton>Add New Post</PrimaryButton>
                </Link>
                {posts.map( post =>
                    <div
                        key={post.id}
                        className='p-3 mb-2 rounded bg-white border'
                    >
                        <h3>{post.title}</h3>
                        <p>{post.content}</p>
                        <Link href={`/posts/${post.id}/edit`}>
                            <PrimaryButton>Edit</PrimaryButton>
                        </Link>
                    </div>
                )}
            </div>
        </AuthenticatedLayout>
    )
}
