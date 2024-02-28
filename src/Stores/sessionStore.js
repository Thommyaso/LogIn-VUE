import {defineStore} from 'pinia';
import axios from 'axios';

export const useSessionStore = defineStore('sessionStore', {
    state: () => {
        return {
            baseUrl: import.meta.env.VITE_API_BASE_URL ?? 'http://localhost:3000/',
            isLoggedIn: window.localStorage.isLoggedIn === 'true',
            userDetails: {},
        };
    },
    actions: {
        setToLoggedIn() {
            window.localStorage.isLoggedIn = true;
            this.isLoggedIn = true;
        },
        setToLoggedOut() {
            this.userDetails = {};
            window.localStorage.isLoggedIn = false;
            this.isLoggedIn = false;
        },
        async register(data) {
            return await axios.post(`${this.baseUrl}register`, data, {
                withCredentials: true,
            })
                .then((res) => {
                    this.setToLoggedIn();
                    return res;
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
                .then((res) => {
                    this.setToLoggedIn();
                    return res;
                })
                .catch((error) => {
                    this.setToLoggedOut();
                    throw error;
                });

        },
        async retriveData() {
            return await axios.post(`${this.baseUrl}userprofile`, {}, {withCredentials: true})
                .then((res) => {
                    this.userDetails = {
                        username: res.data.username,
                        name: res.data.name,
                        surname: res.data.surname,
                        age: res.data.age,
                    };
                })
                .catch((err) => {
                    this.setToLoggedOut();
                    throw err;
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
