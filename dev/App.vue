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
        { name: 'Home', to: 'home' },
        { name: 'Products', to: 'products', children: [
          { name: 'Running shoes', to: 'shoes', children: [
            { name: 'Race', href: '#race' },
            { name: 'Road', href: '#road' },
            { name: 'Trail', href: '#trail' },
          ]},
          { name: 'Running clothing', to: 'clothing', children: [
            { name: 'Jackets', to: 'jackets' },
            { name: 'Tops', to: 'tops', children: [
              { name: 'Long Sleeve', href: '#long-sleeve', children: [
                { name: 'For summer', href: '#summer' },
                { name: 'For winter', href: '#winter' },
              ]},
              { name: 'Short Sleeve', href: '#short-sleeve' },
              { name: 'Sleeveless', href: '#sleeveless' },
            ]},
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