'use client';

import axios from 'axios';
import { Checkbox } from './ui/checkbox';
import { CheckedState } from '@radix-ui/react-checkbox';
import { useRouter } from 'next/navigation';
import { Todo } from '@/lib/types';

type CheckBoxButtonProps = {
  data: Todo;
  onCheked: (action: Todo) => void;
};

export default function CheckboxButton({ data, onCheked }: CheckBoxButtonProps) {
  const router = useRouter();
  const handleChange = async (checked: CheckedState) => {
    onCheked({ ...data, completed: checked as boolean });
    await axios.patch(`${process.env.NEXT_PUBLIC_API_URL}/posts/${data.id}`, {
      completed: checked,
    });
    router.refresh();
  };

  return <Checkbox checked={data.completed} onCheckedChange={handleChange} />;
}
