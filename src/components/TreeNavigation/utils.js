import NavigationList from '../NavigationList/NavigationList.vue';

/**
 * Get tree item label (hyperlink element or simple value).
 * Return <a href=`href`>`name`</a> when `href` is defined.
 * Otherwise return only `name`.
 */
function getItemLabel(createElement, name, href) {
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
    const label = getItemLabel(createElement, item.name, item.href);

    if (item.hasOwnProperty('children')) {
      children.push(
        createElement(NavigationList, {
          props: {
            level,
            defaultOpenLevel,
          },
        }, [
          label,
          ...generateLevel(createElement,
                           item.children,
                           level + 1,
                           defaultOpenLevel),
        ])
      );
    } else {
      children.push(createElement('li', [
        label,
      ]));
    }
  });

  return children;
}

export default {
  generateLevel,
};
