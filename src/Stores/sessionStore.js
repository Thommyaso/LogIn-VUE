import {defineStore} from 'pinia';

export const useSessionStore = defineStore('sessionStore', {
    state: () => {
        return {
            isLoggedIn: window.localStorage.isLoggedIn === 'true',
            userDetails: {},
        };
    },
    actions: {
        setToLoggedIn() {
            this.isLoggedIn = true;
        },

        setToLoggedOut() {
            this.userDetails = {};
            this.isLoggedIn = false;
        },
    },
});
