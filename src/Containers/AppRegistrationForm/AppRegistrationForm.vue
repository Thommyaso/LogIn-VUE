<script setup>
import './AppRegistrationForm.scss';
import AppButton from '@/Components/AppButton/AppButton.vue';
import AppInput from '@/Components/AppInput/AppInput.vue';
import {reactive} from 'vue';
import {useSessionStore} from '@/Stores/sessionStore';
import router from '@/Router';

const store = useSessionStore();
const formData = reactive({
    username: {
        value: null,
        errMsg: null,
    },
    name: {
        value: null,
        errMsg: null,
    },
    surname: {
        value: null,
        errMsg: null,
    },
    age: {
        value: null,
        errMsg: null,
    },
    password: {
        value: null,
        errMsg: null,
    },
    repeatPassword: {
        value: null,
        errMsg: null,
    },
});

/*
    This function validates whether:

        - all fields are filled
        - passwords match
        - username isn't taken

    If any requirements are unmet, respective error messages are displayed beneath each field.
    If all requirements are met, the registration process proceeds.
*/
const handleSubmitClick = async () => {
    let isEmpty = false;

    Object.values(formData).forEach((input) => {
        if (input.value === null || input.value === '') {
            input.errMsg = 'Field required';
            isEmpty = true;
        } else {
            input.errMsg = null;
        }
    });
    if (!isEmpty) {
        if (formData.password.value === formData.repeatPassword.value) {
            const data = {
                username: formData.username.value,
                name: formData.name.value,
                surname: formData.surname.value,
                age: formData.age.value,
                password: formData.password.value,
            };
            await store.register(data)
                .then(() => {
                    router.push('/login');
                })
                .catch((err) => {
                    console.error(err.response);
                    if (err.response.status === 409) {
                        formData.username.errMsg = 'Username taken';
                    }
                });
        } else {
            formData.password.errMsg = formData.repeatPassword.errMsg = 'Passwords don\'t match';
        }
    }
};

</script>
<template>
    <form class="container-fluid registrationForm">
        <div class="registrationForm__formInputContainer">
            <h1 class="h3 mb-3 fw-normal registrationForm__header">
                Please register:
            </h1><div class="mb-3">
                <AppInput
                    v-model="formData.username.value"
                    inputId="RegistrationFormUsernameInput"
                    inputType="text"
                    labelText="Username:"
                    :errorMessage="formData.username.errMsg"
                    autocomplete="username"
                />
            </div><div class="mb-3">
                <AppInput
                    v-model="formData.name.value"
                    inputId="RegistrationFormNameInput"
                    inputType="text"
                    labelText="Name:"
                    :errorMessage="formData.name.errMsg"
                    autocomplete="name"
                />
            </div><div class="mb-3">
                <AppInput
                    v-model="formData.surname.value"
                    inputId="RegistrationFormSurnameInput"
                    inputType="text"
                    labelText="Surname:"
                    :errorMessage="formData.surname.errMsg"
                    autocomplete="family-name"
                />
            </div><div class="mb-3">
                <AppInput
                    v-model="formData.age.value"
                    inputId="RegistrationFormAgeInput"
                    inputType="number"
                    labelText="Age:"
                    :errorMessage="formData.age.errMsg"
                    autocomplete="off"
                />
            </div><div class="mb-3">
                <AppInput
                    v-model="formData.password.value"
                    inputId="RegistrationFormPasswordInput"
                    inputType="password"
                    labelText="Password:"
                    :errorMessage="formData.password.errMsg"
                    autocomplete="off"
                />
            </div><div class="mb-3">
                <AppInput
                    v-model="formData.repeatPassword.value"
                    inputId="RegistrationFormRepeatPasswordInput"
                    inputType="password"
                    labelText="Repeat Password:"
                    :errorMessage="formData.repeatPassword.errMsg"
                    autocomplete="off"
                />
            </div>
            <AppButton
                btnClass="btn btn-primary"
                btnText="Submit"
                @click.prevent="handleSubmitClick"
            />
        </div>
    </form>
</template>
