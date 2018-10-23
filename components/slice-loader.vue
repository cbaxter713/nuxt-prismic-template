<template>
  <section>
    <div v-for="slice in slices">
      <template v-if="slice.slice_type === 'quote_with_color'">
        <color-quote :fields="slice.primary"></color-quote>
      </template>
      <template v-else-if="slice.slice_type === 'split_callout'">
        <split-callout :fields="slice.primary"></split-callout>
      </template>
    </div>

  </section>
</template>

<script>
  import ColorQuote from './slices/color-quote.vue';
  import SplitCallout from './slices/split-callout.vue';

  export default {
    name: "slice-loader",
    components: {
      ColorQuote,
      SplitCallout
    },
    data() {
      return {
        title: "slice-loader"
      }
    },
    props: {
      slices: Array
    }
  }
</script>

<style scoped>

</style>
