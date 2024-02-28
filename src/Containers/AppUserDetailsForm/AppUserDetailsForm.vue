<script setup>
import './AppUserDetailsForm.scss';
import {useSessionStore} from '@/Stores/sessionStore';
import {onBeforeMount} from 'vue';
import router from '@/Router';

const store = useSessionStore();

onBeforeMount(async () => {
    await store.retriveData()
        .catch((err) => {
            console.error(err);
            router.push('/login');
        });
},
);

</script>
<template>
    <div class="container profileForm">
        <h1 class="profileForm__header">
            Details:
        </h1>
        <div
            class="row profileForm__container"
        >
            <div class="col-5">
                <div class="profileForm__paragraph">
                    <span>Username:</span>
                </div>
            </div>
            <div class="col-7">
                <span class="profileForm__span-lg">{{ store.userDetails.username }}</span>
            </div>
        </div>
        <div
            class="row profileForm__container"
        >
            <div class="col-5">
                <div class="profileForm__paragraph">
                    <span>Name:</span>
                </div>
            </div>
            <div class="col-7">
                <span class="profileForm__span-lg">{{ store.userDetails.name }}</span>
            </div>
        </div>
        <div
            class="row profileForm__container"
        >
            <div class="col-5">
                <div class="profileForm__paragraph">
                    <span>Surname:</span>
                </div>
            </div>
            <div class="col-7">
                <span class="profileForm__span-lg">{{ store.userDetails.surname }}</span>
            </div>
        </div>
        <div
            class="row profileForm__container"
        >
            <div class="col-5">
                <div class="profileForm__paragraph">
                    <span>Age:</span>
                </div>
            </div>
            <div class="col-7">
                <span class="profileForm__span-lg">{{ store.userDetails.age }}</span>
            </div>
        </div>
    </div>
</template>
