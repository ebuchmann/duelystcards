<template>
  <div class="gauntlet-page container">
    <div class="gauntlet-list">
      <gauntlet-table :gauntlets="gauntlets" />
    </div>
    <div class="gauntlet-stats">
      Total runs: {{ stats.totalRuns }}<br>
      Total matches: {{ stats.totalMatches }}<br>
      Win %: {{ stats.winPercent }}<br>
      Average wins:<br>
      Average losses:<br>
      Total wins:<br>
      Total losses:<br>
    </div>
  </div>
</template>

<script>
  import { mapActions, mapState } from 'vuex'
  import { getGauntlets } from 'store/actions'
  import GauntletTable from 'components/gauntlet/GauntletTable'

  export default {
    computed: {
      ...mapState({
        gauntlets: ({ gauntlet }) => gauntlet.gauntlets,
        stats: ({ gauntlet }) => gauntlet.stats,
      }),
    },

    methods: {
      ...mapActions(['getGauntlets', 'getGauntletStats']),

      async fetchData () {
        await Promise.all([
          this.getGauntlets(this.$route.params.username),
          this.getGauntletStats(this.$route.params.username),
        ])
      }
    },

    created () {
      this.fetchData()
    },

    watch: {
      '$route': 'fetchData'
    },

    components: {
      GauntletTable,
    },
  }
</script>

<style lang="sass">
  @import '../css/includes';

  .gauntlet-page {
    .gauntlet-list {
      overflow-y: scroll;
      height: calc(100vh - #{$height-site-header-spacing});

      @include breakpoint(lg) {
        @include span(6 of 12);
      }

      > .gauntlet {
        margin-bottom: 15px;
        display: block;
      }
    }
  }

</style>