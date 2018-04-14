import { shallow } from 'vue-test-utils';

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

  context('for element item', () => {
    it('renders hyperlink with a correct value and location', () => {
      const wrapper = shallow(NavigationItem, {
        propsData: {
          item: elementItem,
        },
      });

      expect(wrapper.html()).toMatchSnapshot();
    });
  });

  context('for route item', () => {
    it('renders router link with a correct value and location', () => {
      const wrapper = shallow(NavigationItem, {
        propsData: {
          item: routeItem,
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
});
