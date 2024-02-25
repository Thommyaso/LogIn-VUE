<script setup>
import './AppInput.scss';
import {computed} from 'vue';
const props = defineProps({
    floating: {
        type: Boolean,
        default: false,
    },
    inputId: {
        type: String,
        default: null,
    },
    inputType: {
        type: String,
        default: 'text',
    },
    labelText: {
        type: String,
        default: null,
    },
});
const setInputStyle = computed(() => {
    const isFloating = props.floating ? 'form-floating' : '';
    return [isFloating, 'mb0-3', 'inputContainerCustom'];
});
</script>
<template>
    <div :class="setInputStyle">
        <input
            :id="props.inputId"
            class="form-control inputContainerCustom__input"
            placeholder=""
            :type="props.inputType"
        >
        <label
            class="inputContainerCustom__label"
            :for="props.inputId"
        >{{ props.labelText }}</label>
    </div>
</template>
