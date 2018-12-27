<template>
  <div class="theme" :class="'theme-' + theme">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "Theme",
    props: {
      theme: String
    }
  }
</script>

<style scoped lang="scss">
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
  }

  .theme-dark {
    background-color: $color-black;
  }

  .theme-primary {
    background-color: $color-primary;
  }




</style>
