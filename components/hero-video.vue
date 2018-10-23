<template>
  <section class="hero-video">
    <div class="banner-content">
      <h1 class="title">
        {{ title }}
      </h1>
      <h3>
        {{ subtitle }}
      </h3>
    </div>
    <video class="video-src" autoplay="autoplay"
           loop="loop" muted="muted"
           :poster="poster">
      <source :src="videoUrl" type="video/mp4">
    </video>
  </section>
</template>

<script>
  export default {
    name: "hero-video",
    data() {
      return {
      }
    },
    props: [
      'videoUrl',
      'poster',
      'title',
      'subtitle'
    ]
  }
</script>

<style scoped>
  .hero-video {
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

  .video-src {
    width: 100%;
    height: 100%;
  }
</style>
