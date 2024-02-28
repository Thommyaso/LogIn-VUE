import AppNavigation from './AppNavigation.vue';

export default {
    title: 'Navigation',
    component: AppNavigation,
    tags: ['autodocs'],
    argTypes: {
        isLoggedIn: {controll: {type: Boolean}},
    },
};

export const NavigationBar = {
    args: {
        isLoggedIn: false,
    },
};
