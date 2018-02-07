import NavigationList from '../NavigationList/NavigationList.vue';

/**
 * Get navigation item - a hyperlink, a router link, or a simple value.
 * Return only `name` in case both `to` and `href` are not defined.
 * Return <router-link to=`location`>`name`</router-link> if `to` is defined.
 * Return <a href=`location`>`name`</a> when `href` is defined.
 */
function getNavItem(createElement, { name, to, href }, location='') {

  if (to === undefined && href === undefined) {
    return name;
  }

  let element;
  let attrs;
  let props;

  if (href !== undefined) {
    element = 'a';
    attrs = {
      href: location,
    };
    props = {};
  }

  // user shouldn't define both `to` and `href` but in case he does,
  // `href` will be overridden by `to` which has a higher priority
  if (to !== undefined) {
    element = 'router-link';
    attrs = {};
    props = {
      to: location,
    };
  }

  return createElement(element, {
    attrs,
    props,
  }, [
    name,
  ]);
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
