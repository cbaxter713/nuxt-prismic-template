import Vue from 'vue'

/*
  Prismic Link
  Helper component that takes a Prismic link object and resolves
  the proper link markup, whether that be a nuxt-link or a tag
 */
import PrismicLink from '~/components/prismic/PrismicLink.vue'
Vue.component('PrismicLink', PrismicLink)


/*
  Prismic Preview
  A wrapping component that takes a documentId and provides the
  proper wrapping markup for the Prismic Preview Functionality
 */
import PrismicPreview from '~/components/prismic/PrismicPreview.vue'
Vue.component('PrismicPreview', PrismicPreview)



/*
  Slice Loader
  A conditional renderer that can take an array of Prismic slice components
  and render each out appropriately, according to each slice's mapped Vue component
 */
import SliceLoader from '~/components/prismic/SliceLoader.vue'
Vue.component('SliceLoader', SliceLoader)