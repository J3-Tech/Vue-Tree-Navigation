import NavigationList from '../NavigationList/NavigationList.vue';

/**
 * Get navigation item (hyperlink element or simple value).
 * Return <a href=`href`>`name`</a> when `href` is defined.
 * Otherwise return only `name`.
 */
function getNavItem(createElement, { name, href }) {
  if (href !== undefined) {
    return createElement('a', {
      attrs: {
        href,
      },
    }, [
      name,
    ]);
  }

  return name;
}

/**
 * Recursive function.
 * One call generates one level of the tree.
 */
function generateLevel(createElement, items, level, defaultOpenLevel) {
  const children = [];

  items.forEach(item => {
    const navItem = getNavItem(createElement, item);

    if (item.hasOwnProperty('children')) {
      children.push(
        createElement(NavigationList, {
          props: {
            level,
            defaultOpenLevel,
          },
        }, [
          navItem,
          ...generateLevel(createElement,
                           item.children,
                           level + 1,
                           defaultOpenLevel),
        ])
      );
    } else {
      children.push(createElement('li', [
        navItem,
      ]));
    }
  });

  return children;
}

export default {
  generateLevel,
};
