<template>
    <div v-if="xDesktop && yDesktop">
        <responsive-display :below="breakpoint" :class="aspectRatioClass" :style="aspectRatioStyle">
            <slot></slot>
        </responsive-display>
        <responsive-display :above="aboveBreakpoint" :class="aspectRatioClass" :style="aspectRatioStyleDesktop">
            <slot></slot>
        </responsive-display>
    </div>
    <div v-else :class="aspectRatioClass" :style="aspectRatioStyle">
        <slot></slot>
    </div>
</template>

<script>
  import { breakpointArray } from "../../plugins/mediaQueries";
  import ResponsiveDisplay from "../utility/ResponsiveDisplay.vue";

  export default {
    name: "LayoutAspectRatio",
    components: {ResponsiveDisplay},
    data() {
      return {
        aspectRatioClass: 'aspect-ratio-container'
      }
    },
    props: {
      x: {
        type: Number,
        required: true
      },
      y: {
        type: Number,
        required: true
      },
      xDesktop: {
        type: Number
      },
      yDesktop: {
        type: Number
      },
      breakpoint: {
        type: String,
        default: 'lg',
        validator: function (value) {
          return breakpointArray.indexOf(value) !== -1
        }
      }
    },
    computed: {
      aspectRatioStyle() {
        return {paddingBottom: `${this.aspectRatio(this.x, this.y)}%`}
      },
      aspectRatioStyleDesktop() {
        return {paddingBottom: `${this.aspectRatio(this.xDesktop, this.yDesktop)}%`}
      },
      aboveBreakpoint() {
        return breakpointArray[breakpointArray.indexOf(this.breakpoint) - 1]
      }
    },
    methods: {
      aspectRatio(x, y) {
        return ((y/x) * 100)
      }
    }
  }
</script>

<style scoped lang="scss">
    .aspect-ratio-container {
        position: relative;
        width: 100%;
    }
</style>