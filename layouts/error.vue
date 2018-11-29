<template>
    <div class="error-container container">
        <h1 v-if="error.statusCode === 404">Page not found</h1>
        <h1 v-else>An error occurred</h1>
        <nuxt-link to="/" class="reset-button">
            <button>Get back to Thor</button>
        </nuxt-link>
    </div>
</template>

<script>
  export default {
    name: "error",
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