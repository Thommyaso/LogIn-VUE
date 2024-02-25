<script setup>
import './AppRegisterForm.scss';
import AppButton from '../AppButton/AppButton.vue';
import AppInput from '../AppInput/AppInput.vue';
</script>
<template>
    <form class="container-fluid registrationForm">
        <div class="registrationForm__formInputContainer">
            <h1 class="h3 mb-3 fw-normal registrationForm__header">
                Please register:
            </h1><div class="mb-3">
                <AppInput
                    :floating:="false"
                    inputId="RegistrationFormNameInput"
                    inputType="text"
                    labelText="Name"
                />
            </div><div class="mb-3">
                <AppInput
                    :floating:="false"
                    inputId="RegistrationFormSurnameInput"
                    inputType="text"
                    labelText="Surname:"
                />
            </div><div class="mb-3">
                <AppInput
                    :floating:="false"
                    inputId="RegistrationFormAgeInput"
                    inputType="number"
                    labelText="Age:"
                />
            </div><div class="mb-3">
                <AppInput
                    :floating:="false"
                    inputId="RegistrationFormUsernameInput"
                    inputType="text"
                    labelText="Username:"
                />
            </div><div class="mb-3">
                <AppInput
                    :floating:="false"
                    inputId="RegistrationFormPasswordInput"
                    inputType="password"
                    labelText="Password:"
                />
            </div><div class="mb-3">
                <AppInput
                    :floating:="false"
                    inputId="RegistrationFormRepeatPasswordInput"
                    inputType="password"
                    labelText="Repeat Password:"
                />
            </div>
            <AppButton
                btnClass="btn btn-primary"
                btnText="Submit"
            />
        </div>
    </form>
</template>
