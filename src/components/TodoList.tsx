'use client';
import React, { useOptimistic } from 'react';
import CheckboxButton from './CheckboxButton';
import DeleteButton from './DeleteButton';
import UpdateButton from './UpdateButton';
import { Todo } from '@/lib/types';
import { cn } from '@/lib/utils';

type TodoListProps = {
  className?: string | undefined;
  datas: Todo[];
};

export default function TodoList({ className, datas }: TodoListProps) {
  const [optimisticTodo, addOptimisticTodo] = useOptimistic(datas, (state, newTodo: Todo) => [
    ...state,
    newTodo,
  ]);
  return (
    <>
      <div className={className}>
        {optimisticTodo.map((post) => {
          return (
            <div key={post.id} className='flex bg-gray-300 p-3 justify-center items-center gap-5'>
              <CheckboxButton data={post} onCheked={addOptimisticTodo} />
              <h1 className={cn('no-underline', { 'line-through': post.completed === true })}>
                {post.todo}
              </h1>
              <div className='flex gap-0 p-0 m-0'>
                <UpdateButton headerText='Edit Todo' id={post.id} todo={post.todo} />
                <DeleteButton id={post.id} />
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
