import { mount } from 'vue-test-utils';

import NavigationToggle from './NavigationToggle';

describe('NavigationToggle ', () => {
  it('renders', () => {
    const wrapper = mount(NavigationToggle, {
      propsData: {
        isClosed: true,
      },
    });

    expect(wrapper.html()).toMatchSnapshot();
  });

  context('with `isClosed` property equal to true', () => {
    it('assigns `closed` class to outer span', () => {
      const wrapper = mount(NavigationToggle, {
        propsData: {
          isClosed: true,
        },
      });

      expect(wrapper.classes()).toContain('closed');
    });
  });

  context('with `isClosed` property equal to false', () => {
    const wrapper = mount(NavigationToggle, {
      propsData: {
        isClosed: false,
      },
    });

    expect(wrapper.classes()).not.toContain('closed');
  });
});
