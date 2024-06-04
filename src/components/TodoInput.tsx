'use client';

import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useRef } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';

export default function TodoCard({className} : {className?: string}) {
  const inputTodoRef = useRef<HTMLInputElement>(null);
  const router = useRouter()
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const todoInput = inputTodoRef.current?.value;
    await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/posts`, {
      todo: todoInput,
    });

    router.refresh()
  };

  return (
    <div className={className}>
      <form className='mb-6 flex items-center space-x-2' onSubmit={handleSubmit}>
        <Input type='text' placeholder='Add a new to-do' className='flex-1' ref={inputTodoRef} />
        <Button type='submit'>Add</Button>
      </form>
    </div>
  );
}
