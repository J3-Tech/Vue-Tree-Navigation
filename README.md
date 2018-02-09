# vue-tree-navigation

A Vue.js tree navigation menu

[Demo](https://vue-tree-navigation.misrob.cz)

## Features:

* unlimited number of levels
* [vue-router](https://router.vuejs.org) support (v2.0.0 or higher)
* you can define default open level
* focused on core functionality, only necessary styles included - just apply your own styles like I did for demo page :wink:

## Requirements

* [vue-router](https://router.vuejs.org) (v2.0.0 or higher) - Optional. You need to install it to your project only if you need to render some menu items as router links.

## Installation

```console
$ npm install vue-tree-navigation
```

**main.js**

```javascript
import VueTreeNavigation from 'vue-tree-navigation';

Vue.use(VueTreeNavigation);
```

## Usage

```html
<vue-tree-navigation :items="menuItems" />
```

```javascript
export default {
  ...
  data() {
    return {
      menuItems: [
        { name: 'Products', children: [                       // category label, leads nowhere
          { name: 'Shoes', route: 'shoes' }                   // #/shoes
        ]},
        { name: 'About', route: 'about', children: [          // #/about
          { name: 'Contact', route: 'contact', children: [    // #/about/contact       
            { name: 'E-mail', element: '#email' },            // #/about/contact#email
            { name: 'Phone', element: '#phone' }              // #/about/contact#phone
          ]},
        ]},
      ],
    };
  },
  ...
};
```

**items** `Array`

An array containing navigation menu items.

`route`
Use this field for a router link URL.
You need to install `vue-router` to your project if you decide to use this field at least once.

`element` (the `element` field replaces v1 `href` field)
Use this field for an element URL.

You don't need to specify `route` or `element` field. Menu item will be rendered as a simple value instead of a hyperlink in this case so you can use it as a category label.

**defaultOpenLevel** `Number`

Optional. Default value is 0 (everything is closed).

## Examples

### 1. Simple navigation based on element IDs, no router

You can use the menu to navigate to elements at one page by passing the elements IDs to the `element` field. You don't need to install `vue-router` to your project in this case.

```html
<vue-tree-navigation :items="menuItems" />
```

```javascript
export default {
  ...
  data() {
    return {
      menuItems: [
        { name: 'Products', element: '#products' },              // #products
        { name: 'About', element: '#about', children: [          // #about
          { name: 'Contact', children: [                         // category label, leads nowhere
            { name: 'E-mail', element: '#email' },               // #email
            { name: 'Phone', element: '#phone' },                // #phone
          ]},
        ]},
      ],
    };
  },
  ...
};
```

### 2. Router navigation only

Routes are joined to reflect the menu tree structure.

```html
<vue-tree-navigation :items="menuItems" />
```

```javascript
export default {
  ...
  data() {
    return {
      menuItems: [
        { name: 'Products', route: 'products' },              // #/products
        { name: 'About', route: 'about', children: [          // #/about
          { name: 'Contact', route: 'contact', children: [    // #/about/contact
            { name: 'E-mail', route: 'email' },               // #/about/contact/email
            { name: 'Phone', route: 'phone' },                // #/about/contact/phone
          ]},
        ]},
      ],
    };
  },
  ...
};
```

### 3. Router links combined with element IDs

Routes are joined to reflect the menu tree structure. Elements are appended to their parent route.

Feel free to try on various parent-child combinations (like element parent - route child), there are no restrictions.

```html
<vue-tree-navigation :items="menuItems" />
```

```javascript
export default {
  ...
  data() {
    return {
      menuItems: [
        { name: 'Products', route: 'products' },              // #/products
        { name: 'About', route: 'about', children: [          // #/about
          { name: 'Contact', route: 'contact', children: [    // #/about/contact       
            { name: 'E-mail', element: '#email' },            // #/about/contact#email
            { name: 'Phone', element: '#phone', children: [   // #/about/contact#phone
              name: 'Office', element: '#phone-office' },     // #/about/contact#phone-office
            ]},             
          ]},
        ]},
      ],
    };
  },
  ...
};
```

## Scroll behaviour

If you need to jump directly to a particular anchor tag which is a children of a router view (like in the third example for `#/about/contact#email`), you need to modify the `scrollBehaviour` function as follows:

```javascript
new VueRouter({
  ...
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return { selector: to.hash }
    } else {
      return { x: 0, y: 0}
    }
  },
  ...
});
```

## Styling

All hyperlinks generated by `vue-router` are assigned `router-link` class so you can easily distinguish them from other hyperlinks.

All closed levels (`<ul>` elements) are assigned `closed` class.

## Developers

Install dependencies:

```console
$ npm install
```

Run tests:

```console
$ npm run test
```

Run tests in verbose mode:

```console
$ npm run test:verbose
```

Run development server:

```console
$ npm run dev
```

Build:

```console
$ npm run build
```

Run demo development server:

```console
$ cd demo
$ npm install
$ npm run dev
```

