/**
 * Check if there is an element appended to the end
 * of the path and then remove it.
 */
export const removeElementFromPath = path => {
  let hashPos;

  while (hashPos !== -1) {
    hashPos = path.lastIndexOf('#');

    if (hashPos === -1) {
      return path;
    }

    // do not cut of router url
    if (hashPos === path.indexOf('#/')) {
      return path;
    }

    path = path.slice(0, hashPos);
  }

  return path;
};

/**
 * First character should be backslash.
 * Last character shouldn't be backslash.
 */
export const sanitizeRoute = route => {
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
};

/**
 * First character should be #.
 */
export const sanitizeElement = element => {
  if (element === undefined) {
    return;
  }

  if (element[0] !== '#') {
    element = '#' + element;
  }

  return element;
};
