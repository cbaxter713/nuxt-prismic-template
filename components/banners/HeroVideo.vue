<template>
  <section class="hero-video">
    <div class="callout-content">
      <h1 class="title">
        {{ title }}
      </h1>
      <p class="large">
        {{ content }}
      </p>
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
      'content'
    ]
  }
</script>

<style scoped>
  .hero-video {
    position: relative;
    width: 100%;
  }

  .callout-content {
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
    display: block;
  }
</style>
