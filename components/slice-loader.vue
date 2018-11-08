<template>
  <section>
    <div v-for="slice in slices">
        <color-quote v-if="slice.slice_type === 'quote_with_color'" :fields="slice.primary"></color-quote>
        <split-callout  v-else-if="slice.slice_type === 'split_callout'" :fields="slice.primary"></split-callout>
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
