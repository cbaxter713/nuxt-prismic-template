<template>
  <section>
    <div v-for="slice in slices">
        <color-quote v-if="slice.slice_type === 'quote_with_color'" :fields="slice.primary"></color-quote>
        <split-callout  v-else-if="slice.slice_type === 'split_callout'" :fields="slice.primary"></split-callout>
      <call-to-action v-else-if="slice.slice_type === 'call_to_action'" :fields="slice.primary"></call-to-action>
    </div>
  </section>
</template>

<script>
  import ColorQuote from '../slices/ColorQuote.vue';
  import SplitCallout from '../slices/SplitCallout.vue';
  import CallToAction from '../slices/CallToAction.vue';

  export default {
    name: "slice-loader",
    components: {
      ColorQuote,
      SplitCallout,
      CallToAction
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
