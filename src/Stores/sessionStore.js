import {defineStore} from 'pinia';
import axios from 'axios';

export const useSessionStore = defineStore('sessionStore', {
    state: () => {
        return {
            baseUrl: import.meta.env.VITE_API_BASE_URL,
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
        async register(data) {
            return await axios.post(`${this.baseUrl}register`, data, {
                withCredentials: true,
            })
                .catch((error) => {
                    this.setToLoggedOut();
                    throw error;
                });
        },
        async login(data) {
            return await axios.post(`${this.baseUrl}login`, data, {
                withCredentials: true,
            })
                .catch((error) => {
                    this.setToLoggedOut();
                    throw error;
                });

        },
        async logOut() {
            return await axios.get(`${this.baseUrl}logout`, {
                withCredentials: true,
            })
                .then((res) => {
                    this.setToLoggedOut();
                    return res;
                });
        },
    },
});
