<template>
  <header class="header" :class="{'fixed': fixed}">
    <div class="header-content container">
      <nuxt-link to="/">
        <img class="header-logo" src="@/assets/img/thor-logo.png" />
      </nuxt-link>
      <nav>
        <div class="navbar-item" v-for="(link, index) in headerLinks" :key="index">
          <prismic-link :link="link.primary.link">{{link.primary.link_label}}</prismic-link>
        </div>
      </nav>
    </div>
  </header>
</template>

<script>
  export default {
    name: "AppHeader",
    props: [
      'headerLinks',
      'fixed'
    ],
    mounted() {
      console.log('headerLinks', this.headerLinks)
    }
  }
</script>

<style scoped lang="scss">
  header {
    height: $header-height;
    padding: 10px 0;
    background: $color-primary;
    box-shadow: 0px 0px 6px 3px rgba(0, 0, 0, 0.3);
  }

  .header-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 100%;
  }

  header.fixed {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 1000;
  }

  img {
    height: 30px;
  }

  .navbar-item {
    display: inline-block;
    margin: 0 10px;
    color: white;
  }
</style>
