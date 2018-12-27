<template>
  <div class="callout-content" :class="alignment">
    <div v-if="title" class="title" v-html="title"></div>
    <div v-if="content" v-html="content"></div>
    <div v-if="links">
      <prismic-link
        class="callout-content-link"
        v-for="link in links"
        :key="link.banner_link_label"
        :link="link.banner_link"
        >
        <base-button
          :label="link.banner_link_label"
        ></base-button>
      </prismic-link>
    </div>
  </div>
</template>

<script>
  import BaseButton from "../base/BaseButton";

  export default {
    components: {BaseButton},
    name: "callout-content",
    data() {
      return {}
    },
    props: {
      alignment: String,
      theme: String,
      title: String,
      content: String,
      links: Array
    }
  }

</script>

<style scoped lang="scss">
  .callout-content {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;

    align-items: flex-start;
    text-align: left;
    padding: 3rem;
    @media (min-width: $screen-sm) {
      max-width: 50%;
    }

    &.center {
      align-items: center;
      text-align: center;
      left: 50%;
      transform: translateX(-50%);
    }

    &.left {
      align-items: flex-start;
    }

    &.right {
      text-align: left;
      align-items: flex-start;
      @media (min-width: $screen-sm) {
        right: 0;
        left: auto;
      }
    }
  }

  .callout-content-link {
    min-width: 14em;
    width: auto;
    margin-bottom: 1em;
    display: block;

    &:last-child {
      margin-bottom: 0;
    }
  }
</style>
