import { insertMetadataToNavItems, generateLevel } from './core';

import './TreeNavigation.scss';

const TreeNavigation = {
  props: {
    items: {
      type: Array,
      required: true,
    },
    defaultOpenLevel: {
      type: Number,
      default: 0,
    },
  },

  computed: {
    navItemsWithMetadata() {
      const self = this;

      const items = JSON.parse(JSON.stringify(self.items));
      return insertMetadataToNavItems(items);
    },
  },

  render(createElement) {
    const self = this;

    const level = 1;
    const tree = createElement(
      'ul',
      generateLevel(
        createElement,
        self.navItemsWithMetadata,
        level,
        self.defaultOpenLevel
      )
    );

    const level0 = createElement(
      'div',
      {
        class: ['NavigationLevel', 'NavigationLevel--level-0'],
      },
      [tree]
    );

    const treeNavigation = createElement(
      'div',
      {
        class: 'TreeNavigation',
      },
      [level0]
    );

    return treeNavigation;
  },
};

export default TreeNavigation;
