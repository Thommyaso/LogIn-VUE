<script setup>
const classes = ['btn-outline-primary', 'btn-lg'];
import router from '@/Router';
import AppButton from '../Components/AppButton/AppButton.vue';
</script>
<template>
    <AppButton
        :btn-class="classes"
        btn-text="Log In"
        @click="router.push('/login')"
    />
    <h1>Welcome to the Home Page</h1>
</template>
