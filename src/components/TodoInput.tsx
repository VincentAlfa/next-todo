'use client';

import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useRef, useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';

export default function TodoCard({ className }: { className?: string }) {
  const [loading, setIsLoading] = useState<boolean>(false);
  const inputTodoRef = useRef<HTMLInputElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const router = useRouter();
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    const todoInput = inputTodoRef.current?.value;
    await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/posts`, {
      todo: todoInput,
    });

    router.refresh();
    setIsLoading(false);
    formRef.current?.reset();
  };

  return (
    <div className={className}>
      <form className='mb-6 flex items-center space-x-2' onSubmit={handleSubmit} ref={formRef}>
        <Input type='text' placeholder='Add a new to-do' className='flex-1' ref={inputTodoRef} />
        <Button disabled={loading} type='submit'>
          Add
        </Button>
      </form>
    </div>
  );
}
