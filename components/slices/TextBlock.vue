<template>
    <theme :theme="fields.theme">
    <section class="text-block">
        <layout-container content >
            <div v-html="$prismic.asHtml(fields.text)" :class="'columns-'  + fields.layout"></div>
        </layout-container>
    </section>
    </theme>
</template>

<script>
  import LayoutContainer from "../layout/LayoutContainer";
  import Theme from "../utility/Theme";
  export default {
    name: "TextBlock",
    components: {
      Theme,
      LayoutContainer},
    props: [
      'fields'
    ]
  }
</script>

<style scoped lang="scss">
    .text-block {
        padding-top: $margin-large;
        padding-bottom: $margin-large;
    }

    .columns-2 {
        @media (min-width: $screen-sm) {
            column-count: 2;
            column-gap: $gutter;
        }
    }
</style>
