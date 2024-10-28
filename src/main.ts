import Aura from '@primevue/themes/aura';
import 'primeicons/primeicons.css';
import PrimeVue from 'primevue/config';
import router from './router';
import {createApp} from 'vue';

import App from './App.vue';

const app = createApp(App);
app
  .use(PrimeVue, {
    theme: {
      preset: Aura,
      options: {
        prefix: 'p',
        darkModeSelector: 'sysem',
        cssLayer: false,
      },
    },
  })
  .use(router)
  .mount('#app');
