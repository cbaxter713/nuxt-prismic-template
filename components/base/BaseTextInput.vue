<template>
    <base-input-wrapper :full="full">
        <label v-if="label" :for="id">{{label}}</label>
        <input :type="type"
               :id="id"
               :value="value"
               :placeholder="placeholder"
               :required="required"
               :class="{'input-sm': size === 'sm', 'input-lg': size === 'lg'}"
               @input="updateValue" />
    </base-input-wrapper>
</template>

<script>
  import BaseInputWrapper from "./BaseInputWrapper";
  export default {
    name: "BaseTextInput",
    components: {BaseInputWrapper},
    props: {
      type: {
        type: String,
        default: 'text',
        validator: function (value) {
          return ['text', 'email', 'password', 'search'].indexOf(value) !== -1
        }
      },
      id: {
        type: [String, Number],
        default: ''
      },
      label: {
        type: String,
        default: ''
      },
      value: {
        type: [String, Number],
        default: ''
      },
      required: {
        type: Boolean,
        default: false
      },
      size: {
        type: String,
        default: 'md',
        validator: function (value) {
          return ['sm', 'md', 'lg'].indexOf(value) !== -1
        }
      },
      placeholder: {
        type: String,
        default: ''
      },
      full: {
        type: Boolean,
        default: false
      }
    },
    methods: {
      updateValue(event) {
        this.$emit('input', event.target.value)
      }
    }
  }
</script>

<style scoped lang="scss">
    input {
        display: block;
        font-size: $input-font-size;
        padding: $input-padding;
        border: 1px solid $input-border-color;
        width: 100%;

        &.input-sm {
            padding: $input-padding-sm;
        }

        &.input-lg {
            padding: $input-padding-lg;
        }
    }

    label {
        display: inline-block;
        font-size: $font-size-base;
        padding-bottom: 0.25em;
        cursor: pointer;
        user-select: none;
    }
</style>