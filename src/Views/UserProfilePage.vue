<script setup>
import AppUserDetailsForm from '../Components/AppUserDetailsForm/AppUserDetailsForm.vue';
import {useSessionStore} from '@/Stores/sessionStore';
import {onBeforeMount, ref} from 'vue';
import router from '@/Router';

const fetchedUserDetails = ref();

onBeforeMount(async () => {
    await store.retriveData()
        .then((res) => {
            fetchedUserDetails.value = [
                {
                    id: 1,
                    label: 'Username:',
                    text: res.data.username,
                },
                {
                    id: 2,
                    label: 'Name:',
                    text: res.data.name,
                },
                {
                    id: 3,
                    label: 'Surname:',
                    text: res.data.surname,
                },
                {
                    id: 4,
                    label: 'Age:',
                    text: res.data.age,
                },
            ];
        })
        .catch((err) => {
            window.localStorage.isLoggedIn = false;
            console.log(err);
            router.push('/login');
        });
},
);

const store = useSessionStore();

</script>
<template>
    <AppUserDetailsForm :userDetails="fetchedUserDetails" />
</template>
