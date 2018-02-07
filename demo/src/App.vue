<template>
  <div id="app">
    <h1>vue-tree-navigation</h1>
    <a href="https://github.com/MisRob/vue-tree-navigation" id="github">
      <i class="fa fa-3x fa-github" aria-hidden="true"></i>
    </a>
    <div class="container">
      <div>
        <vue-tree-navigation :items="items" :defaultOpenLevel="defaultOpenLevel" />
      </div>
      
      <div id="inputs">
        <label for="json">Input JSON
          <i v-if="isJsonValid" class="fa fa-check" aria-hidden="true"></i>
          <i v-else class="fa fa-times" aria-hidden="true"></i>
        </label>
        <textarea id="json" v-model="itemsJson"></textarea>
        
        <label for="default-open-level">Default open level</label>
        <input type="number" id="default-open-level" v-model="defaultOpenLevel">
      </div>
    </div>
  </div>
</template>

<script>
const items = [
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
];

export default {
  data() {
    return {
      items,
      itemsJson: this.prettyJson(items),
      isJsonValid: true,
      defaultOpenLevel: 2,
    };
  },

  methods: {
    prettyJson(data) {
      return JSON.stringify(data, undefined, 1);
    },
  },

  watch: {
    itemsJson() {
      this.isJsonValid = true;
      try {
        this.items = JSON.parse(this.itemsJson);
        this.itemsJson =  this.prettyJson(this.items);
      } catch(e) {
        this.isJsonValid = false;
      }
    },
  },
};
</script>

<style lang="scss">
  @import './assets/_base.scss';
  @import './assets/_large.scss';
</style>
