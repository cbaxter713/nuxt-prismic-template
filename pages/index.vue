<template>
  <div class="wrapper">
    <hero-video v-if="bannerType === 'video'"
                :title="$prismic.asText(title)"
                :subtitle="$prismic.asText(subtitle)"
                :videoUrl="bannerVideo.url"
                :poster="bannerDesktop.url">
    </hero-video>
    <hero-banner v-else
                 :title="$prismic.asText(title)"
                 :subtitle="$prismic.asText(subtitle)"
                 :desktopUrl="bannerDesktop.url"
                 :mobileUrl="bannerMobile.url"
                 :imageAlt="bannerMobile.alt">
    </hero-banner>
    <slice-loader :slices="slices"></slice-loader>
  </div>
</template>

<script>
import HeroBanner from '../components/hero-banner.vue';
import HeroVideo from '../components/hero-video.vue';
import SliceLoader from '../components/slice-loader.vue';

export default {
  async asyncData ({ app, params, error, store }) {
    try {
      let entry = await store.dispatch('home/getHomePage');
      let data = entry.data;

      return {
        document: entry,
        documentId: entry.id,
        title: data.title,
        subtitle: data.subtitle,
        bannerType: data.hero_banner_type,
        bannerVideo: data.hero_video,
        bannerDesktop: data.hero_banner,
        bannerMobile: data.hero_banner.mobil,
        slices: data.body
      }
    } catch (err) {
      error({statusCode: 404, message: `The page you are looking for does not exist. `, err: err})
    }
  },
  components: {
    HeroBanner,
    HeroVideo,
    SliceLoader
  }
}
</script>

<style scoped lang="scss">
  .container {
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
  }

  .title {
    font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
      'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
    display: block;
    font-weight: 300;
    font-size: 100px;
    color: #35495e;
    letter-spacing: 1px;
  }

  .subtitle {
    font-weight: 300;
    font-size: 42px;
    color: #526488;
    word-spacing: 5px;
    padding-bottom: 15px;
  }

  .links {
    padding-top: 15px;
  }
</style>
