<template>
  <div class="banner-content">
    <h1 v-if="title" class="title">
      {{ title }}
    </h1>
    <p v-if="content">
      {{content[0].text}}
    </p>

    <prismic-link v-if="link" :link="link">
      <span class="btn">{{link_text}}</span>
    </prismic-link>
  </div>
</template>

<script>
  export default {
    name: "banner-content",
    data() {
      return {
      }
    },
    props: {
      title: String,
      content: Array,
      link: Object,
      link_text: String
    }
  }

</script>

<style scoped lang="scss">
  .banner-content {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 3rem;
    @media (min-width: $screen-sm) {
      max-width: 50%;
    }
  }
</style>
