<template>
  <section class="hero-banner">
    <banner-content
                :title="$prismic.asHtml(title)"
                :content="$prismic.asHtml(content)"
                class="theme-dark">
    </banner-content>
    <picture-component
      :desktopUrl="desktopUrl"
      :mobileUrl="mobileUrl"
      :imageAlt="imageAlt"
      >
    </picture-component>
  </section>
</template>

<script>

  import BannerContent from './BannerContent.vue';
  import PictureComponent from "../utility/PictureComponent";

  export default {
    components: {
      PictureComponent,
      BannerContent
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

<style lang="scss">
  .hero-banner {
    position: relative;
    width: 100%;
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

    &.align-left .banner-content {
      left: 0;
      right: auto;
    }

    &.align-right .banner-content {
      right: 0;
      left: auto;
    }

    &.align-center .banner-content {
      left: 50%;
      transform: translateX(-50%);
      text-align: center;
    }
  }
</style>
