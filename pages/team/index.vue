<template>
  <div class="container">
    <!--<prismic-edit-button :documentId="documentId"/>-->
    <h1 class="title">
      {{$prismic.asText(entry.title)}}
    </h1>
    <section class="team-member-grid">
      <nuxt-link v-for="member in entry.team_members" :to="`/team/${member.team_member_list.slug}`" class="team-member" :key="member.team_member_list.slug">
        <img :src="member.team_member_list.data.image.url" />
        <h3>{{$prismic.asText(member.team_member_list.data.name)}}</h3>
        <p>{{$prismic.asText(member.team_member_list.data.title)}}</p>
      </nuxt-link>
    </section>
  </div>
</template>

<script>
  import {beforeEnter, enter, leave} from '~/mixins/transitions'

  export default {
    name: "Team",
    transition: {
      name: 'page',
      mode: 'out-in',
      css: false,
      beforeEnter,
      enter,
      leave
    },
    async asyncData ({ app, params, error, store }) {
      try {
        let entry = await store.dispatch('team/getTeam')

        console.log('team', entry)

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

<style scoped>
  .container {
    max-width: 1200px;
    margin-left: auto;
    margin-right: auto;
    padding: 40px 10px;
  }

  .title {
    font-size: 32px;
  }

  .team-member-grid {
    display: grid;
    margin: 30px 0;
    grid-template-columns: 1fr 1fr 1fr;
    grid-column-gap: 20px;
  }

  .team-member h3 {
    text-transform: uppercase;
    font-size: 24px;
  }

  .team-member img {
    max-width: 100%;
  }
</style>
