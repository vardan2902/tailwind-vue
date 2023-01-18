import { IStore } from '@/types';

export const todoItemMock = { id: 2, text: 'Todo 2', done: true };

export const todoListMock = [
  { id: 1, text: 'Todo 1', done: false },
  { id: 2, text: 'Todo 2', done: true },
  { id: 3, text: 'Todo 3', done: false },
];

export const mockedState = {
  todos: [],
  editingItem: null,
};

export const mockedStore = {
  state: mockedState,
  getters: {
    todos: (state: IStore) => state.todos,
    editingItem: (state: IStore) => state.editingItem,
  },
  actions: {},
  mutations: {},
};

export const mockedContext = {
  state: mockedState,
  rootState: mockedState,
  commit: jest.fn(),
  getters: jest.fn(),
  dispatch: jest.fn(),
  rootGetters: jest.fn(),
};
