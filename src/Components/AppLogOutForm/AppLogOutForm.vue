<script setup>
import './AppLogOutForm.scss';
import AppButton from '../AppButton/AppButton.vue';
import {useSessionStore} from '@/Stores/sessionStore';
import router from '@/Router';

const store = useSessionStore();
const handleLogOutClick = async () => {
    await store.logOut()
        .then(() => {
            router.push('/login');
        })
        .catch((err) => {
            console.error(err);
        });
};

</script>
<template>
    <div class="logOutContainer">
        <h3 class="logOutContainer__header">
            Would you like to log out?
        </h3>
        <AppButton
            btnClass="btn-secondary"
            btnText="Log Out"
            @click.prevent="handleLogOutClick()"
        />
    </div>
</template>
