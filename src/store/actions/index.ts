import {
  ADD_TODO_ITEM,
  EDIT_TODO_ITEM,
  REMOVE_TODO_ITEM,
  SET_EDITING_ITEM,
  TOGGLE_TODO_ITEM,
} from '@/store/types/mutations';
import { ActionContext } from 'vuex';
import { IStore, ITodoItem } from '@/types';

const addTodoItem = (
  context: ActionContext<IStore, IStore>,
  payload: string
): void => context.commit(ADD_TODO_ITEM, payload);

const editTodoItem = (
  context: ActionContext<IStore, IStore>,
  payload: ITodoItem
): void => context.commit(EDIT_TODO_ITEM, payload);

const removeTodoItem = (
  context: ActionContext<IStore, IStore>,
  payload: number
): void => context.commit(REMOVE_TODO_ITEM, payload);

const toggleTodoItem = (
  context: ActionContext<IStore, IStore>,
  payload: number
): void => context.commit(TOGGLE_TODO_ITEM, payload);

const setEditingItem = (
  context: ActionContext<IStore, IStore>,
  payload: ITodoItem
): void => context.commit(SET_EDITING_ITEM, payload);

export default {
  [ADD_TODO_ITEM]: addTodoItem,
  [EDIT_TODO_ITEM]: editTodoItem,
  [REMOVE_TODO_ITEM]: removeTodoItem,
  [TOGGLE_TODO_ITEM]: toggleTodoItem,
  [SET_EDITING_ITEM]: setEditingItem,
};
