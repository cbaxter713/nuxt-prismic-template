<template>
  <header class="header" :class="{'fixed': fixed}">
    <nuxt-link to="/">
      <img class="header-logo" src="@/assets/img/zr-logo.png" />
    </nuxt-link>
    <nav>
      <div class="navbar-item" v-for="(link, index) in headerLinks" :key="index">
        <prismic-link :link="link.primary.link">{{link.primary.link_label}}</prismic-link>
      </div>
    </nav>
  </header>
</template>

<script>
  export default {
    name: "AppHeader",
    data() {
      return {
        headerLinks: []
      }
    },
    props: [
      'fixed'
    ],
    methods: {
      getHeaderLinks() {
        console.log('get header links from header');
        this.$store.dispatch('home/getNav').then(response => {
          console.log('data, ', response.data.nav);
          this.headerLinks = response.data.nav;
        });
      }
    },
    created() {
      this.getHeaderLinks();
    }
  }
</script>

<style scoped>
  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 20px;
    background: gray;
    box-shadow: 0px 0px 6px 3px rgba(0, 0, 0, 0.3);
  }

  header.fixed {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 1000;
  }

  img {
    height: 50px;
  }

  .navbar-item {
    display: inline-block;
    margin: 0 10px;
    color: white;
  }
</style>
