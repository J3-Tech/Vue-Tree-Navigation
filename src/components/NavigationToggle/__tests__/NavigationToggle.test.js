import { mount } from 'vue-test-utils';

import NavigationToggle from '../NavigationToggle';

describe('NavigationToggle ', () => {
  it('renders', () => {
    const wrapper = mount(NavigationToggle, {
      propsData: {
        isClosed: true,
      },
    });

    expect(wrapper.html()).toMatchSnapshot();
  }),

  it('assigns `closed` class to outer span when `isClosed` is `true`', () => {
    const wrapper = mount(NavigationToggle, {
      propsData: {
        isClosed: true,
      },
    });

    expect(wrapper.classes()).toContain('closed');
  }),

  it('does not assign `closed` class to outer span when `isClosed` is `false`', () => {
    const wrapper = mount(NavigationToggle, {
      propsData: {
        isClosed: false,
      },
    });

    expect(wrapper.classes()).not.toContain('closed');
  });
});
