<template>
  <div id="app">
    <tree-navigation :items="items" :defaultOpenLevel="defaultOpenLevel" />

    <hr>
    <h2>Router View</h2>
    <router-view></router-view>
    
    <hr>
    <h2>About (this section is not part of router view)</h2>
    <ul>
      <li id="company">Company</li>
      <li id="contact">Contact</li>
      <li id="blog">Blog</li>
    </ul>
  </div>
</template>

<script>
import TreeNavigation from '../src/components/TreeNavigation';

export default {
  data() {
    return {
      items: [
        { name: 'Home', route: 'home' },
        {
          name: 'Products',
          route: 'products',
          children: [
            {
              name: 'Running shoes',
              route: 'shoes',
              children: [
                { name: 'Race', element: 'race' },
                { name: 'Road' },
                { name: 'Trail', element: 'trail' },
              ],
            },
            {
              name: 'Running clothing',
              route: 'clothing',
              children: [
                { name: 'Jackets', route: 'jackets' },
                {
                  name: 'Tops',
                  route: 'tops',
                  children: [
                    {
                      name: 'Long Sleeve',
                      element: 'long-sleeve',
                      children: [
                        { name: 'For summer', element: 'summer' },
                        { name: 'For winter', element: 'winter' },
                      ],
                    },
                    { name: 'Short Sleeve', element: 'short-sleeve' },
                    { name: 'Sleeveless', element: 'sleeveless' },
                  ],
                },
              ],
            },
          ],
        },
        {
          name: 'About',
          children: [
            { name: 'Company', element: 'company' },
            { name: 'Contact', element: 'contact' },
            { name: 'Blog', element: 'blog' },
          ],
        },
      ],
      defaultOpenLevel: 2,
    };
  },
  components: {
    'tree-navigation': TreeNavigation,
  },
};
</script>
