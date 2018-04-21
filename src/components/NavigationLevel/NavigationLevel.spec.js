import { mount, shallow } from '@vue/test-utils';

import { PATH_TYPE_NONE } from '../../config';
import NavigationLevel from './NavigationLevel';

const parentItem = {
  name: 'Contact',
  meta: {
    pathType: PATH_TYPE_NONE,
  },
};

describe('NavigationLevel ', () => {
  it('is Vue instance', () => {
    const wrapper = shallow(NavigationLevel, {
      propsData: {
        level: 2,
        parentItem,
      },
    });

    expect(wrapper.isVueInstance()).toBe(true);
  });

  context('with level 2', () => {
    it('assigns a correct level class', () => {
      const wrapper = shallow(NavigationLevel, {
        propsData: {
          level: 2,
          parentItem,
        },
      });

      expect(wrapper.classes()).toContain('NavigationLevel--level-2');
    });
  });

  context('when closed', () => {
    let wrapper;

    beforeEach(() => {
      wrapper = mount(NavigationLevel, {
        propsData: {
          level: 2,
          open: false,
          parentItem,
        },
      });
    });

    it('contains closed class', () => {
      expect(wrapper.classes()).toContain('NavigationLevel--closed');
    });

    context('when toggle clicked', () => {
      it('removes closed class', () => {
        wrapper.find('.NavigationToggle').trigger('click');

        expect(wrapper.classes()).not.toContain('NavigationLevel--closed');
      });
    });

    context('when item clicked', () => {
      it('removes closed class', () => {
        wrapper.find('.NavigationItem').trigger('click');

        expect(wrapper.classes()).not.toContain('NavigationLevel--closed');
      });
    });
  });

  context('when open', () => {
    let wrapper;

    beforeEach(() => {
      wrapper = mount(NavigationLevel, {
        propsData: {
          level: 2,
          open: true,
          parentItem,
        },
      });
    });

    it('does not contain closed class', () => {
      expect(wrapper.classes()).not.toContain('NavigationLevel--closed');
    });

    context('when toggle clicked', () => {
      it('adds closed class', () => {
        wrapper.find('.NavigationToggle').trigger('click');

        expect(wrapper.classes()).toContain('NavigationLevel--closed');
      });
    });

    context('when item clicked', () => {
      it('does not add closed class', () => {
        wrapper.find('.NavigationItem').trigger('click');

        expect(wrapper.classes()).not.toContain('NavigationLevel--closed');
      });
    });
  });
});
