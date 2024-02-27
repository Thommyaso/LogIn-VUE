import './bootstrap.scss';
// eslint-disable-next-line no-unused-vars
import * as bootstrap from 'bootstrap';

import './main.scss';
import {createApp} from 'vue';
import {createPinia} from 'pinia';
import App from '@/App.vue';
import router from '@/Router';

if (!window.localStorage.isLoggedIn) {
    window.localStorage.isLoggedIn = false;
}

const pinia = createPinia();

createApp(App)
    .use(pinia)
    .use(router)
    .mount('#app');
