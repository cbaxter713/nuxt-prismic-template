<template>
    <mq-layout :mq="mq">
        <slot></slot>
    </mq-layout>
</template>

<script>
  import { breakpointArray } from "../../plugins/mediaQueries";

  export default {
    name: "ResponsiveDisplay",
    props: {
      size: {
        type: [String, Array]
      },
      above: {
        type: String
      },
      below: {
        type: String
      }
    },
    computed: {
      mq() {
        let finalMq;

        if (this.size) {
          finalMq = this.size;
        } else if (this.above) {
          finalMq = breakpointArray.filter((val, index) => index > breakpointArray.indexOf(this.above));
        } else if (this.below) {
          finalMq = breakpointArray.filter((val, index) => index < breakpointArray.indexOf(this.below));
        }
        return finalMq;
      }
    },
  }
</script>

<style scoped lang="scss">

</style>