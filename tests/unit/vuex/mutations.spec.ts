import { IStore } from '@/types';
import {
  INIT,
  ADD_TODO_ITEM,
  EDIT_TODO_ITEM,
  REMOVE_TODO_ITEM,
  TOGGLE_TODO_ITEM,
  SET_EDITING_ITEM,
} from '@/store/types/mutations';
import mutations from '@/store/mutations';
import { mockedState } from '@tests/mocks';

describe('mutations', () => {
  let state: IStore;

  beforeEach(() => {
    state = mockedState;
  });

  describe('addTodoItem', () => {
    it('should not add a new todo item if no text is provided', () => {
      mutations[ADD_TODO_ITEM](state, '');
      expect(state.todos).toEqual([]);
    });

    it('should add a new todo item with the given text', () => {
      mutations[ADD_TODO_ITEM](state, 'Test Todo');
      expect(state.todos).toEqual([{ text: 'Test Todo', done: false, id: 1 }]);
    });

    it('should add a new todo item with an incremented id', () => {
      state.todos = [{ text: 'Test Todo 1', done: false, id: 1 }];
      mutations[ADD_TODO_ITEM](state, 'Test Todo 2');
      expect(state.todos).toEqual([
        { text: 'Test Todo 1', done: false, id: 1 },
        { text: 'Test Todo 2', done: false, id: 2 },
      ]);
    });
  });

  describe('removeTodoItem', () => {
    it('should remove a todo item', () => {
      state.todos = [{ text: 'Test Todo', done: false, id: 1 }];
      mutations[REMOVE_TODO_ITEM](state, 1);
      expect(state.todos.length).toBe(0);
    });

    it('should stop if todo was not found by id', () => {
      state.todos = [{ text: 'Test Todo', done: false, id: 1 }];
      mutations[REMOVE_TODO_ITEM](state, 2);
      expect(state.todos.length).toBe(1);
    });
  });

  describe('editTodoItem', () => {
    it('should edit a todo item', () => {
      state.todos = [{ text: 'Test Todo', done: false, id: 1 }];
      mutations[EDIT_TODO_ITEM](state, {
        id: 1,
        text: 'Test Todo Edited',
        done: false,
      });
      expect(state.todos[0].text).toBe('Test Todo Edited');
      expect(state.editingItem).toBe(null);
    });

    it('should not edit if todo was not found', () => {
      state.todos = [{ text: 'Test Todo', done: false, id: 1 }];
      mutations[EDIT_TODO_ITEM](state, {
        id: 4,
        text: 'Test Todo Edited',
        done: false,
      });
      expect(state.todos[0].text).toBe('Test Todo');
    });
  });

  describe('toggleTodoItem', () => {
    it('should toggle a todo item', () => {
      state.todos = [{ text: 'Test Todo', done: false, id: 1 }];
      mutations[TOGGLE_TODO_ITEM](state, 1);
      expect(state.todos[0].done).toBe(true);
    });

    it('should do nothing if not found', () => {
      state.todos = [{ text: 'Test Todo', done: false, id: 1 }];
      mutations[TOGGLE_TODO_ITEM](state, 3);
      expect(state.todos[0].done).toBe(false);
    });
  });

  it('should initialize the store', () => {
    localStorage.setItem(
      'STORAGE_TODO_LIST',
      JSON.stringify([{ text: 'Test Todo', done: false, id: 1 }])
    );
    mutations[INIT](state);
    expect(state.todos.length).toBe(1);
  });

  it('should set the editing item', () => {
    const editingItem = { text: 'Test Todo', done: false, id: 1 };
    mutations[SET_EDITING_ITEM](state, editingItem);
    expect(state.editingItem).toEqual(editingItem);
  });
});
