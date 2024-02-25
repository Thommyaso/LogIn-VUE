import './bootstrap.scss';
// eslint-disable-next-line no-unused-vars
import * as bootstrap from 'bootstrap';

import './main.scss';
import {createApp} from 'vue';
import App from '@/App.vue';
import router from '@/Router';

createApp(App)
    .use(router)
    .mount('#app');
