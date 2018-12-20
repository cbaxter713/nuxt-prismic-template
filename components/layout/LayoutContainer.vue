<template>
    <div :class="['container', {'desktop-spacing': desktopSpacing, 'content-width': content}]">
        <slot></slot>
    </div>
</template>

<script>
  import { breakpointArray } from "../../plugins/mediaQueries";

  export default {
    name: "LayoutContainer",
    data() {
      return {
        desktopBreakpoint: 'lg'
      }
    },
    props: {
      content: {
        type: Boolean,
        default: false
      },
    },
    computed: {
      desktopSpacing() {
        return breakpointArray.indexOf(this.$mq) >= breakpointArray.indexOf(this.desktopBreakpoint)
      }
    }
  }
</script>

<style scoped lang="scss">
    .container {
        padding: 0 $gutter;
        width: 100%;
        max-width: $container-width;
        margin: 0 auto;

        &.desktop-spacing {
            padding: 0 $gutter*2;
        }

        &.content-width {
            max-width: $content-width;
        }
    }
</style>