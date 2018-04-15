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
        parentItem,
      },
    });

    expect(wrapper.isVueInstance()).toBe(true);
  });

  context('when closed', () => {
    let wrapper;

    beforeEach(() => {
      wrapper = mount(NavigationList, {
        propsData: {
          level: 2,
          open: false,
          parentItem,
        },
      });
    });

    it('contains closed class', () => {
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

  context('when open', () => {
    let wrapper;

    beforeEach(() => {
      wrapper = mount(NavigationList, {
        propsData: {
          level: 2,
          open: true,
          parentItem,
        },
      });
    });

    it('does not contain closed class', () => {
      expect(wrapper.classes()).not.toContain('NavigationList--closed');
    });

    context('when toggle clicked', () => {
      it('contains closed class', () => {
        wrapper.find('.NavigationToggle').trigger('click');

        expect(wrapper.classes()).toContain('NavigationList--closed');
      });
    });

    context('when item clicked', () => {
      it('does not contain closed class', () => {
        wrapper.find('.NavigationItem').trigger('click');

        expect(wrapper.classes()).not.toContain('NavigationList--closed');
      });
    });
  });
});
