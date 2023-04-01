import ExamplesAuto from './pages/Examples/Auto.vue'
import ExamplesManual from './pages/Examples/Manual.vue'
import ExamplesWebsite from './pages/Examples/Website.vue'

import Introduction from './pages/Introduction.vue';
import Installation from './pages/Installation.vue';
import Usage from './pages/Usage.vue';

import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        path: '/',
        component: Introduction,
    },
    {
        path: '/installation',
        component: Installation,
    },
    {
        path: '/installation/usage',
        component: Usage,
    },
    {
        path: '/examples',
        component: ExamplesWebsite,
        children: [
        {
            path: '/examples/auto',
            component: ExamplesAuto,
        },
        {
            path: '/examples/manually-defined',
            component: ExamplesManual,
        },
        {
            path: '/examples/this-website',
            component: ExamplesWebsite,
        },
     ],
    },
];

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: routes,
    scrollBehavior(to, from, savedPosition) {
        if (to.hash) {
            return {
                el: to.hash,
                behavior: 'smooth',
                top: -10,
            }
        }
      }
  })

export default router
