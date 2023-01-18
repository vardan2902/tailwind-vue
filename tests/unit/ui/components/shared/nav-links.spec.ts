import { RouterLinkStub, shallowMount, VueWrapper } from '@vue/test-utils';
import NavLinks from '@/components/shared/NavLinks.vue';

describe('NavLinks', () => {
  let wrapper: VueWrapper<InstanceType<typeof NavLinks>>;

  beforeEach(() => {
    wrapper = shallowMount(NavLinks, {
      global: { stubs: { RouterLink: RouterLinkStub } },
    });
  });

  it('renders the correct number of router-links', () => {
    expect(wrapper.findAllComponents(RouterLinkStub).length).toEqual(3);
  });

  it('renders the correct router-link path for "My Tasks"', () => {
    const myTasksLink = wrapper.findAllComponents(RouterLinkStub)[0];
    expect(myTasksLink.props().to).toEqual('/');
  });

  it('renders the correct router-link path for "My Profile"', () => {
    const myProfileLink = wrapper.findAllComponents(RouterLinkStub)[1];
    expect(myProfileLink.props().to).toEqual('/profile');
  });

  it('renders the correct router-link path for avatar icon', () => {
    const myProfileLink = wrapper.findAllComponents(RouterLinkStub)[2];
    expect(myProfileLink.props().to).toEqual('/profile');
  });
});
