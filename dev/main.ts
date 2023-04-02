import { createApp } from 'vue'
import router from './routes';
import App from './App.vue';

const app = createApp(App)
app.use(router);
app.mount('#app');
