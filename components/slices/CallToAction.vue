<template>

  <section class="call-to-action" :style="{'background-color': fields.background_color}">
    <prismic-link v-if="fields.cta_link" :link="fields.cta_link">
      <span class="btn btn-primary">{{fields.cta_title}}</span>
    </prismic-link>

    <picture>
      <source :srcset="fields.background_image.url"
              media="(min-width: 800px)">
      <img :src="fields.background_image.mobile.url">
    </picture>
  </section>
</template>

<script>
  export default {
    name: "call-to-action",
    data() {
      return {
        // title: "color-quote"
      }
    },
    props: [
      'fields'
    ],
    mounted() {
      console.log('CTA Data', this.fields);
    }
  }
</script>

<style scoped lang="scss">
  .call-to-action {
    padding: 100px 0;
    text-align: center;
    position: relative;
  }

  picture {
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: $z-index-level-page;
    opacity: .8;
  }


  a {
    z-index: $z-index-level-page + 1;
    position: relative;
  }
</style>
