'use client';

import React from 'react';
import { Button } from './ui/button';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { Trash2 } from 'lucide-react';

type buttonProps = {
  id: number;
  className?: string | undefined;
};

export default function DeleteButton({ id, className }: buttonProps) {
  const router = useRouter();

  const handleClick = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    await axios.delete(`${process.env.NEXT_PUBLIC_API_URL}/posts/${id}`);
    router.refresh();
  };

  return (
    <Button className={className} variant={'ghost'} onClick={handleClick}>
      <Trash2 />
    </Button>
  );
}
