import NavigationList from './NavigationList/NavigationList.vue';
import NavigationItem from './NavigationItem/NavigationItem.vue';

import {
  PATH_TYPE_NONE,
  PATH_TYPE_ELEMENT,
  PATH_TYPE_ROUTE,
  PATH_TYPE_EXTERNAL,
} from '../config';

/**
 * Check if there is an element appended to the end
 * of the path and then remove it.
 */
function removeElementFromPath(path) {
  const hashPos = path.indexOf('#');

  if (hashPos === -1) {
    return path;
  }

  return path.slice(0, hashPos);
}

/**
 * First character should be backslash.
 * Last character shouldn't be backslash.
 */
function sanitizeRoute(route) {
  if (route === undefined) {
    return;
  }

  if (route[0] !== '/') {
    route = '/' + route;
  }

  if (route[route.length - 1] === '/') {
    route = route.slice(0, -1);
  }

  return route;
}

/**
 * First character should be #.
 */
function sanitizeElement(element) {
  if (element === undefined) {
    return;
  }

  if (element[0] !== '#') {
    element = '#' + element;
  }

  return element;
}

/**
 * Return item metadata object: { path: ..., pathType: ... }
 */
function getItemMetadata(item, parent) {
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
      path: element,
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
}

/**
 * Recursive function.
 * Insert metadata containing the navigation path and its type to each item.
 **/
function insertMetadataToItems(items, parent) {
  items.forEach(item => {
    item.meta = getItemMetadata(item, parent);

    if (item.hasOwnProperty('children')) {
      item.children = insertMetadataToItems(item.children, item);
    }
  });

  return items;
}

/**
 * Recursive function.
 * One call generates one level of the tree.
 */
function generateLevel(createElement, items, level, defaultOpenLevel) {
  const children = [];

  items.forEach(item => {
    if (item.hasOwnProperty('children')) {
      const navList = createElement(
        NavigationList,
        {
          props: {
            level,
            defaultOpenLevel,
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

      children.push(createElement('li', [navList]));
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
}

export default {
  sanitizeRoute,
  sanitizeElement,
  removeElementFromPath,
  getItemMetadata,
  insertMetadataToItems,
  generateLevel,
};
