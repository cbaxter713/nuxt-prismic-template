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
    },
    beforeMount() {
      //Register service worker globally
      if ('serviceWorker' in navigator) {
        window.addEventListener('load', function() {
          navigator.serviceWorker.register('/sw.js').then(function(registration) {
            // Registration was successful
            console.log('ServiceWorker registration successful with scope: ', registration.scope);
          }, function(err) {
            // registration failed :(
            console.log('ServiceWorker registration failed: ', err);
          });
        });
      }
    }
  }
</script>

<style scoped lang="scss">
  app-header {
    position: relative;
    z-index: $header-z-index;
  }

  main {
    position: relative;
    z-index: $main-page-z-index;
  }

  app-footer {
    z-index: $footer-z-index;
  }
</style>
