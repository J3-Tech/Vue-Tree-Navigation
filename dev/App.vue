<template>
  <div id="app">
    <tree-navigation :items="items" :defaultOpenLevel="defaultOpenLevel" />
  </div>
</template>

<script>
import TreeNavigation from '../src/components/TreeNavigation';

export default {
  data() {
    return {
      items: [
        { name: 'Home', href: '#home' },
        { name: 'Products', href: '#products', children: [
          { name: 'Running shoes', href: '#shoes', children: [
            { name: 'Race', href: '#race' },
            { name: 'Road', href: '#road' },
            { name: 'Trail', href: '#trail' },
          ]},
          { name: 'Running clothing', href: '#clothing', children: [
            { name: 'Jackets', href: '#jackets' },
            { name: 'Tops', children: [
              { name: 'Long Sleeve', href: '#long-sleeve', children: [
                { name: 'For summer', href: '#summer' },
                { name: 'For winter', href: '#winter' },
              ]},
              { name: 'Short Sleeve', href: '#short-sleeve' },
              { name: 'Sleeveless', href: '#sleeveless' },
            ]},
            { name: 'Trousers', href: '#trousers' },
          ]},
        ]},
        { name: 'About', children: [
          { name: 'Company', href: '#company' },
          { name: 'Contact', href: '#contact' },
          { name: 'Blog', href: '#blog' },
        ]},
      ],
      defaultOpenLevel: 2,
    };
  },
  components: {
    'tree-navigation': TreeNavigation,
  },
};
</script>