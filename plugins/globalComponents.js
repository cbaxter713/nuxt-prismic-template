import Vue from 'vue'
// Utility Components
// These are global components that we want access to
// from most of our pages or components


// Link Helper Component
// Using Nuxt Link will resolve to a local route
// So we check if the link from prismic is a Document or URL
// And we return the correct template
import prismicLink from '~/components/utility/prismic-link'
import thorLogo from '~/components/utility/thor-logo'
Vue.component('prismicLink', prismicLink)
Vue.component('thorLogo', thorLogo)
