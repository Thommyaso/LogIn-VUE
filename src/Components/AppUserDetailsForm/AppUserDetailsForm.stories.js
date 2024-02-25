import AppUserDetailsForm from './AppUserDetailsForm.vue';

export default {
    title: 'User Details Form',
    component: AppUserDetailsForm,
    tags: ['autodocs'],
    argTypes: {
        userDetails: {control: {type: null}},
    },
};

export const UserDetailsForm = {
    args: {
        userDetails: [
            {
                id: 1,
                label: 'Username:',
                text: 'Thomas01',
            },
            {
                id: 2,
                label: 'Name:',
                text: 'Thomas',
            },
            {
                id: 3,
                label: 'Surname:',
                text: 'Abcde',
            },
            {
                id: 4,
                label: 'Age:',
                text: 28,
            },
        ],
    },
};

