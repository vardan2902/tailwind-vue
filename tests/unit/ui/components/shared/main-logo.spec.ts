import { VueWrapper, shallowMount, RouterLinkStub } from '@vue/test-utils';
import MainLogo from '@/components/shared/MainLogo.vue';

describe('MainLogo', () => {
  let wrapper: VueWrapper<InstanceType<typeof MainLogo>>;

  beforeEach(() => {
    wrapper = shallowMount(MainLogo, {
      global: { stubs: { RouterLink: RouterLinkStub } },
    });
  });

  it('renders a logo with text "LOGO"', () => {
    const logoText = wrapper.findComponent(RouterLinkStub);
    expect(logoText.text()).toBe('LOGO');
  });

  it('has a router link that points to the root path', () => {
    const routerLink = wrapper.findComponent(RouterLinkStub);
    expect(routerLink.props().to).toBe('/');
  });
});
