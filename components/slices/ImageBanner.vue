<template>
  <section class="image-banner" :class="{
    'align-right': fields.banner_alignment === 'right',
    'align-left': fields.banner_alignment === 'left',
    'align-center': fields.banner_alignment === 'center',
    'theme-light': fields.banner_theme === 'light',
    'theme-dark': fields.banner_theme === 'dark'
  }">
    <banner-content
      :title="fields.banner_title"
      :content="fields.banner_content"
      :links="items">
    </banner-content>
    <picture-component
      :desktopUrl="fields.banner_image.url"
      :mobileUrl="fields.banner_image.Mobile.url"
      :imageAlt="fields.banner_image.alt"
    >
    </picture-component>
  </section>
</template>

<script>

  import BannerContent from "../banners/BannerContent";
  import PictureComponent from "../utility/PictureComponent";

  export default {
    components: {
      PictureComponent,
      BannerContent},
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
