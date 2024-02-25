import {createRouter, createWebHistory} from 'vue-router';
import HomePage from '@/Views/HomePage.vue';
import LogInPage from '@/Views/LogInPage.vue';
import UserProfilePage from '@/Views/UserProfilePage.vue';

const routes = [
    {
        path: '/',
        name: 'HomePage',
        component: HomePage,
    },
    {
        path: '/login',
        name: 'LogInPage',
        component: LogInPage,
    },
    {
        path: '/userprofile',
        name: 'UserProfilePage',
        component: UserProfilePage,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
