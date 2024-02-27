<script setup>

import router from '@/Router';
import './AppLogInForm.scss';
import AppInput from '../AppInput/AppInput.vue';
import AppButton from '../AppButton/AppButton.vue';
import {ref} from 'vue';
import {useSessionStore} from '../../Stores/sessionStore';

const store = useSessionStore();
const usernameInputValue = ref('');
const passwordInputValue = ref('');
const handleLogInClick = async () => {
    const data = {
        username: usernameInputValue.value,
        password: passwordInputValue.value,
    };
    await store.login(data)
        .then(() => {
            router.push('/userprofile');
        })
        .catch((err) => {
            console.log(err);
        });
};

</script>
<template>
    <form class="container-fluid AppLogInForm">
        <h1 class="h3 mb-3 fw-normal">
            Please sign in:
        </h1><div class="form-floating mb-3">
            <AppInput
                v-model="usernameInputValue"
                :floating="true"
                inputId="FloatingUsernameInput01"
                inputType="text"
                labelText="Username"
            />
        </div><div class="form-floating mb-3">
            <AppInput
                v-model="passwordInputValue"
                :floating="true"
                inputId="FloatingPasswordInput01"
                inputType="password"
                labelText="Password"
            />
        </div><div class="AppLogInForm__btnContainer">
            <AppButton
                :btnClass="['btn-primary', 'btn-lg']"
                btnText="Log In"
                @click.prevent="handleLogInClick()"
            />
        </div>
    </form>
</template>
