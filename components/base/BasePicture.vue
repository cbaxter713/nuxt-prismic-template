<template>
    <picture>
        <source :srcset="desktopImg" :media="breakpointSize">
        <img :src="mobileImg" :alt="altText" :title="title" />
    </picture>
</template>

<script>
  export default {
    name: "BasePicture",
    props: {
      mobileImg: {
        type: String,
        required: true
      },
      desktopImg: {
        type: String,
        required: true
      },
      breakpoint: {
        type: Number,
        default: 800
      },
      altText: {
        type: String,
        required: true
      },
      title: {
        type: String,
        default: ''
      }
    },
    computed: {
      breakpointSize() {
        return `(min-width: ${this.breakpoint}px)`;
      }
    },
  }
</script>

<style scoped lang="scss">
    picture {
        width: 100%;
    }
</style>