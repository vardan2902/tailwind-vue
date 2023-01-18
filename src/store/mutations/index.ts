import {
  INIT,
  ADD_TODO_ITEM,
  EDIT_TODO_ITEM,
  REMOVE_TODO_ITEM,
  TOGGLE_TODO_ITEM,
  SET_EDITING_ITEM,
} from '@/store/types/mutations';
import { IStore, ITodoItem } from '@/types';
import { STORAGE_TODO_LIST } from '@/helpers/constants';

const addTodoItem = (state: IStore, payload: string) => {
  if (!payload) return;

  const item = { text: payload, done: false, id: 1 };

  if (state.todos.length) {
    const lastItem = state.todos.at(-1);
    if (lastItem) item.id = lastItem.id + 1;
  }

  state.todos.push(item);
  state.editingItem = null;
  localStorage.setItem(STORAGE_TODO_LIST, JSON.stringify(state.todos));
};

const removeTodoItem = (state: IStore, payload: number) => {
  const found = state.todos.findIndex((item: ITodoItem) => item.id === payload);
  if (found === -1) return;

  state.todos.splice(found, 1);
  state.editingItem = null;
  localStorage.setItem(STORAGE_TODO_LIST, JSON.stringify(state.todos));
};

const editTodoItem = (state: IStore, payload: ITodoItem) => {
  const found = state.todos.findIndex(
    (item: ITodoItem) => item.id === payload.id
  );
  if (found === -1) return;

  state.todos[found].text = payload.text;
  state.editingItem = null;
  localStorage.setItem(STORAGE_TODO_LIST, JSON.stringify(state.todos));
};

const toggleTodoItem = (state: IStore, payload: number) => {
  const found = state.todos.findIndex((item: ITodoItem) => item.id === payload);
  if (found === -1) return;

  state.todos[found].done = !state.todos[found].done;
  localStorage.setItem(STORAGE_TODO_LIST, JSON.stringify(state.todos));
};

const initialiseStore = (state: IStore) => {
  const persistedList = localStorage.getItem(STORAGE_TODO_LIST);
  if (!persistedList) return;

  state.todos = JSON.parse(persistedList);
};

const setEditingItem = (state: IStore, payload: ITodoItem) => {
  state.editingItem = payload;
};

export default {
  [INIT]: initialiseStore,
  [ADD_TODO_ITEM]: addTodoItem,
  [EDIT_TODO_ITEM]: editTodoItem,
  [REMOVE_TODO_ITEM]: removeTodoItem,
  [TOGGLE_TODO_ITEM]: toggleTodoItem,
  [SET_EDITING_ITEM]: setEditingItem,
};
