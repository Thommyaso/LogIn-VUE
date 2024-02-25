<script setup>
import './AppButton.scss';
import {computed} from 'vue';

const props = defineProps({
    btnClass: {
        type: [String, Array],
        default: 'btn-primary',
    },
    btnText: {
        type: String,
        default: '',
    },
});
const setBtnClass = computed(() => {
    return ['btn', props.btnClass];
});
</script>
<template>
    <button :class="setBtnClass">
        {{ btnText }}
    </button>
</template>
