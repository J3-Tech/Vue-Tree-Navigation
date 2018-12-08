# vue-tree-navigation [![Version](https://img.shields.io/npm/v/vue-tree-navigation.svg)](https://www.npmjs.com/package/vue-tree-navigation) [![License](https://img.shields.io/npm/l/vue-tree-navigation.svg)](https://www.npmjs.com/package/vue-tree-navigation)

> Vue.js 2 tree navigation with vue-router support

For more detailed information see [documentation/demo](https://misrob.github.io/vue-tree-navigation)

## Features

- unlimited number of levels
- optional [vue-router](https://router.vuejs.org/en/) support (v2.0.0 or higher)
- generate navigation items automatically from _vue-router_ routes or define them manually
- define a default open level
- auto-open a level when a corresponding URL visited
- focused on core functionality, only necessary styles included
- elements are provided with meaningful classes to make customizations comfortable (for example `NavigationItem--active`, `NavigationLevel--level-1`, `NavigationLevel--closed`)

## Example

### 1. Navigation items generated from _vue-router_ routes

Let's suppose you use _vue-router_ with the following routes definition

```javascript
const routes = [
  {
    name: 'Home',
    path: '/',
  },
  {
    name: 'Running',
    path: '/running',
    children: [
      {
        name: 'Barefoot',
        path: 'barefoot',
      },
    ],
  },
  {
    name: 'Yoga',
    path: '/yoga',
    children: [
      {
        name: 'Mats',
        path: 'mats',
      },
      {
        name: 'Tops',
        path: 'tops',
      },
    ],
  },
  {
    name: 'About',
    path: '/about',
    children: [
      {
        name: 'Career',
        path: 'career',
        children: [
          {
            name: 'Design',
            path: 'design',
          },
        ],
      },
    ],
  },
];
```

Then simply include _vue-tree-navigation_

```html
<template>
  <vue-tree-navigation />
</template>
```

and it will generate the following menu:

```
- Home          // --> /
- Running       // --> /running
  - Barefoot    // --> /running/barefoot
- Yoga          // --> /yoga
  - Mats        // --> /yoga/mats
  - Tops        // --> /yoga/tops
- About         // --> /about
  - Career      // --> /about/career
    - Design    // --> /about/career/design
```

Do not forget to use named routes since _vue-tree-navigation_ uses `name` field to label navigation items.

### 2. Menu items defined manually

The following configuration

```html
<template>
  <vue-tree-navigation :items="items" />
</template>

<script>
  export default {
    data() {
      return {
        items: [
          { name: 'Products', children: [
            { name: 'Shoes', path: 'shoes' }
          ]},
          { name: 'About', path: 'about', children: [
            { name: 'Contact', path: 'contact', children: [
              { name: 'E-mail', element: 'email' },
              { name: 'Phone', element: 'phone' }
            ]},
          ]},
          { name: 'Github', external: 'https://github.com' },
        ],
      };
    },
  };
</script>
```

will generate

```
- Products     // category label
  - Shoes      // --> /shoes
- About        // --> /about
  - Contact    // --> /about/contact
    - E-mail   // --> /about/contact#email
    - Phone    // --> /about/contact#phone
- Github       // --> https://github.com
```

For more examples see [documentation/demo](https://misrob.github.io/vue-tree-navigation)

## Installation

### NPM

```console
$ npm install vue-tree-navigation
```

_main.js_

```javascript
import VueTreeNavigation from 'vue-tree-navigation';

Vue.use(VueTreeNavigation);
```

### Include with a script tag

```html
<script src="https://unpkg.com/vue-tree-navigation@4.0.0/dist/vue-tree-navigation.js"></script>

<script>
  Vue.use(VueTreeNavigation)
</script>
```

_Example_

```html
<div id="app">
  <vue-tree-navigation :items="items" :defaultOpenLevel="1" />
</div>

<script>
  Vue.use(VueTreeNavigation)

  const app = new Vue({
    el: '#app',
    data: {
      items: [
        ...
      ],
    }
  })
</script>
```

## Requirements

- [Vue.js](https://vuejs.org/)

## Developers

```console
$ yarn dev

$ yarn build

$ yarn prettier
$ yarn lint

$ yarn unit
$ yarn unit --verbose

$ yarn e2e
```
