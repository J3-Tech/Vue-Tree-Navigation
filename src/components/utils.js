/**
 * First character should be #.
 */
export const sanitizeElement = element => {
  if (element === undefined || element === '') {
    return element;
  }

  if (element[0] !== '#') {
    element = '#' + element;
  }

  return element;
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
