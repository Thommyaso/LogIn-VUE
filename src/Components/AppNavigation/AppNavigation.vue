<script setup>
import './AppNavigation.scss';
import router from '@/Router';
import AppButton from '../AppButton/AppButton.vue';
import {useSessionStore} from '../../Stores/sessionStore.js';
import {storeToRefs} from 'pinia';

const store = useSessionStore();
const {isLoggedIn} = storeToRefs(store);
const btnClasses = {
    navLink: 'nav-link',
    navBtnPrimary: 'btn-primary',
    navBtnSecondaryOutline: 'btn-outline-secondary',
    navBtnPrimaryOutline: ['btn-outline-primary', 'navbtn-custom'],
    navBrand: ['navbar-brand'],
};
</script>
<template>
    <nav class="navbar navbar-expand-lg bg-body-tertiary ">
        <div class="container-fluid">
            <AppButton
                :btn-class="btnClasses.navBrand"
                btn-text="LogIn App"
                @click="router.push('/')"
            />
            <button
                class="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span class="navbar-toggler-icon" />
            </button>
            <div
                id="navbarSupportedContent"
                class="collapse navbar-collapse"
            >
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item navbarCustom__navLink">
                        <AppButton
                            :btn-class="btnClasses.navLink"
                            btn-text="Home"
                            @click="router.push('/')"
                        />
                    </li>
                    <li class="nav-item navbarCustom__navLink">
                        <AppButton
                            :btn-class="btnClasses.navLink"
                            btn-text="User Profile"
                            @click="router.push('/userprofile')"
                        />
                    </li>
                </ul>
                <div
                    v-if="isLoggedIn === true"
                    class="d-flex navbarCustom__navBtn"
                >
                    <AppButton
                        :btn-class="btnClasses.navBtnSecondaryOutline"
                        btn-text="Log Out"
                        @click="router.push('/')"
                    />
                </div>
                <div
                    v-else
                    class="d-flex navbarCustom__navBtn"
                >
                    <AppButton
                        :btn-class="btnClasses.navBtnPrimaryOutline"
                        btn-text="Log In"
                        @click="router.push('/login')"
                    />
                    <AppButton
                        :btn-class="btnClasses.navBtnPrimary"
                        btn-text="Register"
                        @click="router.push('/register')"
                    />
                </div>
            </div>
        </div>
    </nav>
</template>
