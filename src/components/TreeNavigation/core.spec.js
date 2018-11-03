import { getItemMetadata } from './core';

describe('TreeNavigation', () => {
  describe('core', () => {
    describe('getItemMetadata', () => {
      context('without a parent', () => {
        context('with a label item', () => {
          it('returns a correct metadata', () => {
            const item = {
              name: 'item',
            };

            const expected = {
              path: '',
              target: '',
            };

            expect(getItemMetadata(item)).toEqual(expected);
          });
        });

        context('with an external item', () => {
          it('returns a correct metadata', () => {
            const item = {
              external: 'https://github.com',
            };

            const expected = {
              path: '',
              target: 'https://github.com',
            };

            expect(getItemMetadata(item)).toEqual(expected);
          });
        });

        context('with a route item', () => {
          it('returns a correct metadata', () => {
            const item = {
              route: 'route',
            };

            const expected = {
              path: '/route',
              target: '/route',
            };

            expect(getItemMetadata(item)).toEqual(expected);
          });
        });

        context('with an element item', () => {
          it('returns a correct metadata', () => {
            const item = {
              element: 'element',
            };

            const expected = {
              path: '',
              target: '/#element',
            };

            expect(getItemMetadata(item)).toEqual(expected);
          });
        });
      });

      context('with a parent', () => {
        context('with a label item', () => {
          it('returns correct metadata', () => {
            const parent = {
              meta: {
                path: '/home',
                target: '/home#element',
              },
            };

            const item = {
              name: 'item',
            };

            const expected = {
              path: '/home',
              target: '',
            };

            expect(getItemMetadata(item, parent)).toEqual(expected);
          });
        });

        context('with an external item', () => {
          it('returns a correct metadata', () => {
            const parent = {
              meta: {
                path: '/home',
                target: '/home#element',
              },
            };

            const item = {
              external: 'https://github.com',
            };

            const expected = {
              path: '/home',
              target: 'https://github.com',
            };

            expect(getItemMetadata(item, parent)).toEqual(expected);
          });
        });

        context('with a route item', () => {
          it('returns a correct metadata', () => {
            const parent = {
              meta: {
                path: '/home',
                target: '/home#element',
              },
            };

            const item = {
              route: 'route',
            };

            const expected = {
              path: '/home/route',
              target: '/home/route',
            };

            expect(getItemMetadata(item, parent)).toEqual(expected);
          });
        });

        context('with an element item', () => {
          it('returns a correct metadata', () => {
            const parent = {
              meta: {
                path: '/home',
                target: '/home#element',
              },
            };

            const item = {
              element: 'contact',
            };

            const expected = {
              path: '/home',
              target: '/home#contact',
            };

            expect(getItemMetadata(item, parent)).toEqual(expected);
          });
        });
      });
    });
  });
});
