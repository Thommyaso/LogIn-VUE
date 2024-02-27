<script setup>
import './AppRegisterForm.scss';
import AppButton from '../AppButton/AppButton.vue';
import AppInput from '../AppInput/AppInput.vue';
import {reactive} from 'vue';
import {useSessionStore} from '../../Stores/sessionStore';
import router from '@/Router';

const store = useSessionStore();
const formData = reactive({
    username: '',
    name: '',
    surname: '',
    age: '',
    password: '',
    repeatPassword: '',

});

const handleSubmitClick = async (data) => {
    console.log(
        formData.username,
        formData.name,
        formData.surname,
        formData.age,
        formData.password,
        formData.repeatPassword,
    );
    if (data.password === data.repeatPassword) {
        await store.register(data)
            .then(() => {
                router.push('/userprofile');
            })
            .catch((err) => {
                console.error(err);
            });
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
                    v-model="formData.name"
                    :floating:="false"
                    inputId="RegistrationFormNameInput"
                    inputType="text"
                    labelText="Name"
                />
            </div><div class="mb-3">
                <AppInput
                    v-model="formData.surname"
                    :floating:="false"
                    inputId="RegistrationFormSurnameInput"
                    inputType="text"
                    labelText="Surname:"
                />
            </div><div class="mb-3">
                <AppInput
                    v-model="formData.age"
                    :floating:="false"
                    inputId="RegistrationFormAgeInput"
                    inputType="number"
                    labelText="Age:"
                />
            </div><div class="mb-3">
                <AppInput
                    v-model="formData.username"
                    :floating:="false"
                    inputId="RegistrationFormUsernameInput"
                    inputType="text"
                    labelText="Username:"
                />
            </div><div class="mb-3">
                <AppInput
                    v-model="formData.password"
                    :floating:="false"
                    inputId="RegistrationFormPasswordInput"
                    inputType="password"
                    labelText="Password:"
                />
            </div><div class="mb-3">
                <AppInput
                    v-model="formData.repeatPassword"
                    :floating:="false"
                    inputId="RegistrationFormRepeatPasswordInput"
                    inputType="password"
                    labelText="Repeat Password:"
                />
            </div>
            <AppButton
                btnClass="btn btn-primary"
                btnText="Submit"
                @click.prevent="handleSubmitClick(formData)"
            />
        </div>
    </form>
</template>
