import { shallow } from 'vue-test-utils';

import {
  PATH_TYPE_NONE,
  PATH_TYPE_ELEMENT,
  PATH_TYPE_ROUTE,
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

describe('NavigationItem ', () => {
  context('for item with path type none', () => {
    it('renders span containing the item name', () => {
      const wrapper = shallow(NavigationItem, {
        propsData: {
          item: textItem,
        },
      });

      expect(wrapper.html()).toMatchSnapshot();
    });
  });

  context('for item with path type element', () => {
    it('renders hyperlink with a correct value and location', () => {
      const wrapper = shallow(NavigationItem, {
        propsData: {
          item: elementItem,
        },
      });

      expect(wrapper.html()).toMatchSnapshot();
    });
  });

  context('for item with path type route', () => {
    it('renders router link with a correct value and location', () => {
      const wrapper = shallow(NavigationItem, {
        propsData: {
          item: routeItem,
        },
      });

      expect(wrapper.html()).toMatchSnapshot();
    });
  });
});
