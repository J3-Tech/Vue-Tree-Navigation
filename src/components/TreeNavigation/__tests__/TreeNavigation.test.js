import { createLocalVue, mount } from 'vue-test-utils';
import VueRouter from 'vue-router';

import TreeNavigation from '../TreeNavigation';

const items = [
  { name: 'Home', to: 'home' },
  { name: 'Products', to: 'products', children: [
    { name: 'Running shoes', to: 'shoes', children: [
      { name: 'Race', href: '#race' },
      { name: 'Road', href: '#road' },
      { name: 'Trail', href: '#trail' },
    ]},
    { name: 'Running clothing', to: 'clothing', children: [
      { name: 'Jackets', to: 'jackets' },
      { name: 'Tops', to: 'tops', children: [
        { name: 'Long Sleeve', href: '#long-sleeve', children: [
          { name: 'For summer', href: '#summer' },
          { name: 'For winter', href: '#winter' },
        ]},
        { name: 'Short Sleeve', href: '#short-sleeve' },
        { name: 'Sleeveless', href: '#sleeveless' },
      ]},
    ]},
  ]},
  { name: 'About', children: [
    { name: 'Company' },
    { name: 'Contact', href: '#contact' },
    { name: 'Blog', href: '#blog' },
  ]},
];

const routes = [
  {
    path: '/home',
  },
  {
    path: '/products',
  },
  {
    path: '/products/shoes',
  },
  {
    path: '/products/clothing',
    children: [
      {
        path: 'jackets',
      },
      {
        path: 'tops',
      },
    ],
  },
];

describe('TreeNavigation', () => {
  let localVue;
  let router;

  beforeAll(() => {
    localVue = createLocalVue();
    localVue.use(VueRouter);
    router = new VueRouter({
      routes,
    });
  });

  it('renders', () => {
    const wrapper = mount(TreeNavigation, {
      localVue,
      router,
      propsData: {
        items,
      },
    });

    // link targets are dummy # right now
    expect(wrapper.html()).toMatchSnapshot();
  });

  describe('item', () => {
    context('with `to` and `href` fields undefined', () => {
      it('is rendered as a simple value', () => {
        const wrapper = mount(TreeNavigation, {
          propsData: {
            items: [{
              name: 'Item',
            }],
          },
        });

        expect(wrapper.find('li').html()).toBe('<li>Item</li>');
      });
    });

    context('with `href` field defined', () => {
      it('is rendered as a hyperlink', () => {
        const wrapper = mount(TreeNavigation, {
          propsData: {
            items: [{
              name: 'Item',
              href: '#contact',
            }],
          },
        });

        expect(wrapper.find('li').contains('a')).toBe(true);
      });

      it('hyperlink is not assigned `router-link` class', () => {
        const wrapper = mount(TreeNavigation, {
          propsData: {
            items: [{
              name: 'Item',
              href: '#contact',
            }],
          },
        });

        expect(wrapper.find('a').classes()).not.toContain('router-link');
      });
    });

    context('with `to` field defined', () => {
      it('is rendered as a router link', () => {
        const wrapper = mount(TreeNavigation, {
          propsData: {
            items: [{
              name: 'Item',
              to: 'home',
            }],
          },
        });

        expect(wrapper.find('li').contains('router-link')).toBe(true);
      });

      it('router link is assigned `router-link` class', () => {
        const wrapper = mount(TreeNavigation, {
          propsData: {
            items: [{
              name: 'Item',
              to: 'home',
            }],
          },
        });

        expect(wrapper.find('router-link').classes()).toContain('router-link');
      });
    });
  });

  describe('lists', () => {
    context('with level deeper than default open level', () => {
      it('are assigned `closed` class', () => {
        const wrapper = mount(TreeNavigation, {
          propsData: {
            items,
            defaultOpenLevel: 2,
          },
        });

        // level 3 list
        expect(wrapper.find('div > ul > ul > ul > ul').classes()).toContain('closed');

        // level 4 list
        expect(wrapper.find('div > ul > ul > ul > ul > ul').classes()).toContain('closed');
      });
    });

    context('with level less than or equal to default open level', () => {
      it('are not assigned `closed` class', () => {
        const wrapper = mount(TreeNavigation, {
          propsData: {
            items,
            defaultOpenLevel: 2,
          },
        });

        // level 0 list
        expect(wrapper.find('div > ul').classes()).not.toContain('closed');

        // level 1 list
        expect(wrapper.find('div > ul > ul').classes()).not.toContain('closed');

        // level 2 list
        expect(wrapper.find('div > ul > ul > ul').classes()).not.toContain('closed');
      });
    });
  });
});
