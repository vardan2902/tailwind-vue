export type Nullable<T> = T | null;

export interface IStore {
  todos: Array<ITodoItem>;
  editingItem: Nullable<ITodoItem>;
}

export interface ITodoItem {
  id: number;
  text: string;
  done: boolean;
}
