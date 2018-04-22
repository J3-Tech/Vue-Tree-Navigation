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
      [true, '/path', '/path#element'], // ignores an element
      [false, '/another_path', '/path'],
      [false, '/', '/path'],
    ]).it(
      'returns %s for parent URL %s and URL %s',
      (expected, parentUrl, url) => {
        expect(startsWithUrl(parentUrl, url)).toBe(expected);
      }
    );
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
    each([
      ['', ''],
      ['/path', '/path'],
      ['/path', '/path#element'],
      ['/path', '/path#element-1#element-2'],
      ['#/path', '#/path'],
      ['#/path', '#/path#element'],
      ['#/path', '#/path#element-1#element-2'],
      ['/#/path', '/#/path#element'],
    ]).it('returns %s for path %s', (expected, path) => {
      expect(removeElementFromPath(path)).toBe(expected);
    });
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
