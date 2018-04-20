import { shallow } from '@vue/test-utils';

import {
  PATH_TYPE_NONE,
  PATH_TYPE_ELEMENT,
  PATH_TYPE_ROUTE,
  PATH_TYPE_EXTERNAL,
} from '../../config';
import NavigationItem from './NavigationItem';

const textItem = {
  name: 'Contact',
  meta: {
    pathType: PATH_TYPE_NONE,
  },
};

const elementItem = {
  name: 'Contact',
  element: 'contact',
  meta: {
    pathType: PATH_TYPE_ELEMENT,
    path: '#contact',
  },
};

const routeItem = {
  name: 'About',
  route: 'about',
  meta: {
    pathType: PATH_TYPE_ROUTE,
    path: '/about',
  },
};

const externalItem = {
  name: 'Github',
  external: 'http://github.com',
  meta: {
    pathType: PATH_TYPE_EXTERNAL,
    path: 'http://github.com',
  },
};

describe('NavigationItem ', () => {
  context('for label item', () => {
    it('renders span containing the item name', () => {
      const wrapper = shallow(NavigationItem, {
        propsData: {
          item: textItem,
        },
      });

      expect(wrapper.html()).toMatchSnapshot();
    });
  });

  context('for external', () => {
    it('renders hyperlink with a correct value, location and target blank', () => {
      const wrapper = shallow(NavigationItem, {
        propsData: {
          item: externalItem,
        },
      });

      expect(wrapper.html()).toMatchSnapshot();
    });
  });

  context('with router', () => {
    context('for element item', () => {
      let wrapper;

      beforeEach(() => {
        wrapper = shallow(NavigationItem, {
          propsData: {
            item: elementItem,
          },
          mocks: {
            $router: {},
          },
        });
      });

      it("doesn't render a hyperlink", () => {
        expect(wrapper.contains('a')).toBe(false);
      });

      it('renders a router link with a correct location and text', () => {
        expect(wrapper.html()).toMatchSnapshot();
      });
    });

    context('for route item', () => {
      let wrapper;

      beforeEach(() => {
        wrapper = shallow(NavigationItem, {
          propsData: {
            item: routeItem,
          },
          mocks: {
            $router: {},
          },
        });
      });

      it("doesn't render a hyperlink", () => {
        expect(wrapper.contains('a')).toBe(false);
      });

      it('renders a router link with a correct location and text', () => {
        expect(wrapper.html()).toMatchSnapshot();
      });
    });
  });

  context('without router', () => {
    context('for element item', () => {
      let wrapper;

      beforeEach(() => {
        wrapper = shallow(NavigationItem, {
          propsData: {
            item: elementItem,
          },
        });
      });

      it("doesn't render a router link", () => {
        expect(wrapper.contains('router-link')).toBe(false);
      });

      it('renders a hyperlink with a correct location and text', () => {
        expect(wrapper.html()).toMatchSnapshot();
      });
    });

    context('for route item', () => {
      let wrapper;

      beforeEach(() => {
        wrapper = shallow(NavigationItem, {
          propsData: {
            item: routeItem,
          },
        });
      });

      it("doesn't render a router link", () => {
        expect(wrapper.contains('router-link')).toBe(false);
      });

      it('renders a hyperlink with a correct location and text', () => {
        expect(wrapper.html()).toMatchSnapshot();
      });
    });
  });
});
