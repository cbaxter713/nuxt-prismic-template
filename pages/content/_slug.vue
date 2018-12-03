<template>
    <div>
        <prismic-preview :documentId="documentId">
            <hero-video v-if="contentData.banner_type === 'video'"
                        :title="contentData.title"
                        :subtitle="contentData.subtitle"
                        :videoUrl="contentData.hero_video.url"
                        :poster="contentData.hero_image.url">
            </hero-video>
            <hero-banner v-else
                         :title="contentData.title"
                         :subtitle="contentData.subtitle"
                         :desktopUrl="contentData.hero_image.url"
                         :mobileUrl="contentData.hero_image.mobile.url"
                         :imageAlt="contentData.hero_image.alt">
            </hero-banner>
            <section class="content-body">
                <slice-loader :slices="slices"></slice-loader>
            </section>
        </prismic-preview>
    </div>
</template>

<script>
  import HeroBanner from '../../components/banners/HeroBanner.vue';
  import HeroVideo from '../../components/banners/HeroVideo.vue';
  import {beforeEnter, enter, leave} from '~/mixins/transitions';

  export default {
    name: "contentSlug",
    transition: {
      name: 'page',
      mode: 'out-in',
      css: false,
      beforeEnter,
      enter,
      leave
    },
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
    components: {
      HeroBanner,
      HeroVideo
    },
    async asyncData ({ app, params, error, store }) {
      try {
        let document = await store.dispatch('content/getContentDocByUID', params.slug);
        let data = document.data;

        return {
          document: document,
          documentId: document.id,
          contentData: data,
          slices: data.body
        }
      } catch (err) {
        error({statusCode: 404, message: `The page you are looking for does not exist. `, err: err})
      }
    },
    computed: {
      seoTitle () {
        if (this.contentData.meta_title) {
          return this.contentData.meta_title
        } else {
          return this.contentData.title
        }
      },
      seoDesc () {
        return this.contentData.meta_description ? this.contentData.meta_description : ''
      },
      seoImage () {
        if (this.contentData.meta_image) return this.contentData.meta_image.url
        return this.contentData.hero_image.url
      },
      seoUrl () {
        return `${this.$store.getters.baseUrl}${this.$route.fullPath}`
      }
    }
  }
</script>

<style scoped lang="scss">
    .content-body {
        margin-top: 30px;
    }
</style>