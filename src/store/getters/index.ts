import { IStore, ITodoItem, Nullable } from '@/types';

const todos = (state: IStore): Array<ITodoItem> => state.todos;
const editingItem = (state: IStore): Nullable<ITodoItem> => state.editingItem;

export default {
  todos,
  editingItem,
};
