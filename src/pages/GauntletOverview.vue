<template>
  <div class="gauntlet-page">
    <h1>Page based on userid</h1>

    <ul>
      <li v-for="gauntlet in gauntlets">
        <router-link :to="{ name: 'gauntlet-single', params: { username: $route.params.username, id: gauntlet._id }}">
        {{ gauntlet._id }}
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
  import { mapActions, mapState } from 'vuex'
  import { getGauntlets } from 'store/actions'

  export default {
    computed: {
      ...mapState({
        gauntlets: ({ gauntlet }) => gauntlet.gauntlets,
      })
    },

    methods: {
      ...mapActions(['getGauntlets']),

      async fetchData () {
        await this.getGauntlets(this.$route.params.username)
      }
    },

    created () {
      this.fetchData()
    },

    watch: {
      '$route': 'fetchData'
    },
  }
</script>

<style lang="sass">
  @import '../css/includes';

</style>