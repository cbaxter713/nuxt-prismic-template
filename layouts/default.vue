<template>
  <div id="app" class="app-wrapper">
    <app-header :fixed="true"></app-header>
    <main>
      <nuxt/>
    </main>
    <app-footer></app-footer>
  </div>
</template>

<script>
  import AppHeader from '../components/decorator/app-header.vue';
  import AppFooter from '../components/decorator/app-footer.vue';

  export default {
    name: 'BaseLayout',
    components: {
      AppHeader,
      AppFooter
    },
    data() {
      return {
      }
    }
  }
</script>

<style lang="scss">

</style>
