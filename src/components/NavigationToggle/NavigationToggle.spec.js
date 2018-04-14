import { mount } from 'vue-test-utils';

import NavigationToggle from './NavigationToggle';

describe('NavigationToggle ', () => {
  it('isVueInstance', () => {
    const wrapper = mount(NavigationToggle, {
      propsData: {
        isClosed: true,
      },
    });

    expect(wrapper.isVueInstance()).toBe(true);
  });

  context('when closed', () => {
    it('is assigned closed class', () => {
      const wrapper = mount(NavigationToggle, {
        propsData: {
          isClosed: true,
        },
      });

      expect(wrapper.classes()).toContain('NavigationToggle--closed');
    });
  });

  context('when opened', () => {
    it('is not assigned closed class', () => {
      const wrapper = mount(NavigationToggle, {
        propsData: {
          isClosed: false,
        },
      });

      expect(wrapper.classes()).not.toContain('NavigationToggle--closed');
    });
  });
});
