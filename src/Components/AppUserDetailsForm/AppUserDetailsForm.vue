<script setup>
const props = defineProps({
    userDetails: {
        type: Array,
        default: null,
    },
});
</script>
<template>
    <div class="container userProfileForm">
        <h1 class="userProfileForm__header">
            Details:
        </h1>
        <div
            v-for="detail in props.userDetails"
            :key="detail.id"
            class="row userProfileForm__container"
        >
            <div class="col-5">
                <div class="userProfileForm__paragraph">
                    <span>{{ detail.label }}</span>
                </div>
            </div>
            <div class="col-7">
                <span class="userProfileForm__span-lg">{{ detail.text }}</span>
            </div>
        </div>
    </div>
</template>
