import {createRouter, createWebHistory} from 'vue-router';
import {useSessionStore} from '../Stores/sessionStore.js/';
import paths from './paths';
import HomePage from '@/Views/HomePage.vue';
import LogInPage from '@/Views/LogInPage.vue';
import UserProfilePage from '@/Views/UserProfilePage.vue';
import RegistrationPage from '@/Views/RegistrationPage.vue';
import UnauthorisedPage from '../Views/UnauthorisedPage.vue';
import PageNotFound from '../Views/PageNotFound.vue';
import LogOutPage from '@/Views/LogOutPage.vue';

let previousLogInStatus = null;

const routes = [
    {
        path: paths.homePage,
        name: 'HomePage',
        component: HomePage,
    },
    {
        path: paths.unauthorisedPage,
        name: 'UnauthorisedPage',
        component: UnauthorisedPage,
    },
    {
        path: paths.pageNotFound,
        name: 'PageNotFound',
        component: PageNotFound,
    },
    {
        path: paths.loginPage,
        name: 'LogInPage',
        component: LogInPage,
        beforeEnter: (__to, __from, next) => {
            if (window.localStorage.isLoggedIn === 'true') {
                next('/userprofile');
            } else {
                next();
            }
        },

    },
    {
        path: paths.userProfilePage,
        name: 'UserProfilePage',
        component: UserProfilePage,
        beforeEnter: (__to, __from, next) => {
            if (window.localStorage.isLoggedIn === 'true') {
                next();
            } else {
                next('/login');
            }
        },
    },
    {
        path: paths.registrationPage,
        name: 'RegistrationPage',
        component: RegistrationPage,
        beforeEnter: (__to, __from, next) => {
            if (window.localStorage.isLoggedIn === 'true') {
                next('/userprofile');
            } else {
                next();
            }
        },

    },
    {
        path: paths.logoutPage,
        name: 'LogOutPage',
        component: LogOutPage,
        beforeEnter: (__to, __from, next) => {
            if (window.localStorage.isLoggedIn === 'true') {
                next();
            } else {
                next('/login');
            }
        },

    },

];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

/*

    This function is used to only re-render navigation bar if Log in status has changed
    (navigation bar toggles between "Log In" and "Log Out" buttons based on the user's authentication status.)
    It leverages local storage to maintain and access the current status,
    ensuring the navigation reflects the actual user session by monitoring changes in the isLoggedIn flag.

*/
router.beforeEach((__to, __from, next) => {
    const store = useSessionStore();
    const currentLogInStatus = window.localStorage.isLoggedIn;

    if (previousLogInStatus !== currentLogInStatus) {
        previousLogInStatus = currentLogInStatus;
        if (currentLogInStatus === 'true') {
            store.setToLoggedIn();
        } else {
            store.setToLoggedOut();
        }
    }
    next();
});

export default router;
