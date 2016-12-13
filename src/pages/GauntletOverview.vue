<template>
  <div class="gauntlet-page container">
    <div class="gauntlet-list">
      <router-link class="gauntlet" v-for="gauntlet in gauntlets" :to="{ name: 'gauntlet-single', params: { username: $route.params.username, id: gauntlet._id }}">
        <gauntlet-card :gauntlet="gauntlet" />
      </router-link>
    </div>
    <div class="gauntlet-stats">

    </div>
  </div>
</template>

<script>
  import { mapActions, mapState } from 'vuex'
  import { getGauntlets } from 'store/actions'
  import GauntletCard from 'components/gauntlet/GauntletCard'

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

    components: {
      GauntletCard,
    },
  }
</script>

<style lang="sass">
  @import '../css/includes';

  .gauntlet-page {
    .gauntlet-list {
      overflow-y: scroll;
      height: calc(100vh - #{$height-site-header-spacing});

      @include breakpoint(md) {
        @include span(6 of 12);
      }

      @include breakpoint(lg) {
        @include span(4 of 12);
      }

      > .gauntlet {
        margin-bottom: 15px;
        display: block;
      }
    }
  }

</style>