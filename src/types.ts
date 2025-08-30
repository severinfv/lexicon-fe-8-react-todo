export type Direction = 'UP' | 'DOWN';

export type Sorting = 'author' | 'created' | 'due';

export interface ITodo {
  id: string;
  created: number;
  due: number;
  author: string;
  content: string;
}

export type UseListReturn<T> = {
  list: T[];
  actions: {
    add: (listItem: T) => void;
    remove: (listItem: T) => void;
    move: (listItem: T, direction: Direction) => void;
    sort: (field: Sorting) => void;
  };
};

export interface ITakeTodoList {
  todolist: UseListReturn<ITodo>;
  archive?: UseListReturn<ITodo>;
}