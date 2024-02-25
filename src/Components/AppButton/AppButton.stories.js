import AppButton from './AppButton.vue';

export default {
    title: 'Buttons',
    component: AppButton,
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

export const PrimaryButtonLg = {
    args: {
        btnClass: ['btn-primary', 'btn-lg'],
        btnText: 'Log In',
    },
};

export const PrimaryButton = {
    args: {
        btnClass: ['btn-primary'],
        btnText: 'Submit',
    },
};

export const SecondaryButton = {
    args: {
        btnClass: 'btn-secondary',
        btnText: 'Log Out',
    },
};

export const NavigationLink = {
    args: {
        btnClass: 'nav-link',
        btnText: 'Home',
    },
};

export const NavigationLinkButton01 = {
    args: {
        btnClass: ['btn-outline-secondary'],
        btnText: 'Log Out',
    },
};

export const NavigationLinkButton02 = {
    args: {
        btnClass: ['btn-outline-primary', 'navbtn-custom'],
        btnText: 'Log In',
    },
};
