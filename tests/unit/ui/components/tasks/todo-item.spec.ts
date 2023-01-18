import { createStore, Store } from 'vuex';
import { InputHTMLAttributes } from 'vue';

import { IStore } from '@/types';
import { mockedStore } from '@tests/mocks';
import { mount, VueWrapper } from '@vue/test-utils';
import TodoItem from '@/components/tasks/TodoItem.vue';
import { REMOVE_TODO_ITEM, SET_EDITING_ITEM } from '@/store/types/mutations';

describe('TodoItem', () => {
  let wrapper: VueWrapper<InstanceType<typeof TodoItem>>;
  let store: Store<IStore>;

  beforeEach(() => {
    store = createStore(mockedStore);
    store.dispatch = jest.fn();
    store.state.todos[0] = {
      id: 1,
      text: 'Test todo item',
      done: false,
    };
    wrapper = mount(TodoItem, {
      props: {
        item: store.state.todos[0],
      },
      global: {
        plugins: [store],
      },
    });
  });

  test('displays the todo item text', () => {
    const text = wrapper.find('p');
    expect(text.text()).toBe('Test todo item');
  });

  test('toggles the done state of the todo item when checkbox is clicked', async () => {
    const checkbox = wrapper.find("input[type='checkbox']");
    await checkbox.setValue(true);
    expect((checkbox.element as InputHTMLAttributes).checked).toBe(true);

    await checkbox.setValue(false);
    expect((checkbox.element as InputHTMLAttributes).checked).toBe(false);
    expect(store.dispatch).toBeCalledTimes(2);
  });

  test('displays the line-through class when done is true', async () => {
    const text = wrapper.find('p');
    expect(text.classes('line-through')).toBe(false);
    await wrapper.setProps({
      item: {
        id: 1,
        text: 'Test todo item',
        done: true,
      },
    });
    expect(text.classes('line-through')).toBe(true);
  });

  test('dispatches the SET_EDITING_ITEM action when edit button is clicked', async () => {
    const spy = jest.spyOn(store, 'dispatch');
    const editButton = wrapper.findAll('button')[0];
    await editButton.trigger('click');
    expect(spy).toHaveBeenCalledWith(SET_EDITING_ITEM, wrapper.props().item);
  });

  test('dispatches the REMOVE_TODO_ITEM action when remove button is clicked', async () => {
    const spy = jest.spyOn(store, 'dispatch');
    const removeButton = wrapper.findAll('button')[1];
    await removeButton.trigger('click');
    expect(spy).toHaveBeenCalledWith(REMOVE_TODO_ITEM, wrapper.props().item.id);
  });
});
