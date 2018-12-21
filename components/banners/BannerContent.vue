<template>
  <div class="banner-content">
    <div v-if="title" class="title" v-html="title"></div>
    <div v-if="content" v-html="content"></div>

    <div v-if="links">
    <prismic-link v-for="link in links" class="btn" :link="link.banner_link" :key="link.banner_link_label">
     {{link.banner_link_label}}
    </prismic-link>
    </div>
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
    align-items: center;
    padding: 3rem;
    @media (min-width: $screen-sm) {
      max-width: 50%;
    }
  }

  .btn {
    min-width: 14em;
    width: auto;
    margin-bottom: 1em;

    &:last-child {
      margin-bottom: 0;
    }
  }
</style>
