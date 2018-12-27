<template>
  <section class="hero-banner">
    <theme :theme="'dark'">
    <callout-content
                :title="$prismic.asHtml(title)"
                :content="$prismic.asHtml(content)"
                >
    </callout-content>
      <base-picture
        :desktopImg="desktopUrl"
        :mobileImg="mobileUrl"
        :altText="imageAlt ? imageAlt : $prismic.asText(title)"
      ></base-picture>
    </theme>
  </section>
</template>

<script>

  import CalloutContent from '../utility/CalloutContent.vue';
  import PictureComponent from "../utility/PictureComponent";
  import Theme from "../utility/Theme";
  import BasePicture from "../base/BasePicture";

  export default {
    components: {
      BasePicture,
      Theme,
      PictureComponent,
      CalloutContent
    },
    name: "hero-banner",
    props: {
      title: Array,
      content: Array,
      desktopUrl: String,
      mobileUrl: String,
      imageAlt: String,
    }
  }




</script>

<style scoped lang="scss">
  .hero-banner {
    position: relative;
    width: 100%;
    position: relative;

    img {
      z-index: $z-index-level-page;
      position: relative;
      display: block;
    }

    .callout-content {
      z-index: $z-index-level-page + 1;
      position: absolute;
    }
  }
</style>
