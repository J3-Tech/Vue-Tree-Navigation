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
export const sanitizePath = path => {
  if (path === undefined) {
    return;
  }

  if (path[0] !== '/') {
    path = '/' + path;
  }

  if (path[path.length - 1] === '/') {
    path = path.slice(0, -1);
  }

  return path;
};
