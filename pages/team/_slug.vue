<template>
  <layout-container>
    <router-link to="/team" class="back-link">< Back</router-link>
    <div class="team-member-header">
      <h1 class="title">{{$prismic.dom.RichText.asText(entry.name)}}</h1>
      <h4 class="position">- {{$prismic.dom.RichText.asText(entry.position)}}</h4>
    </div>
    <section class="team-member-body">
      <img :src="entry.image.url" />
      <p>{{ $prismic.dom.RichText.asText(entry.profile) }}</p>
    </section>
  </layout-container>
</template>

<script>
  import LayoutContainer from "../../components/layout/LayoutContainer";
  export default {
    name: "TeamMember",
    components: {LayoutContainer},
    transition: {
      name: 'page',
      mode: 'out-in'
    },
    async asyncData ({ app, params, error, store }) {
      try {
        let entry = await store.dispatch('team/getTeamMemberByUid', params.slug)

        return {
          document: entry,
          entry: entry.data
        }
      } catch (err) {
        error({statusCode: 404, message: `The page you are looking for does not exist. `, err: err})
      }
    }
  }
</script>

<style scoped lang="scss">
  .back-link {
    display: block;
    font-size: 20px;
  }

  .team-member-header {
    display: flex;
    align-items: center;
    padding: 10px 0;
  }

  .position {
    margin-left: 20px;
  }

  .team-member-body {
    display: grid;
    /*grid-template-columns: 1fr 2fr;*/
    /*grid-column-gap: 20px;*/
  }
</style>
