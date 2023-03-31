import { insertMetadataToNavItems, generateLevel } from './core';
import { h } from 'vue';
import './TreeNavigation.scss';

const TreeNavigation = {
  props: {
    items: {
      type: Array,
      required: false,
      default: () => [],
    },
    defaultOpenLevel: {
      type: Number,
      default: 0,
    },
  },
  computed: {
    navItems(props: any): any {
      if (props.items && props.items.length) {
        return props.items;
      }

      if (
        props.$router &&
        props.$router.options &&
        props.$router.options.routes &&
        props.$router.options.routes.length
      ) {
        return props.$router.options.routes;
      }

      console.warn(
        "[VueTreeNavigation]: Haven't you forget to provide items or define vue-router routes?"
      );
      return [];
    },
    navItemsWithMetadata() {
      const navItems = JSON.parse(JSON.stringify(this.navItems));
      return insertMetadataToNavItems(navItems);
    },
  },

  render(props: any): any {
    const level = 1;
    const tree: any = h(
      'ul',
      generateLevel(props.navItemsWithMetadata, level, props.defaultOpenLevel)
    );

    const level0 = h(
      'div',
      {
        class: ['navigation-level', 'navigation-level--level-0'],
      },
      [tree]
    );

    const treeNavigation: any = h(
      'div',
      {
        class: 'tree-navigation',
      },
      [level0]
    );

    return treeNavigation;
  },
};

export default TreeNavigation;
