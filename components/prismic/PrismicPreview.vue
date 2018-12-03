<template>
    <div class="cms-preview-wrapper" :data-wio-id="documentId">
        <slot></slot>
    </div>
</template>

<script>
  export default {
    name: "PrismicPreview",
    props: {
      documentId: {
        required: true
      }
    }
  }
</script>

<style lang="scss">

</style>