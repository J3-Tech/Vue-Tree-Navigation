# vue-tree-navigation

> Vue.js 2 tree navigation with vue-router support

For more information see [documentation/demo](https://vue-tree-navigation.misrob.cz)

## Example

```html
<template>
  <vue-tree-navigation :items="items" :defaultOpenLevel="1" />
</template>

<script>
  export default {
    data() {
      return {
        items: [
          { name: 'Products', children: [                       // category label
            { name: 'Shoes', route: 'shoes' }                   // #/shoes
          ]},
          { name: 'About', route: 'about', children: [          // #/about
            { name: 'Contact', route: 'contact', children: [    // #/about/contact       
              { name: 'E-mail', element: 'email' },             // #/about/contact#email
              { name: 'Phone', element: 'phone' }               // #/about/contact#phone
            ]},
          ]},
        ],
      };
    },
  };
</script>
```

## Installation

### Include with a script tag

```html
<script src="https://unpkg.com/vue-tree-navigation@2.1.1/dist/vue-tree-navigation.js"></script>

<script>
  Vue.use(VueTreeNavigation)
</script>
```

### NPM

```console
$ npm install vue-tree-navigation
```

*main.js*

```javascript
import VueTreeNavigation from 'vue-tree-navigation';

Vue.use(VueTreeNavigation);
```

## Requirements

- [Vue.js](https://vuejs.org/)
- [vue-router](https://router.vuejs.org/en/) (optional, only when you wish to use router links)

## Developers

```console
$ yarn dev

$ yarn build

$ yarn prettier
$ yarn lint

$ yarn unit
$ yarn unit --verbose
```
