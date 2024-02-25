<script setup>
import AppUserDetailsForm from '../Components/AppUserDetailsForm/AppUserDetailsForm.vue';
const exampleDetails = [{
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
}];
</script>
<template>
    <AppUserDetailsForm :userDetails="exampleDetails" />
</template>
