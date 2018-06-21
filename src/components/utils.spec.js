import each from 'jest-each';

import { sanitizeElement, sanitizeRoute } from './utils';

describe('utils', () => {
  describe('sanitizeElement', () => {
    each([
      [undefined, undefined],
      ['', ''],
      ['#element', '#element'],
      ['#element', 'element'],
    ]).it('returns %s for path %s', (expected, element) => {
      expect(sanitizeElement(element)).toBe(expected);
    });
  });

  describe('sanitizeRoute', () => {
    each([
      [undefined, undefined],
      ['', ''],
      ['/route', '/route'],
      ['/route', 'route'],
      ['/route', 'route/'],
    ]).it('returns %s for path %s', (expected, route) => {
      expect(sanitizeRoute(route)).toBe(expected);
    });
  });
});
