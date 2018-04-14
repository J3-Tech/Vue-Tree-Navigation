import { mount } from 'vue-test-utils';

import { PATH_TYPE_NONE } from '../../config';
import NavigationList from './NavigationList';

const parentItem = {
  name: 'Contact',
  meta: {
    pathType: PATH_TYPE_NONE,
  },
};

describe('NavigationList ', () => {
  it('renders', () => {
    const wrapper = mount(NavigationList, {
      propsData: {
        level: 2,
        defaultOpenLevel: 3,
        parentItem,
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
          parentItem,
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
          parentItem,
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
          parentItem,
        },
      });

      expect(wrapper.classes()).not.toContain('closed');
    });
  });
});
