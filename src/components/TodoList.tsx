'use client';
import React from 'react';
import CheckboxButton from './CheckboxButton';
import DeleteButton from './DeleteButton';
import UpdateButton from './UpdateButton';

type TodoListProps = {
  className?: string | undefined;
  datas: {
    id: number;
    todo: string;
    completed: boolean;
  }[];
};

export default function TodoList({ className, datas }: TodoListProps) {
  return (
    <>
      <div className={className}>
        {datas.map((post) => {
          return (
            <div key={post.id} className='flex bg-gray-300 p-3 justify-center items-center gap-5'>
              <CheckboxButton id={post.id} completed={post.completed} />
              <h1>{post.todo}</h1>
              <div className='flex gap-0 p-0 m-0'>
                <UpdateButton buttonText='edit' headerText='Edit Todo' id={post.id} />
                <DeleteButton id={post.id} />
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
