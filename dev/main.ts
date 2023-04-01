import { createApp } from 'vue'
import router from './routes';
import App from './App.vue';

const app = createApp(App)


app.use(router);
app.mount('#app')

// const Features = { template: '<div><h1>Home</h1></div>' };
// const Jackets = { template: '<div><h1>Jackets</h1></div>' };
// const Products = { template: '<div><h1>Products</h1></div>' };

// const Clothing = {
//   template: `<div>
//       <h1>Running clothing</h1>
//       <router-view></router-view>
//     </div>`,
// };

// const Shoes = {
//   template: `<div>
//       <h1>Running shoes</h1>
//       <ul>
//         <li id="race">Race</li>
//         <li id="road">Road</li>
//         <li id="trail">Trail</li>
//       </ul>
//     </div>`,
// };

// const Tops = {
//   template: `<div>
//     <h1>Tops</h1>
//     <ul>
//       <li id="long-sleeve">
//         Long Sleeve
//         <ul>
//           <li id="summer">For summer</li>
//           <li id="winter">For winter</li>
//         </ul>
//       </li>
//       <li id="short-sleeve">Short Sleeve</li>
//       <li id="sleeveless">Sleeveless</li>
//     </ul>
//   </div>`,
// };

