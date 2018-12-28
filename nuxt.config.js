const pkg = require('./package');
const resolve = require('path').resolve;

let url = 'https://zaneray.com';
let title = pkg.name;
let desc = 'Base meta description of this project';
let img = `/assets/img/thor-logo.png`

module.exports = {
  mode: 'universal',

  /*
  ** Headers of the team
  */
  head: {
    titleTemplate: `%s - ${title}`,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'theme-color', content: '#ffffff' },
      { name: 'robots', content: 'all' },
      { hid: 'description', name: 'description', content: desc },
      { hid: 'og:url', property: 'og:url', content: url },
      { hid: 'og:image', property: 'og:image', content: img },
      { hid: 'og:title', property: 'og:title', content: title },
      { hid: 'og:description', property: 'og:description', content: desc },
      { hid: 'twitter:card', name: 'twitter:card', content: 'summary_large_image' },
      { hid: 'twitter:domain', name: 'twitter:domain', value: url },
      { hid: 'twitter:title', name: 'twitter:title', value: title },
      { hid: 'twitter:description', name: 'twitter:description', value: desc },
      { hid: 'twitter:image', name: 'twitter:image', content: img },
      { hid: 'twitter:url', name: 'twitter:url', value: url }
    ],
    link: [
      { hid: 'image_src', rel: 'image_src', href: img },
      { rel: 'stylesheet',  href: 'https://fonts.googleapis.com/css?family=Montserrat:200,400,700,800' },
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
  css: [
    { src: '~assets/styles/global.scss', lang: 'scss' }
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~plugins/globalComponents',
    '~plugins/mediaQueries'
  ],

  resolve: {
    extensions: ['*', '.js', '.vue', '.json'],
  },

  /*
  ** Nuxt.js modules
  */
  modules: [
    ['nuxt-sass-resources-loader', '~assets/styles/variables/variables.scss'],
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    ['prismic-nuxt', {
      endpoint: 'https://vue-demo.cdn.prismic.io/api/v2',
      linkResolver: function (doc) {
        if (doc.isBroken) { return '/not-found' }
        if (doc.type === 'content_page') { return doc.uid === 'home-page' ? '/' : `/content/${doc.uid}` }
        if (doc.type === 'team_page') { return '/team' }
        if (doc.type === 'team_member') { return '/team/' + doc.uid }
        return '/'
      }
    }]
  ],
  /*
  ** Axios module configuration
  */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },

  /*
  ** Build configuration
  */
  build: {
    postcss: {
      preset: {
        autoprefixer: {
          grid: true
        }
      }
    },

    /*
    ** You can extend webpack config hereUnhandledPromiseRejectionWarning:
    */
    extend(config, ctx) {

    }
  }
}
