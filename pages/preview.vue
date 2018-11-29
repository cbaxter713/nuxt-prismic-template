<template>
    <div>
        <p>Loading the Prismic's Preview...</p>
    </div>
</template>

<script>
  export default {
    name: 'Preview',
    beforeCreate () {
      const previewToken = this.$route.query.token;
      this.$prismic.runPreview(previewToken);
    }
  };
</script>