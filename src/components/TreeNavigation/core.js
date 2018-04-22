import NavigationLevel from '../NavigationLevel/NavigationLevel.vue';
import NavigationItem from '../NavigationItem/NavigationItem.vue';

import {
  getRelativeUrl,
  sanitizeElement,
  sanitizeRoute,
  startsWithUrl,
} from '../utils';

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
            open: renderLevelAsOpen(item, level, defaultOpenLevel),
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
 * Level should be opened in following cases
 * - level is less than or equal to default open level
 * - its URL is a part of an active URL
 * - it contains a child which URL is a part of an active URL
 */
export const renderLevelAsOpen = (parentItem, level, defaultOpenLevel) => {
  if (defaultOpenLevel >= level) {
    return true;
  }

  const currentUrl = getRelativeUrl(
    window.location.href,
    window.location.origin
  );

  if (
    parentItem.meta.target !== '' &&
    startsWithUrl(currentUrl, parentItem.meta.target) === true
  ) {
    return true;
  }

  for (let i = 0; i < parentItem.children.length; i++) {
    let child = parentItem.children[i];

    if (
      child.meta.target !== '' &&
      startsWithUrl(currentUrl, child.meta.target) === true
    ) {
      return true;
    }
  }

  return false;
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
