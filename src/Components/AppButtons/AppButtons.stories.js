import AppButtons from './AppButtons.vue';

export default {
    title: 'AppButtons',
    component: AppButtons,
    tags: ['autodocs'],
    argTypes: {
        btnClass: {
            control: {type: null},
        },
        btnText: {
            control: {type: 'text'},
        },
    },
};

export const PrimaryButton = {
    args: {
        btnClass: ['btn-primary', 'btn-large'],
        btnText: 'Log In',
    },
};
