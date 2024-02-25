<script setup>
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
