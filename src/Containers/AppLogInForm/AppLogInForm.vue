<script setup>

import router from '@/Router';
import './AppLogInForm.scss';
import AppInput from '@/Components/AppInput/AppInput.vue';
import AppButton from '@/Components/AppButton/AppButton.vue';
import {reactive} from 'vue';
import {useSessionStore} from '@/Stores/sessionStore';

const inputState = reactive({
    username: null,
    password: null,
    usernameErrMsg: null,
    passwordErrMsg: null,
    incorrectInputs: null,
});
const store = useSessionStore();

/*
    This function validates whether:

        - both fields are filled
        - the entered value corresponds to an existing record in the database

    If any requirements are unmet, respective error messages are displayed.
    If all requirements are met, the registration process proceeds.
*/
const handleLogInClick = async () => {
    inputState.incorrectInputs = null;
    inputState.usernameErrMsg =
        inputState.username === '' || inputState.username === null ? 'Username required' : null;
    inputState.passwordErrMsg =
        inputState.password === '' || inputState.password === null ? 'Password required' : null;

    if (!(inputState.usernameErrMsg || inputState.passwordErrMsg)) {
        const data = {
            username: inputState.username,
            password: inputState.password,
        };

        await store.login(data)
            .then(() => {
                router.push('/userprofile');
            })
            .catch((err) => {
                console.error(err);
                if (err.response.status === 401) {
                    inputState.incorrectInputs = 'Username or Password incorrect';
                }
            });
    }
};

</script>
<template>
    <form class="container-fluid AppLogInForm">
        <div class="logInerrMsg">
            <p
                v-if="inputState.incorrectInputs"
                class="logInerrMsg__paragraph"
            >
                {{ inputState.incorrectInputs }}
            </p>
        </div>
        <h1 class="h3 mb-3 fw-normal">
            Please sign in:
        </h1>
        <div class="form-floating mb-3">
            <AppInput
                v-model="inputState.username"
                :floating="true"
                inputId="FloatingUsernameInput01"
                inputType="text"
                labelText="Username"
                :errorMessage="inputState.usernameErrMsg"
                autocomplete="username"
            />
        </div><div class="form-floating mb-3">
            <AppInput
                v-model="inputState.password"
                :floating="true"
                inputId="FloatingPasswordInput01"
                inputType="password"
                labelText="Password"
                :errorMessage="inputState.passwordErrMsg"
                autocomplete="current-password"
            />
        </div>
        <div class="AppLogInForm__btnContainer">
            <AppButton
                :btnClass="['btn-primary', 'btn-lg']"
                btnText="Log In"
                @click.prevent="handleLogInClick()"
            />
        </div>
    </form>
</template>
