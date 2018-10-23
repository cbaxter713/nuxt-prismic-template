<template>
  <section class="color-quote" :style="{'background-color': fields.background_color}">
    <h3 class="quote">{{fields.quote}}</h3>
  </section>
</template>

<script>
  export default {
    name: "color-quote",
    data() {
      return {
        title: "color-quote"
      }
    },
    props: [
      'fields'
    ]
  }
</script>

<style scoped>
  .color-quote {
    width: 100%;
    padding: 60px;
    text-align: center;
  }

  .quote {
    font-size: 24px;
    font-weight: bold;
    color: #fff;
  }
</style>
