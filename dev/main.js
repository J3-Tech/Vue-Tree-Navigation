import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';

import Clothing from './components/Clothing.vue';
import Home from './components/Home.vue';
import Jackets from './components/Jackets.vue';
import Products from './components/Products.vue';
import Shoes from './components/Shoes.vue';
import Tops from './components/Tops.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/home',
    component: Home,
  },
  {
    path: '/products',
    component: Products,
  },
  {
    path: '/products/shoes',
    component: Shoes,
  },
  {
    path: '/products/clothing',
    component: Clothing,
    children: [
      {
        path: 'jackets',
        component: Jackets,
      },
      {
        path: 'tops',
        component: Tops,
      },
    ],
  },
];

const router = new VueRouter({
  routes,
});

new Vue({
  el: '#app',
  router,
  render: h => h(App),
});
