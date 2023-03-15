import { getItemMetadata } from './core';

describe('TreeNavigation', () => {
  describe('core', () => {
    describe('getItemMetadata', () => {
      describe('without a parent', () => {
        describe('with a label item', () => {
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

        describe('with an external item', () => {
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

        describe('with a path item', () => {
          it('returns a correct metadata', () => {
            const item = {
              path: 'path',
            };

            const expected = {
              path: '/path',
              target: '/path',
            };

            expect(getItemMetadata(item)).toEqual(expected);
          });
        });

        describe('with an element item', () => {
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

      describe('with a parent', () => {
        describe('with a label item', () => {
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

        describe('with an external item', () => {
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

        describe('with a path item', () => {
          it('returns a correct metadata', () => {
            const parent = {
              meta: {
                path: '/home',
                target: '/home#element',
              },
            };

            const item = {
              path: 'path',
            };

            const expected = {
              path: '/home/path',
              target: '/home/path',
            };

            expect(getItemMetadata(item, parent)).toEqual(expected);
          });
        });

        describe('with an element item', () => {
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
