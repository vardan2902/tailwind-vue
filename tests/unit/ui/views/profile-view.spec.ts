import { shallowMount, VueWrapper } from '@vue/test-utils';
import ProfileView from '@/views/ProfileView.vue';

describe('ProfileView', () => {
  let wrapper: VueWrapper;

  beforeEach(() => {
    wrapper = shallowMount(ProfileView);
  });

  it('should render h1 with text "This is the profile page"', () => {
    expect(wrapper.find('h1').text()).toBe('This is the profile page');
  });
});
