<script setup>
import './AppNavigation.scss';
import router from '@/Router';
import AppButton from '../AppButton/AppButton.vue';
const Btnclasses = {
    navLink: 'nav-link',
    navBtnPrimary: 'btn-primary',
    navBtnPrimaryOutline: ['btn-outline-primary', 'navbtn-custom'],
    navBrand: ['navbar-brand'],
};
</script>
<template>
    <nav class="navbar navbar-expand-lg bg-body-tertiary ">
        <div class="container-fluid">
            <AppButton
                :btn-class="Btnclasses.navBrand"
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
                <span class="navbar-toggler-icon"></span>
            </button>
            <div
                id="navbarSupportedContent"
                class="collapse navbar-collapse"
            >
                <ul class="navbar-nav me-auto mb-2 mb-lg-0 navbarCustom__container">
                    <li class="nav-item navbarCustom__navLink">
                        <AppButton
                            :btn-class="Btnclasses.navLink"
                            btn-text="Home"
                            @click="router.push('/')"
                        />
                    </li>
                    <li class="nav-item navbarCustom__navLink">
                        <AppButton
                            :btn-class="Btnclasses.navLink"
                            btn-text="User Profile"
                            @click="router.push('/userprofile')"
                        />
                    </li>
                </ul>
                <div
                    class="d-flex navbarCustom__navBtn"
                >
                    <AppButton
                        :btn-class="Btnclasses.navBtnPrimaryOutline"
                        btn-text="Log In"
                        @click="router.push('/login')"
                    />
                    <AppButton
                        :btn-class="Btnclasses.navBtnPrimary"
                        btn-text="Register"
                        @click="router.push('/login')"
                    />
                </div>
            </div>
        </div>
    </nav>
</template>
