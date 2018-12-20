<template>
  <section class="split-callout" :class="{'image-right': fields.image_alignment === 'right'}">
    <div class="callout-image">
      <img :src="fields.callout_image.url" />
    </div>
    <div class="callout-content">
      <h2 class="title">{{$prismic.dom.RichText.asText(fields.callout_title)}}</h2>
      <h5 class="subtitle">{{fields.callout_subtitle}}</h5>
      <router-link :to="fields.button_url">
        <button id="myButton" class="button">{{fields.button_label}}</button>
      </router-link>
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
  //@import "../../assets/styles/global.scss";

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

  button {
    padding: 10px 20px;
    background-color: $color-primary;
    color: white;
    text-align: center;
    margin: 20px 0;
  }

  .image-right .callout-image {
    order: 2;
  }

  .image-right .callout-content {
    order: 1;
  }
</style>
