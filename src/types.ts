export type Direction = 'UP' | 'DOWN';

export type Sorting = 'author' | 'created' | 'due';

export interface ITodo {
  id: string;
  created: number;
  due: number;
  author: string;
  content: string;
}