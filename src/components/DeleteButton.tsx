'use client';

import React, { useState } from 'react';
import { Button } from './ui/button';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { LoaderCircle, Trash2 } from 'lucide-react';

type buttonProps = {
  id: number;
  className?: string | undefined;
};

export default function DeleteButton({ id, className }: buttonProps) {
  const [loading, setIsLoading] = useState<boolean>(false);
  const router = useRouter();

  const handleClick = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setIsLoading(true);
    await axios.delete(`${process.env.NEXT_PUBLIC_API_URL}/posts/${id}`);
    router.refresh();
    setIsLoading(false);
  };

  return (
    <Button className={className} variant={'ghost'} onClick={handleClick}>
      {loading ? <LoaderCircle className='animate-spin' /> : <Trash2 />}
    </Button>
  );
}
