<template>
    <div>
        <p>Loading the Prismic's Preview...</p>
    </div>
</template>

<script>
  export default {
    name: 'Preview',
    computed: {
      previewUrl() {
        return this.$store.getters.previewUrl;
      }
    },
    watch: {
      previewUrl(url) {
        console.log('previewUrl changed to: ', url);

        if (url) {
          window.location.replace(url);
        }
      }
    },
    beforeCreate() {
      const previewToken = this.$route.query.token;
      this.$store.dispatch('setupPreview', previewToken);
    }
  };
</script>