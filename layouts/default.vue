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

<style>
  @import "../assets/css/reset.css";

  main {
    background-color: #000;
    padding-top: 70px;
    width: 100%;
    min-height: 100vh;
    color: #fff;
    font-family: Avenir, "Helvetica Neue", Helvetica, Arial, sans-serif;
  }

  .fade-enter-active,
  .fade-leave-active {
    transition-duration: 0.3s;
    transition-property: opacity;
    transition-timing-function: ease;
  }

  .fade-enter,
  .fade-leave-active {
    opacity: 0
  }
</style>
