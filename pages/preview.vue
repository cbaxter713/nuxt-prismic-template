<template>
    <div>
        <p>Loading the Prismic's Preview...</p>
    </div>
</template>

<script>
  import PrismicConfig from '../prismic-configuration';

  export default {
    name: 'Preview',
    methods: {
      async setupPreview() {
        const token = this.$route.query.token;
        let ctx = await this.$prismic.initApi();
        ctx.api.previewSession(token, PrismicConfig.linkResolver, '/').then((url) => {
          window.location.replace(url);
        });
      }
    },
    mounted () {
      this.setupPreview();
    }
  };
</script>