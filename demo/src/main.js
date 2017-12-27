import Vue from 'vue';
import App from './App.vue';
import VueTreeNavigation from '../../dist';

Vue.use(VueTreeNavigation);

new Vue({
  el: '#app',
  render: h => h(App),
});
