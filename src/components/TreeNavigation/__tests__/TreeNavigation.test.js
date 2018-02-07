import { mount } from 'vue-test-utils';

import TreeNavigation from '../TreeNavigation';

const items= [
  { name: 'Home' },
  { name: 'Products', children: [
    { name: 'Running shoes', children: [
      { name: 'Race' },
      { name: 'Road' },
      { name: 'Trail' },
    ]},
    { name: 'Running clothing', children: [
      { name: 'Jackets' },
      { name: 'Tops', children: [
        { name: 'Long Sleeve', children: [
          { name: 'For summer' },
          { name: 'For winter' },
        ]},
        { name: 'Short Sleeve' },
        { name: 'Sleeveless' },
      ]},
      { name: 'Trousers' },
    ]},
  ]},
  { name: 'About', children: [
    { name: 'Company' },
    { name: 'Contact' },
    { name: 'Blog' },
  ]},
];

describe('TreeNavigation ', () => {
  it('renders', () => {
    const wrapper = mount(TreeNavigation, {
      propsData: {
        items,
      },
    });

    expect(wrapper.html()).toMatchSnapshot();
  });

  it('renders item as a simple value when both `to` and `href` fields are undefined', () => {
    const wrapper = mount(TreeNavigation, {
      propsData: {
        items: [{
          name: 'Item',
        }],
      },
    });

    expect(wrapper.find('li').html()).toBe('<li>Item</li>');
  });

  it('renders item as a hyperlink when `href` field is defined', () => {
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

  it('renders item as a router link when `to` field is defined', () => {
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

  it('does not assign `router-link` class to a simple hyperlink', () => {
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

  it('assigns `router-link` class to a router link', () => {
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

  it('assigns `closed` class to lists with level deeper than `defaultOpenLevel`', () => {
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

  it('does not assign `closed` class to lists with level less than or equal to `defaultOpenLevel`', () => {
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
    expect(wrapper.find('div > ul > ul').classes()).not.toContain('closed');
  });
});
