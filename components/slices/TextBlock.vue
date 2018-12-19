<template>
    <section class="text-block container">
        <div class="text-block-content" v-html="$prismic.asHtml(fields.text)"></div>
    </section>
</template>

<script>
  export default {
    name: "TextBlock",
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

    .text-block-content {
        max-width: $content-width;
        margin: 0 auto;
    }
</style>
