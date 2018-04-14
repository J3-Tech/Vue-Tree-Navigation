import { mount, shallow } from 'vue-test-utils';

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

  context('when a group is opened', () => {
    let wrapper;

    beforeEach(() => {
      wrapper = mount(NavigationList, {
        propsData: {
          level: 1,
          defaultOpenLevel: 2,
          parentItem,
        },
      });

      expect(wrapper.classes()).not.toContain('NavigationList--closed');
    });

    context('when toggle clicked', () => {
      it('assigns closed class', () => {
        wrapper.find('.NavigationToggle').trigger('click');

        expect(wrapper.classes()).toContain('NavigationList--closed');
      });
    });

    context('when item clicked', () => {
      it('does not assign closed class', () => {
        wrapper.find('.NavigationItem').trigger('click');

        expect(wrapper.classes()).not.toContain('NavigationList--closed');
      });
    });
  });

  context('when a group is closed', () => {
    let wrapper;

    beforeEach(() => {
      wrapper = mount(NavigationList, {
        propsData: {
          level: 2,
          defaultOpenLevel: 1,
          parentItem,
        },
      });

      expect(wrapper.classes()).toContain('NavigationList--closed');
    });

    context('when toggle clicked', () => {
      it('removes closed class', () => {
        wrapper.find('.NavigationToggle').trigger('click');

        expect(wrapper.classes()).not.toContain('NavigationList--closed');
      });
    });

    context('when item clicked', () => {
      it('removes closed class', () => {
        wrapper.find('.NavigationItem').trigger('click');

        expect(wrapper.classes()).not.toContain('NavigationList--closed');
      });
    });
  });
});
