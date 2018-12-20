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
    .wio-link {
        position: absolute;
        top: $margin-base;
        right: $margin-base;
        height: 50px;
        width: 50px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 50%;
        background-color: rgba($color-warning, 0.6);
        z-index: $prismic-edit-z-index;
        transition: all 0.3s ease;

        &:hover {
            background-color: rgba($color-warning, 1)
        }
    }
</style>
