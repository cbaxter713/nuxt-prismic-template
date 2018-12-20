<template>
  <section class="color-quote" :style="{'background-color': fields.background_color}">
    <p class="x-large">{{fields.quote}}</p>
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

<style scoped lang="scss">
  .color-quote {
    width: 100%;
    padding: 10vw $gutter;
    text-align: center;
  }

  p {
    color: #fff;
    max-width: 780px;
    margin: 0 auto;
    line-height: 1.2em;
  }


</style>
