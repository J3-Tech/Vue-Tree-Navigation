import { shallow } from 'vue-test-utils';

import { PATH_TYPE_NONE } from '../../config';
import NavigationList from './NavigationList';

const parentItem = {
  name: 'Contact',
  meta: {
    pathType: PATH_TYPE_NONE,
  },
};

describe('NavigationList ', () => {
  it('is Vue instance', () => {
    const wrapper = shallow(NavigationList, {
      propsData: {
        level: 2,
        defaultOpenLevel: 3,
        parentItem,
      },
    });

    expect(wrapper.isVueInstance()).toBe(true);
  });

  context('with level greater than default open level', () => {
    it('assigns closed class to a list`', () => {
      const wrapper = shallow(NavigationList, {
        propsData: {
          level: 3,
          defaultOpenLevel: 2,
          parentItem,
        },
      });

      expect(wrapper.classes()).toContain('NavigationList--closed');
    });
  });

  context('with level equal to default open level', () => {
    it('does not assign closed class to a list', () => {
      const wrapper = shallow(NavigationList, {
        propsData: {
          level: 3,
          defaultOpenLevel: 3,
          parentItem,
        },
      });

      expect(wrapper.classes()).not.toContain('NavigationList--closed');
    });
  });

  context('with level less than default open level', () => {
    it('does not assign closed class to a list', () => {
      const wrapper = shallow(NavigationList, {
        propsData: {
          level: 2,
          defaultOpenLevel: 3,
          parentItem,
        },
      });

      expect(wrapper.classes()).not.toContain('NavigationList--closed');
    });
  });
});
