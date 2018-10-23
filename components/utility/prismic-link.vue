<template>
  <nuxt-link class="pr" :to="$prismic.asLink(link)" v-if="link.link_type === 'Document'">
    <slot></slot>
  </nuxt-link>
  <a :href="$prismic.asLink(link)" :target="linkTarget" v-else-if="link.link_type === 'Web'">
    <slot></slot>
  </a>
  <nuxt-link :to="link" v-else>
    <slot></slot>
  </nuxt-link>
</template>

<script>
  export default {
    props: ['link'],
    computed: {
      linkTarget() {
          return this.link.target === '_blank' ? '_blank' : '_self'
      }
    }
  }
</script>

