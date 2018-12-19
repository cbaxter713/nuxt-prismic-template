<template>
  <div class="banner-content">
    <div v-if="title" class="title" v-html="$prismic.asHtml(title)"></div>
    <div v-if="content" v-html="$prismic.asHtml(content)"></div>
    <prismic-link v-for="link in links" :link="link.banner_link" :key="link.banner_link_label">
      <span class="btn">{{link.banner_link_label}}</span>
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
      title: Array,
      content: Array,
      links: Array,
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
