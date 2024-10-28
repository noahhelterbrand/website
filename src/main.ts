import Aura from '@primevue/themes/aura';
import 'primeicons/primeicons.css';
import PrimeVue from 'primevue/config';
import router from './router';
import './main.css';
import {createApp} from 'vue';

import App from './App.vue';

const app = createApp(App);
app
  .use(PrimeVue, {
    theme: {
      preset: Aura,
      options: {
        darkModeSelector: '.my-app-dark',
      },
    },
  })
  .use(router)
  .mount('#app');
