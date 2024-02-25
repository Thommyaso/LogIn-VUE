import AppInput from './AppInput.vue';

export default {
    title: 'Inputs',
    component: AppInput,
    tags: ['autodocs'],
    argTypes: {
        floating: {
            control: {type: 'boolean'},
        },
        inputId: {
            control: {type: null},
        },
        inputType: {
            control: {type: 'text'},
        },
        labelText: {
            control: {type: 'text'},
        },
    },
};

export const RegularTextInput = {
    args: {
        floating: false,
        inputId: 'RegularTextInput01',
        inputType: 'text',
        labelText: 'Name',
    },
};

export const FloatingTextInput = {
    args: {
        floating: true,
        inputId: 'FloatingTextInput01',
        inputType: 'text',
        labelText: 'Username',
    },
};
