<template>
    <picture>
        <source :srcset="desktopImg" :media="breakpointQuery">
        <img :src="mobileImg" :alt="altText" :title="title" />
    </picture>
</template>

<script>
  import { breakpointArray, getBreakpointByName } from "../../plugins/mediaQueries";

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
        type: String,
        default: 'sm',
        validator: function (value) {
          return breakpointArray.indexOf(value) !== -1
        }
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
      breakpointQuery() {
        return `(min-width: ${getBreakpointByName(this.breakpoint)}px)`;
      }
    }
  }
</script>

<style scoped lang="scss">
    picture {
        width: 100%;
    }

    img {
        display: block;
    }
</style>
