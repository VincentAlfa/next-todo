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
            <div key={post.id} className='flex bg-gray-300 p-3 justify-center items-center'>
              <CheckboxButton id={post.id} completed={post.completed} />
              <h1>{post.todo}</h1>
              <UpdateButton buttonText='edit' headerText='Edit Todo' id={post.id}/>
              <DeleteButton id={post.id} />
            </div>
          );
        })}
      </div>
    </>
  );
}
