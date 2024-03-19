<script setup>
import {useSessionStore} from './Stores/sessionStore';
import AppNavigation from './Components/AppNavigation/AppNavigation.vue';
import {storeToRefs} from 'pinia';

const store = useSessionStore();
const {isLoggedIn} = storeToRefs(store);
</script>

<template>
    <AppNavigation :isLoggedIn="isLoggedIn" />
    <router-view />
</template>
