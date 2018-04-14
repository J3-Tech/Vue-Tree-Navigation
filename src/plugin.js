import TreeNavigation from './components/TreeNavigation/TreeNavigation';

module.exports = {
  install: function(Vue, options) {
    Vue.component('vue-tree-navigation', TreeNavigation);
  },
};
