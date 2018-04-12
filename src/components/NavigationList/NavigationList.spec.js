import { mount } from 'vue-test-utils';

import NavigationList from './NavigationList';

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

  context('with level greater than default open level', () => {
    it('assigns `closed` class to a list`', () => {
      const wrapper = mount(NavigationList, {
        propsData: {
          level: 3,
          defaultOpenLevel: 2,
        },
      });

      expect(wrapper.classes()).toContain('closed');
    });
  });

  context('with level equal to default open level', () => {
    it('does not assign `closed` class to a list`', () => {
      const wrapper = mount(NavigationList, {
        propsData: {
          level: 3,
          defaultOpenLevel: 3,
        },
      });

      expect(wrapper.classes()).not.toContain('closed');
    });
  });

  context('with level less than default open level', () => {
    it('does not assign `closed` class to a list`', () => {
      const wrapper = mount(NavigationList, {
        propsData: {
          level: 2,
          defaultOpenLevel: 3,
        },
      });

      expect(wrapper.classes()).not.toContain('closed');
    });
  });
});
