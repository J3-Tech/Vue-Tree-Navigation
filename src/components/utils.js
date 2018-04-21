/**
 * Check if a parent URL contains an URL.
 */
export const containsUrl = (parentUrl, url) => {
  if (!url.startsWith('/#')) {
    url = removeElementFromPath(url);
  }

  if (parentUrl.startsWith(url)) {
    return true;
  }

  return false;
};

/**
 * Remove a domain and router's `/#` from URL.
 */
export const getRelativeUrl = (url, origin) => {
  let relativeUrl = url.replace('/#/', '/');

  if (origin[origin.length - 1] === '/') {
    origin = origin.slice(0, -1);
  }
  relativeUrl = relativeUrl.replace(origin, '');

  return sanitizeRoute(relativeUrl);
};

/**
 * Remove an element appended to the end of a path.
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
