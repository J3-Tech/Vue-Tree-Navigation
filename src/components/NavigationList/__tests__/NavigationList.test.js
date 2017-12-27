import { mount } from 'vue-test-utils';

import NavigationList from '../NavigationList';

describe('NavigationList ', () => {
  it('renders', () => {
    const wrapper = mount(NavigationList, {
      propsData: {
        level: 2,
        defaultOpenLevel: 3,
      },
    });

    expect(wrapper.html()).toMatchSnapshot();
  });

  it('assigns `closed` class to list when `level` > `defaultOpenLevel`', () => {
    const wrapper = mount(NavigationList, {
      propsData: {
        level: 3,
        defaultOpenLevel: 2,
      },
    });

    expect(wrapper.classes()).toContain('closed');
  }),

  it('does not assign `closed` class to list when `level` = `defaultOpenLevel`', () => {
    const wrapper = mount(NavigationList, {
      propsData: {
        level: 3,
        defaultOpenLevel: 3,
      },
    });

    expect(wrapper.classes()).not.toContain('closed');
  }),

  it('does not assign `closed` class to list when `level` < `defaultOpenLevel`', () => {
    const wrapper = mount(NavigationList, {
      propsData: {
        level: 2,
        defaultOpenLevel: 3,
      },
    });

    expect(wrapper.classes()).not.toContain('closed');
  });
});
