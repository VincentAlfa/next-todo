import TodoInput from '@/components/TodoInput';
import TodoList from '@/components/TodoList';
import { post } from '@prisma/client';
import axios from 'axios';
import { Suspense } from 'react';

export const dynamic = 'force-dynamic';

export default async function Home() {
  const fetch = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/posts`);
  const posts: post[] = await fetch.data.data;
  return (
    <>
      <div className='min-h-dvh flex flex-col items-center justify-center bg-[#fdfdfd]'>
        <h1 className='text-4xl font-bold mb-6'>Next To-Do</h1>
        <TodoInput className='max-w-md mx-auto pt-2' />
        <Suspense fallback={<h1>Loading...</h1>}>
          <TodoList className='flex flex-col w-72 gap-2' datas={posts} />
        </Suspense>
      </div>
    </>
  );
}
