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
        { name: 'Products', to: 'products' },              // #/products
        { name: 'About', to: 'about', children: [          // #/about
          { name: 'Contact', to: 'contact', children: [    // #/about/contact       
            { name: 'E-mail', href: '#email' },            // #/about/contact#email
            { name: 'Phone', href: '#phone' },             // #/about/contact#phone
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

`to`
Use this field in case you need to treat the URL like `<router-link>` URL.
You need to install `vue-router` to your project if you decide to use this field at least once.

`href`
Use this field in case you need to treat the URL like standard `<a>` URL.

You don't need to specify `href` or `to` field. Menu item will be rendered as a simple value instead of a hyperlink in this case.

**defaultOpenLevel** `Number`

Optional. Default value is 0 (everything is closed).

## Examples

### 1. Simple navigation based on element IDs, no router

You can use the menu to navigate to elements at one page by passing the elements IDs to the `href` field. You don't need to install `vue-router` to your project in this case.

```html
<vue-tree-navigation :items="menuItems" />
```

```javascript
export default {
  ...
  data() {
    return {
      menuItems: [
        { name: 'Products', href: '#products' },              // #products
        { name: 'About', href: '#about', children: [          // #about
          { name: 'Contact', children: [   
            { name: 'E-mail', href: '#email' },               // #email
            { name: 'Phone', href: '#phone' },                // #phone
          ]},
        ]},
      ],
    };
  },
  ...
};
```

### 2. Router navigation only

Just use `to` everywhere.

```html
<vue-tree-navigation :items="menuItems" />
```

```javascript
export default {
  ...
  data() {
    return {
      menuItems: [
        { name: 'Products', to: 'products' },              // #/products
        { name: 'About', to: 'about', children: [          // #/about
          { name: 'Contact', to: 'contact', children: [    // #/about/contact
            { name: 'E-mail', to: 'email' },               // #/about/contact/email
            { name: 'Phone', to: 'phone' },                // #/about/contact/phone
          ]},
        ]},
      ],
    };
  },
  ...
};
```

### 3. Router links combined with element IDs

```html
<vue-tree-navigation :items="menuItems" />
```

```javascript
export default {
  ...
  data() {
    return {
      menuItems: [
        { name: 'Products', to: 'products' },              // #/products
        { name: 'About', to: 'about', children: [          // #/about
          { name: 'Contact', to: 'contact', children: [    // #/about/contact       
            { name: 'E-mail', href: '#email' },            // #/about/contact#email
            { name: 'Phone', href: '#phone' },             // #/about/contact#phone
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

All router links are assigned a `router-link` class so you can easily distinguish them from simple hyperlinks by using `.router-link` selector in your css.

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

