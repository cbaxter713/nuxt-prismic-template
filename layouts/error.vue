<template>
    <layout-container class="error-container">
        <h1 v-if="error.statusCode === 404">Page not found</h1>
        <h1 v-else>An error occurred</h1>
        <nuxt-link to="/" class="reset-button">
            <span class="btn btn-primary">Thor Industries Home</span>
        </nuxt-link>
    </layout-container>
</template>

<script>
  import LayoutContainer from "../components/layout/LayoutContainer";
  export default {
    name: "error",
    components: {LayoutContainer},
    transition: {
      name: 'page',
      mode: 'out-in'
    },
    props: ['error']
  }
</script>

<style scoped lang="scss">
    .error-container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding-top: $margin-large;
        height: 100%;
    }

    .reset-button {
        margin-top: $margin-large;
    }
</style>