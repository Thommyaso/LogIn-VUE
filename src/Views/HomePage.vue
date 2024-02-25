<script setup>
const classes = ['btn-outline-primary', 'btn-lg'];
import router from '@/Router';
import AppButtons from '../Components/AppButtons/AppButtons.vue';
</script>
<template>
    <AppButtons
        :btn-class="classes"
        btn-text="Log In"
        @click="router.push('/login')"
    />
    <h1>Welcome to the Home Page</h1>
</template>
