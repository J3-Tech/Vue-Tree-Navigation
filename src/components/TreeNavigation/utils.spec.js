import utils from './utils';

import {
  PATH_TYPE_NONE,
  PATH_TYPE_ELEMENT,
  PATH_TYPE_ROUTE,
} from '../../config';

describe('TreeNavigation', () => {
  describe('utils', () => {
    describe('sanitizeRoute', () => {
      context('with undefined route', () => {
        it('returns undefined', () => {
          expect(utils.sanitizeRoute(undefined)).toBe(undefined);
        });
      });

      context('with route with backlash at the first position', () => {
        it('returns original route', () => {
          expect(utils.sanitizeRoute('/route')).toBe('/route');
        });
      });

      context('with route without backlash at the first position', () => {
        it('adds backslash to the first position', () => {
          expect(utils.sanitizeRoute('route')).toBe('/route');
        });
      });

      context('with route with backlash at the last position', () => {
        it('removes backslash from the last position', () => {
          expect(utils.sanitizeRoute('route/')).toBe('/route');
        });
      });
    });

    describe('sanitizeElement', () => {
      context('with undefined element', () => {
        it('returns undefined', () => {
          expect(utils.sanitizeElement(undefined)).toBe(undefined);
        });
      });

      context('with element with hash at the first position', () => {
        it('returns original element', () => {
          expect(utils.sanitizeElement('#element')).toBe('#element');
        });

        context('with element without hash at the first position', () => {
          it('adds hash to the first position', () => {
            expect(utils.sanitizeElement('element')).toBe('#element');
          });
        });
      });
    });

    describe('removeElementFromPath', () => {
      context('with empty path', () => {
        it('returns empty path', () => {
          expect(utils.removeElementFromPath('')).toBe('');
        });
      });

      context('with path without element', () => {
        it('returns original path', () => {
          expect(utils.removeElementFromPath('/path')).toBe('/path');
        });
      });

      context('with path containing an element', () => {
        it('returns original path', () => {
          expect(utils.removeElementFromPath('/path#element')).toBe('/path');
        });
      });

      context('with path containing more elements', () => {
        it('returns original path', () => {
          expect(utils.removeElementFromPath('/path#element-1#element-2')).toBe(
            '/path'
          );
        });
      });
    });

    describe('getItemMetadata', () => {
      context('without parent', () => {
        context('with simple value item', () => {
          it('returns correct metadata', () => {
            const item = {
              name: 'item',
            };

            const expected = {
              path: undefined,
              pathType: PATH_TYPE_NONE,
            };

            expect(utils.getItemMetadata(item)).toEqual(expected);
          });
        });

        context('with route item', () => {
          it('returns correct metadata', () => {
            const item = {
              route: 'route',
            };

            const expected = {
              path: '/route',
              pathType: PATH_TYPE_ROUTE,
            };

            expect(utils.getItemMetadata(item)).toEqual(expected);
          });
        });

        context('with element item', () => {
          it('returns correct metadata', () => {
            const item = {
              element: 'element',
            };

            const expected = {
              path: '#element',
              pathType: PATH_TYPE_ELEMENT,
            };

            expect(utils.getItemMetadata(item)).toEqual(expected);
          });
        });
      });

      context('with route parent and route item', () => {
        it('returns correct metadata', () => {
          const parent = {
            meta: {
              path: '/home',
              pathType: PATH_TYPE_ROUTE,
            },
          };

          const item = {
            route: 'product',
          };

          const expected = {
            path: '/home/product',
            pathType: PATH_TYPE_ROUTE,
          };

          expect(utils.getItemMetadata(item, parent)).toEqual(expected);
        });
      });

      context('with route parent and element item', () => {
        it('returns correct metadata', () => {
          const parent = {
            meta: {
              path: '/home',
              pathType: PATH_TYPE_ROUTE,
            },
          };

          const item = {
            element: 'about',
          };

          const expected = {
            path: '/home#about',
            pathType: PATH_TYPE_ROUTE,
          };

          expect(utils.getItemMetadata(item, parent)).toEqual(expected);
        });
      });

      context('with route parent and simple value item', () => {
        it('returns correct metadata', () => {
          const parent = {
            meta: {
              path: '/home',
              pathType: PATH_TYPE_ROUTE,
            },
          };

          const item = {
            name: 'item',
          };

          const expected = {
            path: '/home',
            pathType: PATH_TYPE_ROUTE,
          };

          expect(utils.getItemMetadata(item, parent)).toEqual(expected);
        });
      });

      context('with element parent and route item', () => {
        it('returns correct metadata', () => {
          const parent = {
            meta: {
              path: '#element',
              pathType: PATH_TYPE_ELEMENT,
            },
          };

          const item = {
            route: 'route',
          };

          const expected = {
            path: '/route',
            pathType: PATH_TYPE_ROUTE,
          };

          expect(utils.getItemMetadata(item, parent)).toEqual(expected);
        });
      });

      context('with element parent and element item', () => {
        it('returns correct metadata', () => {
          const parent = {
            meta: {
              path: '#parent',
              pathType: PATH_TYPE_ELEMENT,
            },
          };

          const item = {
            element: 'child',
          };

          const expected = {
            path: '#child',
            pathType: PATH_TYPE_ELEMENT,
          };

          expect(utils.getItemMetadata(item, parent)).toEqual(expected);
        });
      });

      context('with element parent and simple value item', () => {
        it('returns correct metadata', () => {
          const parent = {
            meta: {
              path: '#element',
              pathType: PATH_TYPE_ELEMENT,
            },
          };

          const item = {
            name: 'item',
          };

          const expected = {
            path: undefined,
            pathType: PATH_TYPE_NONE,
          };

          expect(utils.getItemMetadata(item, parent)).toEqual(expected);
        });
      });

      context('with label parent and route item', () => {
        it('returns correct metadata', () => {
          const parent = {
            meta: {
              path: undefined,
              pathType: PATH_TYPE_NONE,
            },
          };

          const item = {
            route: 'route',
          };

          const expected = {
            path: '/route',
            pathType: PATH_TYPE_ROUTE,
          };

          expect(utils.getItemMetadata(item, parent)).toEqual(expected);
        });
      });

      context('with label parent and element item', () => {
        it('returns correct metadata', () => {
          const parent = {
            meta: {
              path: undefined,
              pathType: PATH_TYPE_NONE,
            },
          };

          const item = {
            element: 'element',
          };

          const expected = {
            path: '#element',
            pathType: PATH_TYPE_ELEMENT,
          };

          expect(utils.getItemMetadata(item, parent)).toEqual(expected);
        });
      });

      context('with label parent and label item', () => {
        it('returns correct metadata', () => {
          const parent = {
            meta: {
              path: undefined,
              pathType: PATH_TYPE_NONE,
            },
          };

          const item = {
            name: 'item',
          };

          const expected = {
            path: undefined,
            pathType: PATH_TYPE_NONE,
          };

          expect(utils.getItemMetadata(item, parent)).toEqual(expected);
        });
      });
    });

    describe('insertMetadataToItems', () => {
      it('inserts correct metadata to each item', () => {
        // it's a little bit wild structure :) but I try to simulate
        // all possible relations between parents and childs to test corner
        // cases
        const items = [
          { name: 'Route 1', route: 'route-1' },
          {
            name: 'Route 2',
            route: 'route-2',
            children: [
              {
                name: 'Route 2-I',
                route: 'route-2-I',
                children: [
                  {
                    name: 'Element 1',
                    element: 'element-1',
                    children: [{ name: 'Route 2-I-a', route: 'route-2-I-a' }],
                  },
                  { name: 'Element 2', element: 'element-2' },
                ],
              },
              {
                name: 'Label 1',
                children: [
                  { name: 'Element 3', element: 'element-3' },
                  {
                    name: 'Label 2',
                    children: [
                      {
                        name: 'Element 4',
                        element: 'element-4',
                        children: [
                          { name: 'Route 5', route: 'route-5' },
                          { name: 'Element 5', element: 'element-5' },
                        ],
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            name: 'Label 3',
            children: [{ name: 'Route 6', route: 'route-6' }],
          },
          {
            name: 'Label 4',
            children: [{ name: 'Element 6', element: 'element-6' }],
          },
          {
            name: 'Element 7',
            element: 'element-7',
            children: [{ name: 'Label 5' }],
          },
          {
            name: 'Element 8',
            element: 'element-8',
            children: [{ name: 'Route 7', route: 'route-7' }],
          },
        ];

        const expected = [
          {
            name: 'Route 1',
            route: 'route-1',
            meta: { path: '/route-1', pathType: PATH_TYPE_ROUTE },
          },
          {
            name: 'Route 2',
            route: 'route-2',
            meta: { path: '/route-2', pathType: PATH_TYPE_ROUTE },
            children: [
              {
                name: 'Route 2-I',
                route: 'route-2-I',
                meta: { path: '/route-2/route-2-I', pathType: PATH_TYPE_ROUTE },
                children: [
                  {
                    name: 'Element 1',
                    element: 'element-1',
                    meta: {
                      path: '/route-2/route-2-I#element-1',
                      pathType: PATH_TYPE_ROUTE,
                    },
                    children: [
                      {
                        name: 'Route 2-I-a',
                        route: 'route-2-I-a',
                        meta: {
                          path: '/route-2/route-2-I/route-2-I-a',
                          pathType: PATH_TYPE_ROUTE,
                        },
                      },
                    ],
                  },
                  {
                    name: 'Element 2',
                    element: 'element-2',
                    meta: {
                      path: '/route-2/route-2-I#element-2',
                      pathType: PATH_TYPE_ROUTE,
                    },
                  },
                ],
              },
              {
                name: 'Label 1',
                meta: { path: '/route-2', pathType: PATH_TYPE_ROUTE },
                children: [
                  {
                    name: 'Element 3',
                    element: 'element-3',
                    meta: {
                      path: '/route-2#element-3',
                      pathType: PATH_TYPE_ROUTE,
                    },
                  },
                  {
                    name: 'Label 2',
                    meta: { path: '/route-2', pathType: PATH_TYPE_ROUTE },
                    children: [
                      {
                        name: 'Element 4',
                        element: 'element-4',
                        meta: {
                          path: '/route-2#element-4',
                          pathType: PATH_TYPE_ROUTE,
                        },
                        children: [
                          {
                            name: 'Route 5',
                            route: 'route-5',
                            meta: {
                              path: '/route-2/route-5',
                              pathType: PATH_TYPE_ROUTE,
                            },
                          },
                          {
                            name: 'Element 5',
                            element: 'element-5',
                            meta: {
                              path: '/route-2#element-5',
                              pathType: PATH_TYPE_ROUTE,
                            },
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            name: 'Label 3',
            meta: { path: undefined, pathType: PATH_TYPE_NONE },
            children: [
              {
                name: 'Route 6',
                route: 'route-6',
                meta: { path: '/route-6', pathType: PATH_TYPE_ROUTE },
              },
            ],
          },
          {
            name: 'Label 4',
            meta: { path: undefined, pathType: PATH_TYPE_NONE },
            children: [
              {
                name: 'Element 6',
                element: 'element-6',
                meta: { path: '#element-6', pathType: PATH_TYPE_ELEMENT },
              },
            ],
          },
          {
            name: 'Element 7',
            element: 'element-7',
            meta: { path: '#element-7', pathType: PATH_TYPE_ELEMENT },
            children: [
              {
                name: 'Label 5',
                meta: { path: undefined, pathType: PATH_TYPE_NONE },
              },
            ],
          },
          {
            name: 'Element 8',
            element: 'element-8',
            meta: { path: '#element-8', pathType: PATH_TYPE_ELEMENT },
            children: [
              {
                name: 'Route 7',
                route: 'route-7',
                meta: { path: '/route-7', pathType: PATH_TYPE_ROUTE },
              },
            ],
          },
        ];

        utils.insertMetadataToItems(items);
        expect(items).toEqual(expected);
      });
    });
  });
});
