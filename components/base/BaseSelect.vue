<template>
    <base-input-wrapper :full="full">
        <label v-if="label" :for="id">{{label}}</label>
        <div class="select-wrapper">
            <select :id="id"
                    :value="value"
                    :class="{'input-sm': size === 'sm', 'input-lg': size === 'lg'}"
                    :placeholder="placeholder"
                    :required="required"
                    @change="updateValue">
                <option v-for="option of options"
                        :value="option"
                        :selected="option === value"
                        :key="option">
                    {{option}}
                </option>
            </select>
        </div>
    </base-input-wrapper>
</template>

<script>
  import BaseInputWrapper from "./BaseInputWrapper.vue";
  export default {
    name: "BaseSelect",
    components: {BaseInputWrapper},
    props: {
      id: {
        type: [String, Number],
        default: ''
      },
      label: {
        type: String,
        default: ''
      },
      value: {
        type: [String, Number]
      },
      size: {
        type: String,
        default: 'md',
        validator: function (value) {
          return ['sm', 'md', 'lg'].indexOf(value) !== -1
        }
      },
      options: {
        type: Array,
        required: true
      },
      placeholder: {
        type: String,
        default: ''
      },
      required: {
        type: Boolean,
        default: false
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
    $select-icon-width: 2.5em;

    .select-wrapper {
        display: block;
        position: relative;
        width: 100%;

        &:after {
            position: absolute;
            top: 0;
            bottom: 0;
            right: 0;
            width: $select-icon-width;
            display: block;
            content: "";
            background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAAGFBMVEUAAAAZJCYWISIYIyQYIiUWIiIYIyQYIiXh0rToAAAACHRSTlMA/hTRqiinvwFkb0sAAABCSURBVHjajchBDsAgDAPBOJDw/x+XVN0icQGfPGs3i+2GEqeiLCXWLENzvdzrDfP2ls/NjfKbgimYglfBq2Dm+LwHguMA235EdKYAAAAASUVORK5CYII=") center no-repeat;
            pointer-events: none;
        }
    }

    select {
        display: block;
        appearance: none;
        font-size: $input-font-size;
        padding: $input-padding;
        padding-right: $select-icon-width + 1em;
        border: 1px solid $input-border-color;
        border-radius: 0;
        width: 100%;
        cursor: pointer;

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