<template>
  <theme :theme="fields.theme">
    <section class="split-callout" :class="{'image-right': fields.image_alignment === 'right'}">
      <div class="callout-image">
        <img :src="fields.callout_image.url"/>
      </div>
      <callout-content
        :title="$prismic.asHtml(fields.callout_title)"
        :content="$prismic.asHtml(fields.callout_content)"
        :link="fields.button_url"
        :link_text="fields.button_label">
      </callout-content>
    </section>
  </theme>
</template>

<script>
  import CalloutContent from "../utility/CalloutContent";
  import Theme from "../utility/Theme";

  export default {
    components: {
      Theme,
      CalloutContent
    },
    name: "split-callout",
    data() {
      return {
        title: "split-callout"
      }
    },
    props: [
      'fields'
    ]
  }
</script>

<style scoped lang="scss">
  .split-callout {

    @media (min-width: $screen-sm) {
      display: flex;
      height: 32vw;
    }
  }

  .callout-image {
    @media (min-width: $screen-sm) {
      width: 50%;
    }
  }

  .callout-image img {
    @media (min-width: $screen-sm) {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .image-right .callout-image {
    @media (min-width: $screen-sm) {
      order: 2;
    }
  }

  .image-right .callout-content {
    @media (min-width: $screen-sm) {
      order: 1;
    }
  }
</style>
