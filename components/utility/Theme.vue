<template>
  <div class="theme" :class="'theme-' + theme">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "Theme",
    props: {
      theme: {
        type: String,
        default: 'light',
        validator: function (value) {
          return ['light', 'dark', 'primary'].indexOf(value) !== -1
        }
      },

    }
  }
</script>

<style lang="scss">
  .theme-dark,
  .theme-primary {
    color: $color-white;
    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      color: $color-white;
    }

    .btn-primary {
      background: $color-white;
      color: $color-black;

      &:hover {
        background-color: $gray-lightest;
      }
    }
  }

  .theme-dark {
    background-color: $color-black;
  }

  .theme-primary {
    background-color: $color-primary;
  }
</style>
