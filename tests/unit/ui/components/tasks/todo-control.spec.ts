import { createStore, Store } from 'vuex';
import { shallowMount, VueWrapper } from '@vue/test-utils';

import { IStore } from '@/types';
import { mockedStore, todoItemMock } from '@tests/mocks';
import TodoControl from '@/components/tasks/TodoControl.vue';
import { ADD_TODO_ITEM, EDIT_TODO_ITEM } from '@/store/types/mutations';

describe('TodoControl', () => {
  let wrapper: VueWrapper<InstanceType<typeof TodoControl>>;
  let store: Store<IStore>;

  beforeEach(() => {
    store = createStore(mockedStore);
    store.dispatch = jest.fn();
    wrapper = shallowMount(TodoControl, {
      global: {
        plugins: [store],
      },
    });
  });

  it('should render input element', () => {
    expect(wrapper.find('input').exists()).toBe(true);
  });

  it('should render button element', () => {
    expect(wrapper.find('button').exists()).toBe(true);
  });

  it('should render button element with "Add"', () => {
    expect(wrapper.find('button').text()).toBe('Add');
  });

  it('should call add when clicking on Add button', async () => {
    await wrapper.find('button').trigger('click');
    expect(store.dispatch).toHaveBeenCalledWith(ADD_TODO_ITEM, '');
  });

  it('should render button element with "Save"', () => {
    store.state.editingItem = todoItemMock;
    wrapper = shallowMount(TodoControl, {
      global: {
        plugins: [store],
      },
    });
    expect(wrapper.find('button').text()).toBe('Save');
  });

  it('should call edit when clicking on Save button', async () => {
    store.state.editingItem = todoItemMock;
    wrapper = shallowMount(TodoControl, {
      global: {
        plugins: [store],
      },
    });
    expect(wrapper.vm.$refs.inputRef.value).toBe(todoItemMock.text);
    await wrapper.find('button').trigger('click');
    expect(store.dispatch).toHaveBeenCalledWith(EDIT_TODO_ITEM, todoItemMock);
  });
});
