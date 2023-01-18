import { IStore } from '@/types';
import getters from '@/store/getters';
import { todoItemMock, todoListMock } from '@tests/mocks';

describe('getters', () => {
  let state: IStore;
  beforeEach(() => {
    state = {
      todos: todoListMock,
      editingItem: todoItemMock,
    };
  });

  it('should return the list of todos', () => {
    const result = getters.todos(state);
    expect(result).toEqual(state.todos);
  });

  it('should return the editing item', () => {
    const result = getters.editingItem(state);
    expect(result).toEqual(state.editingItem);
  });
});
