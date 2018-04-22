import each from 'jest-each';

import {
  getRelativeUrl,
  removeElementFromPath,
  sanitizeElement,
  sanitizeRoute,
  startsWithUrl,
} from './utils';

describe('utils', () => {
  describe('startsWithUrl', () => {
    each([
      [true, '/path', '/path'],
      [true, '/path#element', '/path'],
      [true, '/path/another_path', '/path'],
      [true, '/#element', '/#element'],
      [false, '/another_path', '/path'],
      [false, '/', '/path'],
    ]).it(
      'returns %s for parent URL %s and URL %s',
      (expected, parentUrl, url) => {
        expect(startsWithUrl(parentUrl, url)).toBe(expected);
      }
    );

    it('ignores an element', () => {
      expect(startsWithUrl('/path', '/path#element')).toBe(true);
    });
  });

  describe('getRelativeUrl', () => {
    each([
      ['', '', ''],
      ['/path', 'http://site.io/path', 'http://site.io'],
      ['/path', 'http://site.io/path', 'http://site.io/'],
      ['/path#element', 'http://site.io/path#element', 'http://site.io'],
      ['/#element', 'http://site.io/#element', 'http://site.io'],
      ['/path', 'http://site.io/#/path', 'http://site.io'],
      ['/path#element', 'http://site.io/#/path#element', 'http://site.io'],
      ['/#element', 'http://site.io/#/#element', 'http://site.io'],
    ]).it('returns %s for URL %s and origin %s', (expected, url, origin) => {
      expect(getRelativeUrl(url, origin)).toBe(expected);
    });
  });

  describe('removeElementFromPath', () => {
    context('with an empty path', () => {
      it('returns an empty path', () => {
        expect(removeElementFromPath('')).toBe('');
      });
    });

    context('with a path without an element', () => {
      it('returns the original path', () => {
        expect(removeElementFromPath('/path')).toBe('/path');
      });
    });

    context('with a path containing an element', () => {
      it('removes the element', () => {
        expect(removeElementFromPath('/path#element')).toBe('/path');
      });
    });

    context('with a path containing more elements', () => {
      it('removes all elements', () => {
        expect(removeElementFromPath('/path#element-1#element-2')).toBe(
          '/path'
        );
      });
    });

    context('with a path containing # in the beginning of a route', () => {
      it('returns the original path', () => {
        expect(removeElementFromPath('#/path')).toBe('#/path');
      });
    });

    context(
      'with a path containing # in the beginning of route and an element on its end',
      () => {
        it('removes the element', () => {
          expect(removeElementFromPath('#/path#element')).toBe('#/path');
        });
      }
    );

    context(
      'with a path containing # in the beginning of route and two element on its end',
      () => {
        it('removes all elements', () => {
          expect(removeElementFromPath('#/path#element-1#element-2')).toBe(
            '#/path'
          );
        });
      }
    );
  });

  describe('sanitizeElement', () => {
    context('with undefined element', () => {
      it('returns undefined', () => {
        expect(sanitizeElement(undefined)).toBe(undefined);
      });
    });

    context('with an element with hash at the first position', () => {
      it('returns the original element', () => {
        expect(sanitizeElement('#element')).toBe('#element');
      });

      context('with an element without hash at the first position', () => {
        it('adds hash to the first position', () => {
          expect(sanitizeElement('element')).toBe('#element');
        });
      });
    });
  });

  describe('sanitizeRoute', () => {
    context('with undefined route', () => {
      it('returns undefined', () => {
        expect(sanitizeRoute(undefined)).toBe(undefined);
      });
    });

    context('with a route with backlash at the first position', () => {
      it('returns the original route', () => {
        expect(sanitizeRoute('/route')).toBe('/route');
      });
    });

    context('with a route without backlash at the first position', () => {
      it('adds backslash to the first position', () => {
        expect(sanitizeRoute('route')).toBe('/route');
      });
    });

    context('with a route with backlash at the last position', () => {
      it('removes backslash from the last position', () => {
        expect(sanitizeRoute('route/')).toBe('/route');
      });
    });
  });
});
