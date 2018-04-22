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
          meta: {
            target: '',
          },
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
            item.meta.target = '/products';
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
                    target: '/about',
                  },
                },
                {
                  name: 'Products',
                  meta: {
                    target: '/products',
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
                    target: '/about',
                  },
                },
                {
                  name: 'Contact',
                  meta: {
                    target: '/contact',
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
            meta: { path: '/route-1', target: '/route-1' },
          },
          {
            name: 'Route 2',
            route: 'route-2',
            meta: { path: '/route-2', target: '/route-2' },
            children: [
              {
                name: 'Route 2-I',
                route: 'route-2-I',
                meta: {
                  path: '/route-2/route-2-I',
                  target: '/route-2/route-2-I',
                },
                children: [
                  {
                    name: 'Element 1',
                    element: 'element-1',
                    meta: {
                      path: '/route-2/route-2-I',
                      target: '/route-2/route-2-I#element-1',
                    },
                    children: [
                      {
                        name: 'Route 2-I-a',
                        route: 'route-2-I-a',
                        meta: {
                          path: '/route-2/route-2-I/route-2-I-a',
                          target: '/route-2/route-2-I/route-2-I-a',
                        },
                      },
                    ],
                  },
                  {
                    name: 'Element 2',
                    element: 'element-2',
                    meta: {
                      path: '/route-2/route-2-I',
                      target: '/route-2/route-2-I#element-2',
                    },
                  },
                ],
              },
              {
                name: 'Label 1',
                meta: { path: '/route-2', target: '' },
                children: [
                  {
                    name: 'Element 3',
                    element: 'element-3',
                    meta: {
                      path: '/route-2',
                      target: '/route-2#element-3',
                    },
                  },
                  {
                    name: 'Github',
                    external: 'https://github.com',
                    meta: {
                      path: '/route-2',
                      target: 'https://github.com',
                    },
                  },
                  {
                    name: 'Label 2',
                    meta: { path: '/route-2', target: '' },
                    children: [
                      {
                        name: 'Element 4',
                        element: 'element-4',
                        meta: {
                          path: '/route-2',
                          target: '/route-2#element-4',
                        },
                        children: [
                          {
                            name: 'Route 5',
                            route: 'route-5',
                            meta: {
                              path: '/route-2/route-5',
                              target: '/route-2/route-5',
                            },
                          },
                          {
                            name: 'Element 5',
                            element: 'element-5',
                            meta: {
                              path: '/route-2',
                              target: '/route-2#element-5',
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
            meta: { path: '', target: '' },
            children: [
              {
                name: 'Route 6',
                route: 'route-6',
                meta: { path: '/route-6', target: '/route-6' },
              },
            ],
          },
          {
            name: 'Label 4',
            meta: { path: '', target: '' },
            children: [
              {
                name: 'Element 6',
                element: 'element-6',
                meta: { path: '', target: '/#element-6' },
              },
            ],
          },
          {
            name: 'Element 7',
            element: 'element-7',
            meta: { path: '', target: '/#element-7' },
            children: [
              {
                name: 'Label 5',
                meta: { path: '', target: '' },
              },
            ],
          },
          {
            name: 'Element 8',
            element: 'element-8',
            meta: { path: '', target: '/#element-8' },
            children: [
              {
                name: 'Route 7',
                route: 'route-7',
                meta: { path: '/route-7', target: '/route-7' },
              },
            ],
          },
          {
            name: 'Route 8',
            route: 'route-8',
            meta: { path: '/route-8', target: '/route-8' },
            children: [
              {
                name: 'Bitbucket',
                external: 'https://bitbucket.com',
                meta: { path: '/route-8', target: 'https://bitbucket.com' },
                children: [
                  {
                    name: 'Route 9',
                    route: 'route-9',
                    meta: {
                      path: '/route-8/route-9',
                      target: '/route-8/route-9',
                    },
                  },
                  {
                    name: 'Element 9',
                    element: 'element-9',
                    meta: {
                      path: '/route-8',
                      target: '/route-8#element-9',
                    },
                  },
                ],
              },
            ],
          },
          {
            name: 'Codepen',
            external: 'https://codepen.io',
            meta: { path: '', target: 'https://codepen.io' },
          },
        ];

        insertMetadataToItems(items);
        expect(items).toEqual(expected);
      });
    });
  });
});
