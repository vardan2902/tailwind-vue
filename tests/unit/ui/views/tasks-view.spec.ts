import { shallowMount, VueWrapper } from '@vue/test-utils';
import TasksView from '@/views/TasksView.vue';

describe('TasksView', () => {
  let wrapper: VueWrapper;

  beforeEach(() => {
    wrapper = shallowMount(TasksView, {
      global: {
        stubs: {
          'todo-control': true,
          'todo-list': true,
        },
      },
    });
  });

  it('should render TodoControl component', () => {
    expect(wrapper.findComponent('todo-control-stub').exists()).toBe(true);
  });

  it('should render TodoList component', () => {
    expect(wrapper.findComponent('todo-list-stub').exists()).toBe(true);
  });
});
