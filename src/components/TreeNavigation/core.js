import NavigationLevel from '../NavigationLevel/NavigationLevel.vue';
import NavigationItem from '../NavigationItem/NavigationItem.vue';

import { sanitizeElement, sanitizeRoute } from '../utils';

/**
 * Recursive function.
 * One call generates one level of the tree.
 */
export const generateLevel = (
  createElement,
  items,
  level,
  defaultOpenLevel
) => {
  const children = [];

  items.forEach(item => {
    if (item.hasOwnProperty('children')) {
      const navLevel = createElement(
        NavigationLevel,
        {
          props: {
            parentItem: item,
            level,
            defaultOpenLevel,
          },
        },
        [
          ...generateLevel(
            createElement,
            item.children,
            level + 1,
            defaultOpenLevel
          ),
        ]
      );

      children.push(createElement('li', [navLevel]));
    } else {
      const navItem = createElement(NavigationItem, {
        props: {
          item,
        },
      });

      children.push(createElement('li', [navItem]));
    }
  });

  return children;
};

/**
 * Recursive function.
 * Insert metadata containing the navigation path and its type to each item.
 **/
export const insertMetadataToItems = (items, parent) => {
  items.forEach(item => {
    item.meta = getItemMetadata(item, parent);

    if (item.hasOwnProperty('children')) {
      item.children = insertMetadataToItems(item.children, item);
    }
  });

  return items;
};

/**
 * Return item metadata object: { path: ..., target: ... }
 */
export const getItemMetadata = (item, parent) => {
  const element = sanitizeElement(item.element);
  const route = sanitizeRoute(item.route);
  const external = item.external;

  // item is its own parent
  if (parent === undefined) {
    if (
      element === undefined &&
      route === undefined &&
      external === undefined
    ) {
      return {
        path: '',
        target: '',
      };
    }

    if (external !== undefined) {
      return {
        path: '',
        target: external,
      };
    }

    if (route !== undefined) {
      return {
        path: route,
        target: route,
      };
    }

    if (element !== undefined) {
      return {
        path: '',
        target: '/' + element,
      };
    }
  }

  const parentPath = sanitizeRoute(parent.meta.path);

  if (external !== undefined) {
    return {
      path: parentPath,
      target: external,
    };
  }

  if (route !== undefined) {
    return {
      path: parentPath + route,
      target: parentPath + route,
    };
  }

  if (element !== undefined) {
    return {
      path: parentPath,
      target: sanitizeRoute(parentPath + element),
    };
  }

  return {
    path: parentPath,
    target: '',
  };
};
