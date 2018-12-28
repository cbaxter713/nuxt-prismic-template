<template>
  <section>
    <div v-for="slice in slices">
        <image-banner v-if="slice.slice_type === 'image_banner'" :fields="slice.primary" :items="slice.items"></image-banner>
        <color-quote v-if="slice.slice_type === 'quote_with_color'" :fields="slice.primary"></color-quote>
        <split-callout  v-else-if="slice.slice_type === 'split_callout'" :fields="slice.primary"></split-callout>
        <call-to-action v-else-if="slice.slice_type === 'call_to_action'" :fields="slice.primary"></call-to-action>
        <text-block v-else-if="slice.slice_type === 'text'" :fields="slice.primary"></text-block>
    </div>
  </section>
</template>

<script>
  import ColorQuote from '../slices/ColorQuote.vue';
  import SplitCallout from '../slices/SplitCallout.vue';
  import CallToAction from '../slices/CallToAction.vue';
  import TextBlock from '../slices/TextBlock.vue';
  import ImageBanner from "../slices/ImageBanner";

  export default {
    name: "slice-loader",
    components: {
      ImageBanner,
      ColorQuote,
      SplitCallout,
      CallToAction,
      TextBlock
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
