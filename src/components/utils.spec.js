import { removeElementFromPath, sanitizeRoute, sanitizeElement } from './utils';

describe('utils', () => {
  describe('sanitizeRoute', () => {
    context('with undefined route', () => {
      it('returns undefined', () => {
        expect(sanitizeRoute(undefined)).toBe(undefined);
      });
    });

    context('with route with backlash at the first position', () => {
      it('returns original route', () => {
        expect(sanitizeRoute('/route')).toBe('/route');
      });
    });

    context('with route without backlash at the first position', () => {
      it('adds backslash to the first position', () => {
        expect(sanitizeRoute('route')).toBe('/route');
      });
    });

    context('with route with backlash at the last position', () => {
      it('removes backslash from the last position', () => {
        expect(sanitizeRoute('route/')).toBe('/route');
      });
    });
  });

  describe('sanitizeElement', () => {
    context('with undefined element', () => {
      it('returns undefined', () => {
        expect(sanitizeElement(undefined)).toBe(undefined);
      });
    });

    context('with element with hash at the first position', () => {
      it('returns original element', () => {
        expect(sanitizeElement('#element')).toBe('#element');
      });

      context('with element without hash at the first position', () => {
        it('adds hash to the first position', () => {
          expect(sanitizeElement('element')).toBe('#element');
        });
      });
    });
  });

  describe('removeElementFromPath', () => {
    context('with empty path', () => {
      it('returns empty path', () => {
        expect(removeElementFromPath('')).toBe('');
      });
    });

    context('with path without element', () => {
      it('returns original path', () => {
        expect(removeElementFromPath('/path')).toBe('/path');
      });
    });

    context('with path containing an element', () => {
      it('cuts off the element', () => {
        expect(removeElementFromPath('/path#element')).toBe('/path');
      });
    });

    context('with path containing more elements', () => {
      it('cuts off all elements', () => {
        expect(removeElementFromPath('/path#element-1#element-2')).toBe(
          '/path'
        );
      });
    });

    context('with path containing # in the beginning of route', () => {
      it('returns original path', () => {
        expect(removeElementFromPath('#/path')).toBe('#/path');
      });
    });

    context(
      'with path containing # in the beginning of route and element on its end',
      () => {
        it('cuts off element', () => {
          expect(removeElementFromPath('#/path#element')).toBe('#/path');
        });
      }
    );

    context(
      'with path containing # in the beginning of route and two element on its end',
      () => {
        it('cuts off all elements', () => {
          expect(removeElementFromPath('#/path#element-1#element-2')).toBe(
            '#/path'
          );
        });
      }
    );
  });
});
