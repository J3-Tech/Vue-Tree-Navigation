import {
  PATH_TYPE_NONE,
  PATH_TYPE_ELEMENT,
  PATH_TYPE_ROUTE,
  PATH_TYPE_EXTERNAL,
} from '../../config';

import {
  getItemMetadata,
  insertMetadataToItems,
  renderLevelAsOpen,
} from './core';

describe('TreeNavigation', () => {
  describe('core', () => {
    describe('getItemMetadata', () => {
      context('without a parent', () => {
        context('with a label item', () => {
          it('returns correct metadata', () => {
            const item = {
              name: 'item',
            };

            const expected = {
              path: undefined,
              pathType: PATH_TYPE_NONE,
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
              path: 'https://github.com',
              pathType: PATH_TYPE_EXTERNAL,
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
              pathType: PATH_TYPE_ROUTE,
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
              path: '/#element',
              pathType: PATH_TYPE_ELEMENT,
            };

            expect(getItemMetadata(item)).toEqual(expected);
          });
        });
      });

      context('with a route parent and an external item', () => {
        it('returns a correct metadata', () => {
          const parent = {
            meta: {
              path: '/home',
              pathType: PATH_TYPE_ROUTE,
            },
          };

          const item = {
            external: 'https://github.com',
          };

          const expected = {
            path: '/home',
            pathType: PATH_TYPE_ROUTE,
          };

          expect(getItemMetadata(item, parent)).toEqual(expected);
        });
      });

      context('with a route parent and a route item', () => {
        it('returns a correct metadata', () => {
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

          expect(getItemMetadata(item, parent)).toEqual(expected);
        });
      });

      context('with a route parent and an element item', () => {
        it('returns a correct metadata', () => {
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

          expect(getItemMetadata(item, parent)).toEqual(expected);
        });
      });

      context('with a route parent and a label item', () => {
        it('returns a correct metadata', () => {
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

          expect(getItemMetadata(item, parent)).toEqual(expected);
        });
      });

      context('with an element parent and an external item', () => {
        it('returns a correct metadata', () => {
          const parent = {
            meta: {
              path: '#element',
              pathType: PATH_TYPE_ELEMENT,
            },
          };

          const item = {
            external: 'https://github.com',
          };

          const expected = {
            path: 'https://github.com',
            pathType: PATH_TYPE_EXTERNAL,
          };

          expect(getItemMetadata(item, parent)).toEqual(expected);
        });
      });

      context('with an element parent and a route item', () => {
        it('returns a correct metadata', () => {
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

          expect(getItemMetadata(item, parent)).toEqual(expected);
        });
      });

      context('with an element parent and an element item', () => {
        it('returns a correct metadata', () => {
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

          expect(getItemMetadata(item, parent)).toEqual(expected);
        });
      });

      context('with an element parent and a label item', () => {
        it('returns a correct metadata', () => {
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

          expect(getItemMetadata(item, parent)).toEqual(expected);
        });
      });

      context('with a label parent and an external item', () => {
        it('returns a correct metadata', () => {
          const parent = {
            meta: {
              path: undefined,
              pathType: PATH_TYPE_NONE,
            },
          };

          const item = {
            external: 'https://github.com',
          };

          const expected = {
            path: 'https://github.com',
            pathType: PATH_TYPE_EXTERNAL,
          };

          expect(getItemMetadata(item, parent)).toEqual(expected);
        });
      });

      context('with a label parent and a route item', () => {
        it('returns a correct metadata', () => {
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

          expect(getItemMetadata(item, parent)).toEqual(expected);
        });
      });

      context('with a label parent and an element item', () => {
        it('returns a correct metadata', () => {
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
            path: '/#element',
            pathType: PATH_TYPE_ELEMENT,
          };

          expect(getItemMetadata(item, parent)).toEqual(expected);
        });
      });

      context('with a label parent and a label item', () => {
        it('returns a correct metadata', () => {
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

          expect(getItemMetadata(item, parent)).toEqual(expected);
        });
      });

      context('with an external parent and an external item', () => {
        it('returns a correct metadata', () => {
          const parent = {
            meta: {
              path: 'https://github.com',
              pathType: PATH_TYPE_EXTERNAL,
            },
          };

          const item = {
            external: 'https://slack.com',
          };

          const expected = {
            path: 'https://slack.com',
            pathType: PATH_TYPE_EXTERNAL,
          };

          expect(getItemMetadata(item, parent)).toEqual(expected);
        });
      });

      context('with an external parent and a route item', () => {
        it('returns a correct metadata', () => {
          const parent = {
            meta: {
              path: 'https://github.com',
              pathType: PATH_TYPE_EXTERNAL,
            },
          };

          const item = {
            route: 'route',
          };

          const expected = {
            path: '/route',
            pathType: PATH_TYPE_ROUTE,
          };

          expect(getItemMetadata(item, parent)).toEqual(expected);
        });
      });

      context('with an external parent and an element item', () => {
        it('returns a correct metadata', () => {
          const parent = {
            meta: {
              path: 'https://github.com',
              pathType: PATH_TYPE_EXTERNAL,
            },
          };

          const item = {
            element: 'element',
          };

          const expected = {
            path: '#element',
            pathType: PATH_TYPE_ELEMENT,
          };

          expect(getItemMetadata(item, parent)).toEqual(expected);
        });
      });

      context('with an external parent and a label item', () => {
        it('returns a correct metadata', () => {
          const parent = {
            meta: {
              path: 'https://github.com',
              pathType: PATH_TYPE_EXTERNAL,
            },
          };

          const item = {
            name: 'Contact',
          };

          const expected = {
            path: undefined,
            pathType: PATH_TYPE_NONE,
          };

          expect(getItemMetadata(item, parent)).toEqual(expected);
        });
      });
    });

    describe('renderLevelAsOpen', () => {
      let item, level, defaultOpenLevel;

      beforeAll(() => {
        jsdom.reconfigure({
          url: 'https://mypage.com/products/shoes',
        });
      });

      afterAll(() => {
        jsdom.reconfigure({
          url: 'https://mypage.com',
        });
      });

      beforeEach(() => {
        item = {
          meta: {},
        };
        defaultOpenLevel = 2;
      });

      context('when a level is less than a default open level', () => {
        it('returns true', () => {
          level = 1;

          expect(renderLevelAsOpen(item, level, defaultOpenLevel)).toBe(true);
        });
      });

      context('when a level is equal to a default open level', () => {
        it('returns true', () => {
          level = 2;

          expect(renderLevelAsOpen(item, level, defaultOpenLevel)).toBe(true);
        });
      });

      context('when a level greater than a default open level', () => {
        beforeEach(() => {
          level = 3;
        });

        context("when an item's URL is a child of a current URL", () => {
          beforeEach(() => {
            item.meta.path = '/products';
          });

          it('returns true', () => {
            expect(renderLevelAsOpen(item, level, defaultOpenLevel)).toBe(true);
          });
        });

        context(
          'when an item has at least one child which URL is a child of a current URL',
          () => {
            beforeEach(() => {
              item.children = [
                {
                  name: 'About',
                  meta: {
                    path: '/about',
                  },
                },
                {
                  name: 'Products',
                  meta: {
                    path: '/products',
                  },
                },
              ];
            });

            it('returns true', () => {
              expect(renderLevelAsOpen(item, level, defaultOpenLevel)).toBe(
                true
              );
            });
          }
        );

        context(
          'when an item has no child which URL is a child of a current URL',
          () => {
            beforeEach(() => {
              item.children = [
                {
                  name: 'About',
                  meta: {
                    path: '/about',
                  },
                },
                {
                  name: 'Contact',
                  meta: {
                    path: '/contact',
                  },
                },
              ];
            });

            it('returns false', () => {
              expect(renderLevelAsOpen(item, level, defaultOpenLevel)).toBe(
                false
              );
            });
          }
        );
      });
    });

    describe('insertMetadataToItems', () => {
      it('inserts a correct metadata to each item', () => {
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
                  { name: 'Github', external: 'https://github.com' },
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
          {
            name: 'Route 8',
            route: 'route-8',
            children: [
              {
                name: 'Bitbucket',
                external: 'https://bitbucket.com',
                children: [
                  { name: 'Route 9', route: 'route-9' },
                  { name: 'Element 9', element: 'element-9' },
                ],
              },
            ],
          },
          { name: 'Codepen', external: 'https://codepen.io' },
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
                    name: 'Github',
                    external: 'https://github.com',
                    meta: {
                      path: '/route-2',
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
                meta: { path: '/#element-6', pathType: PATH_TYPE_ELEMENT },
              },
            ],
          },
          {
            name: 'Element 7',
            element: 'element-7',
            meta: { path: '/#element-7', pathType: PATH_TYPE_ELEMENT },
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
            meta: { path: '/#element-8', pathType: PATH_TYPE_ELEMENT },
            children: [
              {
                name: 'Route 7',
                route: 'route-7',
                meta: { path: '/route-7', pathType: PATH_TYPE_ROUTE },
              },
            ],
          },
          {
            name: 'Route 8',
            route: 'route-8',
            meta: { path: '/route-8', pathType: PATH_TYPE_ROUTE },
            children: [
              {
                name: 'Bitbucket',
                external: 'https://bitbucket.com',
                meta: { path: '/route-8', pathType: PATH_TYPE_ROUTE },
                children: [
                  {
                    name: 'Route 9',
                    route: 'route-9',
                    meta: {
                      path: '/route-8/route-9',
                      pathType: PATH_TYPE_ROUTE,
                    },
                  },
                  {
                    name: 'Element 9',
                    element: 'element-9',
                    meta: {
                      path: '/route-8#element-9',
                      pathType: PATH_TYPE_ROUTE,
                    },
                  },
                ],
              },
            ],
          },
          {
            name: 'Codepen',
            external: 'https://codepen.io',
            meta: { path: 'https://codepen.io', pathType: PATH_TYPE_EXTERNAL },
          },
        ];

        insertMetadataToItems(items);
        expect(items).toEqual(expected);
      });
    });
  });
});
