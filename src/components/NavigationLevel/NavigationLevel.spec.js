import { mount, shallowMount } from '@vue/test-utils';

import NavigationLevel from './NavigationLevel';

const parentItem = {
  name: 'Contact',
  meta: {
    target: '/#contact',
  },
  children: [],
};

describe('NavigationLevel ', () => {
  it('is Vue instance', () => {
    const wrapper = shallowMount(NavigationLevel, {
      propsData: {
        level: 2,
        defaultOpenLevel: 2,
        parentItem,
      },
      mocks: {
        $router: {},
        $route: {
          path: '',
        },
      },
    });

    expect(wrapper.isVueInstance()).toBe(true);
  });

  context('with level 2', () => {
    it('assigns a correct level class', () => {
      const wrapper = shallowMount(NavigationLevel, {
        propsData: {
          level: 2,
          defaultOpenLevel: 2,
          parentItem,
        },
        mocks: {
          $router: {},
          $route: {
            path: '',
          },
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
          defaultOpenLevel: 1,
          parentItem,
        },
        mocks: {
          $router: {},
          $route: {
            path: '',
          },
        },
      });

      jsdom.reconfigure({
        url: 'https://mypage.com/#about',
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
          defaultOpenLevel: 3,
          parentItem,
        },
        mocks: {
          $router: {},
          $route: {
            path: '',
          },
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
