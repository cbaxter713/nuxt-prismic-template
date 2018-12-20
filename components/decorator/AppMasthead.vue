<template>
  <header :class="{'fixed': fixed}">
    <layout-container class="masthead-content">
      <nuxt-link class="logo-link" to="/">
        <thor-logo></thor-logo>
      </nuxt-link>
      <nav>
        <div class="navbar-item" v-for="(link, index) in headerLinks" :key="index">
          <prismic-link :link="link.primary.link">{{link.primary.link_label}}</prismic-link>
        </div>
      </nav>
    </layout-container>
  </header>
</template>

<script>
  import LayoutContainer from "../layout/LayoutContainer";
  export default {
    name: 'AppMasthead',
    components: {LayoutContainer},
    props: [
      'fixed',
      'headerLinks'
    ],
  }
</script>

<style lang="scss" scoped>
  @import "../../assets/styles/global.scss";

  header {
    height: $header-height;
    padding: $margin-base 0;
    text-align: center;
    background-color: #fff;
  }

  .logo-link {
    width: 200px;
    display: block;
    height: 36px;
  }

  .masthead-content {
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
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
    color: $color-primary;
    font-size: $font-size-small;
    text-transform: uppercase;
  }
</style>
