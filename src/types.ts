export type Direction = 'UP' | 'DOWN';

export type SortOn = 'author' | 'created' | 'due';

export interface IFormValues {
  content: string;
  author: string;
  due: number;
}

export interface ITodo extends IFormValues {
  id: string;
  created: number;
}

export type UseListReturn<T> = {
  list: T[];
  actions: {
    add: (listItem: T) => void;
    remove: (listItem: T) => void;
    move: (listItem: T, direction: Direction) => void;
    sort: (field: SortOn) => void;
    update: (listItem: T) => void;
  };
};

export interface TodoListProps  {
  todolist: UseListReturn<ITodo>;
  completed?: UseListReturn<ITodo>;
  onAdded?: () => void;
}

interface IBaseTodoProps {
  todo: ITodo;
  isEditing: boolean;
  setIsEditing: (value: boolean) => void;
}

//editing the form
export interface ITodoContentProps extends Pick<IBaseTodoProps, "todo" | "isEditing"> {
  formValues: IFormValues;
  onChange: (updatedFields: Partial<IFormValues>) => void;
}

//buttons
export interface ITodoControlsProps extends IBaseTodoProps {
  onSave: () => void;        
  onRemove: () => void;      
  onMoveUp: () => void;      
  onMoveDown: () => void;    
  onCompleted?: () => void;  
}

export interface ITodoItemProps {
  todo: ITodo;
  onUpdate: (todo: ITodo) => void;
  onRemove: (todo: ITodo) => void;
  onMove: (todo: ITodo, direction: Direction) => void;
  onCompleted?: (todo: ITodo) => void;
}