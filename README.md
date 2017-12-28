# vue-tree-navigation

A Vue.js tree navigation menu

[Demo](https://vue-tree-navigation.misrob.cz)

## Features:

* unlimited number of levels
* you can define default open level
* focused on core functionality, only necessary styles included - just apply your own styles like I did for demo page :wink:

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

**file.vue**

```html
<vue-tree-navigation :items="items" :defaultOpenLevel="defaultOpenLevel" />
```

```javascript
export default {
  ...
  data() {
    return {
      items: [
        { name: 'First category', children: [
          { name: 'Category item', href: '#take-me-somewhere' },
          { name: 'Category item', href: '#take-me-somewhere' }
        ]},
        { name: 'Second category', href: '#take-me-somewhere' }
      ],
      defaultOpenLevel: 1
    }
  },
  ...
};
```

**items** `Array`

An array containing navigation menu items.

You don't need to specify `href` field. Menu item will be rendered as a simple value instead of a hyperlink in this case.

**defaultOpenLevel** `Number`

Optional. Default value is 0 (everything is closed).

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

