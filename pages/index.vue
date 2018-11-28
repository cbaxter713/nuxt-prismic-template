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
  head () {
    return {
      title: this.seoTitle,
      meta: [
        { hid: 'description', name: 'description', content: this.seoDesc },
        { hid: 'og:url', property: 'og:url', content: this.seoUrl },
        { hid: 'og:image', property: 'og:image', content: this.seoImage },
        { hid: 'og:title', property: 'og:title', content: this.seoTitle },
        { hid: 'og:description', property: 'og:description', content: this.seoDesc },
        { hid: 'twitter:card', name: 'twitter:card', content: 'summary_large_image' },
        { hid: 'twitter:domain', name: 'twitter:domain', value: this.seoUrl },
        { hid: 'twitter:title', name: 'twitter:title', value: this.seoTitle },
        { hid: 'twitter:description', name: 'twitter:description', value: this.seoDesc },
        { hid: 'twitter:image', name: 'twitter:image', content: this.seoImage },
        { hid: 'twitter:url', name: 'twitter:url', value: this.seoUrl }
      ],
      link: [
        { hid: 'image_src', rel: 'image_src', href: this.seoImage }
      ]
    }
  },
  async asyncData ({ app, params, error, store }) {
    try {
      let entry = await store.dispatch('home/getHomePage');
      let data = entry.data;

      return {
        document: entry,
        documentId: entry.id,
        homeData: data,
        title: data.title,
        subtitle: data.subtitle,
        bannerType: data.hero_banner_type,
        bannerVideo: data.hero_video,
        bannerDesktop: data.hero_image,
        bannerMobile: data.hero_image.mobile,
        slices: data.body
      }
    } catch (err) {
      error({statusCode: 404, message: `The page you are looking for does not exist. `, err: err})
    }
  },
  computed: {
    seoTitle () {
      if (this.homeData.meta_title) {
        return this.homeData.meta_title
      } else {
        return this.homeData.title
      }
    },
    seoDesc () {
      if (this.homeData.meta_description) return this.homeData.meta_description
      return this.homeData.excerpt
    },
    seoImage () {
      if (this.homeData.meta_image) return this.homeData.meta_image.url
      return this.homeData.hero_image.url
    },
    seoUrl () {
      return `${this.$store.getters.baseUrl}${this.$route.fullPath}`
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
