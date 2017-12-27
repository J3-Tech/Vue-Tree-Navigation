<template>
  <div id="app">
    <tree-navigation :items="items" :defaultOpenLevel="defaultOpenLevel" />
  </div>
</template>

<script>
import TreeNavigation from '../src/components/TreeNavigation';
import items from '../src/components/TreeNavigation/__mocks__/items.json';

export default {
  data() {
    return {
      items,
      defaultOpenLevel: 2,
    };
  },
  components: {
    'tree-navigation': TreeNavigation,
  },
};
</script>