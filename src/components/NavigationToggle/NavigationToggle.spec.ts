import { mount } from '@vue/test-utils';
import {expect, describe} from '@jest/globals';

import NavigationToggle from './NavigationToggle.vue';


describe('NavigationToggle ', () => {
  it('isVueInstance', () => {
    const wrapper = mount(NavigationToggle);

    expect(wrapper.exists()).toBe(true);
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
