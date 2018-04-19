import { insertMetadataToItems, generateLevel } from './core';

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
    itemsWithMetadata() {
      const self = this;

      const items = JSON.parse(JSON.stringify(self.items));
      return insertMetadataToItems(items);
    },
  },

  render(createElement) {
    const self = this;

    const level = 1;
    const tree = createElement(
      'ul',
      {
        class: ['NavigationLevel', 'NavigationLevel--level-0'],
      },
      generateLevel(
        createElement,
        self.itemsWithMetadata,
        level,
        self.defaultOpenLevel
      )
    );

    const wrapper = createElement(
      'div',
      {
        class: 'TreeNavigation',
      },
      [tree]
    );

    return wrapper;
  },
};

export default TreeNavigation;
