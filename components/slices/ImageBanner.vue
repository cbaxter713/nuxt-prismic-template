<template>

  <section class="image-banner">
    <theme :theme="fields.banner_theme">
      <banner-content
        :title="$prismic.asHtml(fields.banner_title)"
        :content="$prismic.asHtml(fields.banner_content)"
        :links="items"
        :alignment="fields.banner_alignment"
      >
      </banner-content>
      <base-picture
        :desktopImg="fields.banner_image.url"
        :mobileImg="fields.banner_image.Mobile.url"
        :altText="fields.banner_image.alt ? fields.banner_image.alt : $prismic.asText(fields.banner_title)"
      >
      </base-picture>
    </theme>
  </section>

</template>

<script>

  import BannerContent from "../banners/BannerContent";
  import BasePicture from "../base/BasePicture";
  import Theme from "../utility/Theme";

  export default {
    components: {
      Theme,
      BasePicture,
      BannerContent
    },
    name: "image-banner",
    data() {
      return {
        // title: "color-quote"
      }
    },
    props: {
      fields: Object,
      items: Array
    }
  }
</script>

<style lang="scss">
  .image-banner {
    position: relative;

    img {
      z-index: $z-index-level-page;
      position: relative;
      display: block;
    }

    .banner-content {
      z-index: $z-index-level-page + 1;
      position: absolute;
    }
  }
</style>
