import { useEffect, useState } from 'react';
import type { Direction, ITodo, Sorting, UseListReturn } from '../types';



export const useList = <T extends ITodo>(key: string, initial: T[]): UseListReturn<T> => {
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

  const sort = (field: Sorting) => {
  const sortedList = [...list];

  sortedList.sort((a, b) => {
    if (typeof a[field] === "number" && typeof b[field] === "number") {
      return a[field] - b[field];
    }

    return (a[field] as string).localeCompare(b[field] as string);
  });

  setList(sortedList);
};


const update = (listItem: T) => {
  setList(list.map(t => t.id === listItem.id ? listItem : t));
};

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(list));
  }, [list]);

  return { list, actions: { add, remove, move, sort, update} };
};