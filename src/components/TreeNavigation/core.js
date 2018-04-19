import NavigationLevel from '../NavigationLevel/NavigationLevel.vue';
import NavigationItem from '../NavigationItem/NavigationItem.vue';

import {
  PATH_TYPE_NONE,
  PATH_TYPE_ELEMENT,
  PATH_TYPE_ROUTE,
  PATH_TYPE_EXTERNAL,
} from '../../config';

import {
  sanitizeElement,
  sanitizeRoute,
  removeElementFromPath,
  getRelativeUrl,
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
            level,
            open: renderLevelAsOpen(item, level, defaultOpenLevel),
            parentItem: item,
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
 * - it contains child which URL is a part of an active URL
 */
export const renderLevelAsOpen = (parentItem, level, defaultOpenLevel) => {
  if (defaultOpenLevel >= level) {
    return true;
  }

  const currentUrl = getRelativeUrl(
    window.location.href,
    window.location.origin
  );

  for (let i = 0; i < parentItem.children.length; i++) {
    let child = parentItem.children[i];

    if (child.meta.path !== undefined) {
      let childUrl = child.meta.path;

      if (!childUrl.startsWith('/#')) {
        childUrl = removeElementFromPath(childUrl);
      }

      if (currentUrl.startsWith(childUrl)) {
        return true;
      }
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
 * Return item metadata object: { path: ..., pathType: ... }
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
        path: undefined,
        pathType: PATH_TYPE_NONE,
      };
    }

    if (external !== undefined) {
      return {
        path: external,
        pathType: PATH_TYPE_EXTERNAL,
      };
    }

    if (route !== undefined) {
      return {
        path: route,
        pathType: PATH_TYPE_ROUTE,
      };
    }

    if (element !== undefined) {
      return {
        path: element,
        pathType: PATH_TYPE_ELEMENT,
      };
    }
  }

  // route -> external
  if (parent.meta.pathType === PATH_TYPE_ROUTE && external !== undefined) {
    return {
      path: external,
      pathType: PATH_TYPE_EXTERNAL,
    };
  }

  // route -> route
  if (parent.meta.pathType === PATH_TYPE_ROUTE && route !== undefined) {
    const parentPath = removeElementFromPath(parent.meta.path);

    return {
      path: parentPath + route,
      pathType: PATH_TYPE_ROUTE,
    };
  }

  // route -> element
  if (parent.meta.pathType === PATH_TYPE_ROUTE && element !== undefined) {
    const parentPath = removeElementFromPath(parent.meta.path);

    return {
      path: parentPath + element,
      pathType: PATH_TYPE_ROUTE,
    };
  }

  // route -> label
  if (
    parent.meta.pathType === PATH_TYPE_ROUTE &&
    element === undefined &&
    route === undefined &&
    external === undefined
  ) {
    const parentPath = removeElementFromPath(parent.meta.path);

    return {
      path: parentPath,
      pathType: PATH_TYPE_ROUTE,
    };
  }

  // element -> external
  if (parent.meta.pathType === PATH_TYPE_ELEMENT && external !== undefined) {
    return {
      path: external,
      pathType: PATH_TYPE_EXTERNAL,
    };
  }

  // element -> route
  if (parent.meta.pathType === PATH_TYPE_ELEMENT && route !== undefined) {
    return {
      path: route,
      pathType: PATH_TYPE_ROUTE,
    };
  }

  // element -> element
  if (parent.meta.pathType === PATH_TYPE_ELEMENT && element !== undefined) {
    return {
      path: element,
      pathType: PATH_TYPE_ELEMENT,
    };
  }

  // element -> label
  if (
    parent.meta.pathType === PATH_TYPE_ELEMENT &&
    element === undefined &&
    route === undefined &&
    external === undefined
  ) {
    return {
      path: undefined,
      pathType: PATH_TYPE_NONE,
    };
  }

  // label -> external
  if (parent.meta.pathType === PATH_TYPE_NONE && external !== undefined) {
    return {
      path: external,
      pathType: PATH_TYPE_EXTERNAL,
    };
  }

  // label -> route
  if (parent.meta.pathType === PATH_TYPE_NONE && route !== undefined) {
    return {
      path: route,
      pathType: PATH_TYPE_ROUTE,
    };
  }

  // label -> element
  if (parent.meta.pathType === PATH_TYPE_NONE && element !== undefined) {
    return {
      path: '/' + element,
      pathType: PATH_TYPE_ELEMENT,
    };
  }

  // label -> label
  if (
    parent.meta.pathType === PATH_TYPE_NONE &&
    element === undefined &&
    route === undefined
  ) {
    return {
      path: undefined,
      pathType: PATH_TYPE_NONE,
    };
  }

  // external -> external
  if (parent.meta.pathType === PATH_TYPE_EXTERNAL && external !== undefined) {
    return {
      path: external,
      pathType: PATH_TYPE_EXTERNAL,
    };
  }

  // external -> route
  if (parent.meta.pathType === PATH_TYPE_EXTERNAL && route !== undefined) {
    return {
      path: route,
      pathType: PATH_TYPE_ROUTE,
    };
  }

  // external -> element
  if (parent.meta.pathType === PATH_TYPE_EXTERNAL && element !== undefined) {
    return {
      path: element,
      pathType: PATH_TYPE_ELEMENT,
    };
  }

  // external -> label
  if (
    parent.meta.pathType === PATH_TYPE_EXTERNAL &&
    element === undefined &&
    route === undefined &&
    external === undefined
  ) {
    return {
      path: undefined,
      pathType: PATH_TYPE_NONE,
    };
  }
};
