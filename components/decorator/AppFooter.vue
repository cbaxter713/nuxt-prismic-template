<template>
  <footer class="footer">
    <nav>
      <div class="navbar-item" v-for="(link, index) in footerLinks" :key="index">
        <prismic-link :link="link.primary.link">{{link.primary.link_label}}</prismic-link>
      </div>
    </nav>
  </footer>
</template>

<script>
  export default {
    name: "AppFooter",
    props: [
      'footerLinks'
    ]
  }
</script>

<style scoped>
  .footer {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    background-color: gray;
    color: #fff;
    padding: 60px 20px;
  }

  .navbar-item {
    display: inline-block;
    margin: 0 10px;
    color: white;
  }
</style>
