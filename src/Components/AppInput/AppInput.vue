<script setup>
import './AppInput.scss';
import {computed} from 'vue';

const inputValue = defineModel({type: [String, Number]});
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
        type: [String, null],
        default: null,
    },
    errorMessage: {
        type: [String, null],
        default: null,
    },
    autocomplete: {
        type: String,
        default: 'off',
    },
});
const setInputStyle = computed(() => {
    const isFloating = props.floating ? 'form-floating resetMargin' : '';
    return [isFloating, 'mb0-3', 'inputContainerCustom'];
});
</script>
<template>
    <div :class="setInputStyle">
        <input
            :id="props.inputId"
            v-model="inputValue"
            class="form-control inputContainerCustom__input"
            placeholder=""
            :type="props.inputType"
            :autocomplete="autocomplete"
        >
        <label
            class="inputContainerCustom__label"
            :for="props.inputId"
        >{{ props.labelText }}</label>
    </div>
    <div
        v-if="errorMessage"
        class="inputErrMsg"
    >
        <p class="inputErrMsg__paragraph">
            {{ errorMessage }}
        </p>
    </div>
</template>
