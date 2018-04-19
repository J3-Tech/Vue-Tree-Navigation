import { createLocalVue, mount } from 'vue-test-utils';
import VueRouter from 'vue-router';

import TreeNavigation from './TreeNavigation';

const items = [
  { name: 'Home', route: 'home' },
  {
    name: 'Products',
    route: '/products',
    children: [
      {
        name: 'Running shoes',
        route: 'shoes',
        children: [
          { name: 'Race', element: 'race' },
          { name: 'Road', element: '#road' },
          { name: 'Trail', element: '#trail' },
        ],
      },
      {
        name: 'Running clothing',
        route: 'clothing',
        children: [
          { name: 'Jackets', route: '/jackets/' },
          {
            name: 'Tops',
            route: 'tops',
            children: [
              {
                name: 'Long Sleeve',
                element: 'long-sleeve',
                children: [
                  { name: 'For summer', element: 'summer' },
                  { name: 'For winter', element: 'winter' },
                ],
              },
              { name: 'Short Sleeve', element: 'short-sleeve' },
              { name: 'Sleeveless', element: 'sleeveless' },
            ],
          },
        ],
      },
    ],
  },
  {
    name: 'About',
    children: [
      { name: 'Company' },
      { name: 'Contact', element: 'contact' },
      { name: 'Blog', element: 'blog' },
    ],
  },
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

  describe('lists', () => {
    context('with level deeper than default open level', () => {
      it('are assigned closed class', () => {
        const wrapper = mount(TreeNavigation, {
          propsData: {
            items,
            defaultOpenLevel: 2,
          },
        });

        expect(wrapper.find('.NavigationLevel--level-3').classes()).toContain(
          'NavigationLevel--closed'
        );

        expect(wrapper.find('.NavigationLevel--level-4').classes()).toContain(
          'NavigationLevel--closed'
        );
      });
    });

    context('with level less than or equal to default open level', () => {
      it('are not assigned closed class', () => {
        const wrapper = mount(TreeNavigation, {
          propsData: {
            items,
            defaultOpenLevel: 2,
          },
        });

        expect(
          wrapper.find('.NavigationLevel--level-0').classes()
        ).not.toContain('NavigationLevel--closed');

        expect(
          wrapper.find('.NavigationLevel--level-1').classes()
        ).not.toContain('NavigationLevel--closed');

        expect(
          wrapper.find('.NavigationLevel--level-2').classes()
        ).not.toContain('NavigationLevel--closed');
      });
    });

    context(
      'containing a child with an URL being part of a current URL',
      () => {
        let wrapper;

        beforeAll(() => {
          jsdom.reconfigure({
            url: 'https://mypage.com/products/clothing/tops#summer',
          });

          wrapper = mount(TreeNavigation, {
            propsData: {
              items,
              defaultOpenLevel: 0,
            },
          });
        });

        it('are rendered as open', () => {
          expect(wrapper.html()).toMatchSnapshot();
        });
      }
    );
  });
});
