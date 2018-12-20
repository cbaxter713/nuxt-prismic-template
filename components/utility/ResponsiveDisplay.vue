<template>
    <mq-layout :mq="mq">
        <slot></slot>
    </mq-layout>
</template>

<script>
  export default {
    name: "ResponsiveDisplay",
    data() {
      return {
        mediaQueries: ['xs', 'sm', 'md', 'lg', 'xl']
      }
    },
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
          finalMq = this.mediaQueries.filter((val, index) => index > this.mediaQueries.indexOf(this.above));
        } else if (this.below) {
          finalMq = this.mediaQueries.filter((val, index) => index < this.mediaQueries.indexOf(this.below));
        }
        return finalMq;
      }
    },
  }
</script>

<style scoped lang="scss">

</style>