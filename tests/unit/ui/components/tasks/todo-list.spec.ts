import { mount, VueWrapper } from '@vue/test-utils';
import { createStore, Store } from 'vuex';

import { IStore } from '@/types';
import TodoList from '@/components/tasks/TodoList.vue';
import { mockedState, mockedStore, todoListMock } from '@tests/mocks';

describe('TodoList', () => {
  let wrapper: VueWrapper<InstanceType<typeof TodoList>>;
  let store: Store<IStore>;

  beforeEach(() => {
    store = createStore({
      ...mockedStore,
      state: {
        ...mockedState,
        todos: todoListMock,
      },
    });
    wrapper = mount(TodoList, {
      global: {
        plugins: [store],
        stubs: {
          'todo-item': true,
        },
      },
    });
  });

  it('should render all todo items', () => {
    expect(wrapper.findAllComponents('todo-item-stub').length).toBe(3);
  });

  it('should call store getters todos', () => {
    expect(store.getters.todos).toStrictEqual(todoListMock);
  });
});
