import { useEffect, useRef, useState, type FormEventHandler } from 'react';
import { useList } from '../useList';
import type { ITodo } from '../types';
import { Todo } from './todo';
import {v4 as uuidv4} from 'uuid';

export const App = () => {
  const todos = useList<ITodo>('todos', []);

  const inputRef = useRef<HTMLInputElement>(null);

  const handleOnSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    const newTodo: ITodo = {
      id: uuidv4(),
      content: inputRef.current!.value,
    };

    console.log('Submitted', newTodo);
    todos.actions.add(newTodo);
    inputRef.current!.value = '';
  };

  useEffect(() => {
    console.log('App was rendered');
  });

  return (
    <>
      <form className="new-todo-form" onSubmit={handleOnSubmit}>
        <div>
          <label htmlFor="">Task name:</label>
          
          <input ref={inputRef} type="text" />

          <button type="submit">Save</button>
        </div>
      </form>
      <section className="todo-list">
        {todos.list.length === 0 ? (
          <p>No todos...</p>
        ) : (
          todos.list.map((todo) => (
            <Todo key={todo.id} onMove={todos.actions.move} onRemove={todos.actions.remove} todo={todo} />
          ))
        )}
      </section>
    </>
  );
};

export default App;