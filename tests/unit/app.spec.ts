import { shallowMount, VueWrapper } from '@vue/test-utils';
import App from '@/App.vue';

describe('App', () => {
  let wrapper: VueWrapper;

  beforeAll(() => {
    wrapper = shallowMount(App, {
      global: {
        stubs: {
          'header-layout': true,
          'router-view': true,
        },
      },
    });
  });

  it('should render the header layout', () => {
    expect(wrapper.find('header-layout-stub').exists()).toBe(true);
  });

  it('should render the router-view', () => {
    expect(wrapper.find('router-view-stub').exists()).toBe(true);
  });
});
