import { shallowMount, VueWrapper } from '@vue/test-utils';
import HeaderLayout from '@/components/shared/HeaderLayout.vue';
import { MainLogoStub, NavLinksStub } from '@tests/stubs/shared';
describe('HeaderLayout', () => {
  let wrapper: VueWrapper<InstanceType<typeof HeaderLayout>>;

  beforeEach(() => {
    wrapper = shallowMount(HeaderLayout, {
      stubs: {
        MainLogo: MainLogoStub,
        NavLinks: NavLinksStub,
      },
    });
  });

  it('should render the main logo component', () => {
    expect(wrapper.find('main-logo-stub').exists()).toBe(true);
  });

  it('should render the nav links component', () => {
    expect(wrapper.find('nav-links-stub').exists()).toBe(true);
  });

  it('should have a class of "flex justify-center w-full h-[65px] bg-main-blue"', () => {
    expect(wrapper.attributes().class).toContain(
      'flex justify-center w-full h-[65px] bg-main-blue'
    );
  });
});
