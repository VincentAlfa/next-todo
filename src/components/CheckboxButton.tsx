'use client';

import axios from 'axios';
import { Checkbox } from './ui/checkbox';
import { CheckedState } from '@radix-ui/react-checkbox';
import { useRouter } from 'next/navigation';

export default function CheckboxButton({ id, completed }: { id: number; completed: boolean }) {
  const router = useRouter();
  const handleChange = async (checked: CheckedState) => {
    await axios.patch(`${process.env.NEXT_PUBLIC_API_URL}/posts/${id}`, {
      completed: checked,
    });
    router.refresh();
  };

  return <Checkbox checked={completed} onCheckedChange={handleChange} />;
}
