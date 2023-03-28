import { mount } from '@vue/test-utils';
import { describe, it, expect } from 'vitest';

import NavigationToggle from './NavigationToggle.vue';

describe('NavigationToggle ', () => {
  it('isVueInstance', () => {
    const wrapper = mount(NavigationToggle);

    expect(wrapper.exists()).toBe(true);
  });

  describe('when closed', () => {
    it('is assigned closed class', () => {
      const wrapper = mount(NavigationToggle, {
        propsData: {
          open: false,
        },
      });

      expect(wrapper.classes()).toContain('navigation-toggle--closed');
    });
  });

  describe('when opened', () => {
    it('is not assigned closed class', () => {
      const wrapper = mount(NavigationToggle, {
        propsData: {
          open: true,
        },
      });

      expect(wrapper.classes()).not.toContain('navigation-toggle--closed');
    });
  });
});
