<template>
  <div id="app">
    <tree-navigation :items="items" :defaultOpenLevel="defaultOpenLevel" />

    <hr>
    <!-- Just to check that router config for dev is working -->
    <router-link to="/home">Home</router-link>
    <router-link to="/products">Products</router-link>
    <router-link to="/products/shoes">Products - shoes</router-link>
    <router-link to="/products/clothing">Products - clothing</router-link>
    <router-link to="/products/clothing/jackets">Products - clothing - jackets</router-link>
    <router-link to="/products/clothing/tops">Products - clothing - tops</router-link>
    <router-link to="/products/clothing/tops#long-sleeve">Products - clothing - tops - long-sleeve</router-link>

    <!-- <div style="height: 700px"></div> -->
    <hr>
    <h2>Router View:</h2>
    <router-view></router-view>
    
    <hr>
    <h2>About</h2>
    <ul>
      <li>...</li>
      <li>...</li>
      <li>...</li>
      <li>...</li>
      <li>...</li>
      <li>...</li>
      <li>...</li>
      <li>...</li>
      <li id="company">Company</li>
      <li>...</li>
      <li>...</li>
      <li>...</li>
      <li>...</li>
      <li>...</li>
      <li>...</li>
      <li>...</li>
      <li>...</li>
      <li id="contact">Contact</li>
      <li>...</li>
      <li>...</li>
      <li>...</li>
      <li>...</li>
      <li>...</li>
      <li>...</li>
      <li>...</li>
      <li>...</li>
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
        { name: 'Products', route: 'products', children: [
          { name: 'Running shoes', route: 'shoes', children: [
            { name: 'Race', element: '#race' },
            { name: 'Road', element: '#road' },
            { name: 'Trail', element: '#trail' },
          ]},
          { name: 'Running clothing', route: 'clothing', children: [
            { name: 'Jackets', route: 'jackets' },
            { name: 'Tops', route: 'tops', children: [
              { name: 'Long Sleeve', element: '#long-sleeve', children: [
                { name: 'For summer', element: '#summer' },
                { name: 'For winter', element: '#winter' },
              ]},
              { name: 'Short Sleeve', element: '#short-sleeve' },
              { name: 'Sleeveless', element: '#sleeveless' },
            ]},
          ]},
        ]},
        { name: 'About', children: [
          { name: 'Company', element: '#company' },
          { name: 'Contact', element: '#contact' },
          { name: 'Blog', element: '#blog' },
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