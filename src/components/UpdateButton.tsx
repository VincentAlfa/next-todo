'use client';

import React, { useRef } from 'react';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { PencilLine } from 'lucide-react';

type DialogEditProps = {
  id?: number;
  buttonText: string;
  headerText: string;
  className?: string;
};

export default function UpdateButton({ id, buttonText, headerText, className }: DialogEditProps) {
  const router = useRouter();
  const todoRef = useRef<HTMLInputElement>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const todoValue = todoRef.current?.value;
    await axios.patch(`${process.env.NEXT_PUBLIC_API_URL}/posts/${id}`, {
      todo: todoValue,
    });
    router.refresh();
  };
  return (
    <>
      <Dialog>
        <DialogTrigger asChild>
          <Button variant={'ghost'}>
            <PencilLine />
          </Button>
        </DialogTrigger>
        <DialogContent className='sm:max-w-[425px]'>
          <DialogHeader>
            <DialogTitle className='text-center'>{headerText}</DialogTitle>
          </DialogHeader>
          <form className='grid gap-4 py-4' onSubmit={handleSubmit}>
            <div className='grid grid-cols-4 items-center gap-4'>
              <Label htmlFor='title' className='text-right'>
                Todo
              </Label>
              <Input ref={todoRef} id='title' className='col-span-3' required />
            </div>
            <DialogFooter>
              <DialogClose asChild>
                <Button className='h-10 w-24' type='submit'>
                  Post
                </Button>
              </DialogClose>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
}
