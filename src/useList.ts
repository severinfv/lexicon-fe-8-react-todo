import { useEffect, useState } from 'react';
import type { Direction } from './types';

type UseListReturn<T> = {
  list: T[];
  actions: {
    add: (listItem: T) => void;
    remove: (listItem: T) => void;
    move: (listItem: T, direction: Direction) => void;
  };
};

export const useList = <T>(key: string, initial: T[]): UseListReturn<T> => {
  const [list, setList] = useState<T[]>(() => {
    const stored = localStorage.getItem(key);
    return stored ? (JSON.parse(stored) as T[]) : initial;
  });

  const add = (listItem: T) => setList([listItem, ...list]);
  const remove = (listItem: T) => setList(list.filter((el) => el !== listItem));

  const move = (listItem: T, direction: Direction) => {
    const index = list.findIndex((el) => el === listItem);
    if (index === -1) return;

    const targetIndex = direction === 'UP' ? index - 1 : index + 1;
    if (targetIndex < 0 || targetIndex === list.length) return;

    const updatedList = [...list];
    const temp = updatedList[index];
    updatedList[index] = updatedList[targetIndex];
    updatedList[targetIndex] = temp;

    setList(updatedList);
  };

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(list));
  }, [list]);

  return { list, actions: { add, remove, move } };
};