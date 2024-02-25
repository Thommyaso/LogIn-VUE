import {createRouter, createWebHistory} from 'vue-router';
import HomePage from '@/Views/HomePage.vue';
import LogInPage from '@/Views/LogInPage.vue';
import UserProfilePage from '@/Views/UserProfilePage.vue';
import RegisterPage from '@/Views/RegisterPage.vue';
import UnauthorisedPage from '../Views/UnauthorisedPage.vue';
import PageNotFound from '../Views/PageNotFound.vue';

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
    {
        path: '/register',
        name: 'RegisterPage',
        component: RegisterPage,
    },
    {
        path: '/forbidden',
        name: 'UnauthorisedPage',
        component: UnauthorisedPage,
    },
    {
        path: '/pagenotfound',
        name: 'PageNotFound',
        component: PageNotFound,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
