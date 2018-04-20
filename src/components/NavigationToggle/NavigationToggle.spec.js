import { mount } from '@vue/test-utils';

import NavigationToggle from './NavigationToggle';

describe('NavigationToggle ', () => {
  it('isVueInstance', () => {
    const wrapper = mount(NavigationToggle);

    expect(wrapper.isVueInstance()).toBe(true);
  });

  context('when closed', () => {
    it('is assigned closed class', () => {
      const wrapper = mount(NavigationToggle, {
        propsData: {
          open: false,
        },
      });

      expect(wrapper.classes()).toContain('NavigationToggle--closed');
    });
  });

  context('when opened', () => {
    it('is not assigned closed class', () => {
      const wrapper = mount(NavigationToggle, {
        propsData: {
          open: true,
        },
      });

      expect(wrapper.classes()).not.toContain('NavigationToggle--closed');
    });
  });
});
