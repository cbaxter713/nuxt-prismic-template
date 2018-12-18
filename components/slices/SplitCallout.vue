<template>
  <section class="split-callout" :class="{'image-right': fields.image_alignment === 'right'}">
    <div class="callout-image">
      <img :src="fields.callout_image.url" />
    </div>
    <div class="callout-content">
      <h2 class="title">{{$prismic.dom.RichText.asText(fields.callout_title)}}</h2>
      <h5 class="subtitle">{{fields.callout_subtitle}}</h5>
      <prismic-link :link="fields.button_url">
        <span class="btn">{{fields.button_label}}</span>
      </prismic-link>
    </div>
  </section>
</template>

<script>
  export default {
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
    display: flex;
    height: 32vw;
  }

  .callout-image {
    width: 50%;
  }

  .callout-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .callout-content {
    width: 50%;
    padding: 40px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
  }



  .image-right .callout-image {
    order: 2;
  }

  .image-right .callout-content {
    order: 1;
  }
</style>
