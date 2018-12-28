<template>
  <picture class="picture-component">
    <source :srcset="desktopUrl" media="(min-width: 800px)">
    <img :src="mobileUrl" :alt="imageAlt" class="picture-component-image">
  </picture>
</template>

<script>
  export default {
    name: "picture-component",
    data() {
      return {
      }
    },
    props: {
      desktopUrl: String,
      mobileUrl: String,
      imageAlt: String,
    }
  }
</script>

<style scoped lang="scss">

</style>
