<template>
  <section class="hero-banner">
    <div class="banner-content">
      <h1 class="title">
        {{ title }}
      </h1>
      <h3>
        {{ subtitle }}
      </h3>
    </div>
    <picture>
      <source :srcset="desktopUrl" media="(min-width: 800px)">
      <img :src="mobileUrl" :alt="imageAlt">
    </picture>
  </section>
</template>

<script>
  export default {
    name: "hero-banner",
    data() {
      return {
      }
    },
    props: {
      title: String,
      subtitle: String,
      desktopUrl: String,
      mobileUrl: String,
      imageAlt: String
    }
  }
</script>

<style scoped lang="scss">
  .hero-banner {
    position: relative;
    width: 100%;
  }

  .banner-content {
    position: absolute;
    top: 50%;
    left: 15%;
    max-width: 500px;
    color: #fff;
    transform: translateY(-50%);
  }

  img {
    width: 100%;
  }
</style>
