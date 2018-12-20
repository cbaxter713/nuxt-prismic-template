<template>
    <div :class="['input-wrapper', {'full-width': full}]">
        <slot></slot>
    </div>
</template>

<script>
  export default {
    name: "BaseInputWrapper",
    props: {
      full: {
        type: Boolean,
        default: false
      },
    },
  }
</script>

<style scoped lang="scss">
    .input-wrapper {
        display: block;
        margin-bottom: $margin-base;
        width: $input-default-width;

        &.full-width {
            width: 100%;
        }
    }
</style>