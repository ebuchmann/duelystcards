<template>
  <div class="gauntlet-page">
    <div :class="['gauntlet-content', background]">
      <div class="inner">
        <gauntlet-header :gauntlet="gauntlet" />
        <match-table :matches="gauntlet.matches" />
      </div>
    </div>
    <div class="gauntlet-deck">
      <gauntlet-deck-container />
    </div>
  </div>
</template>

<script>
  import GauntletHeader from 'components/gauntlet/GauntletHeader'
  import MatchTable from 'components/gauntlet/MatchTable'
  import GauntletDeckContainer from 'components/gauntlet/GauntletDeckContainer'
  import { mapActions, mapState } from 'vuex'

  export default {
    computed: {
      ...mapState({
        gauntlet: ({ gauntlet }) => gauntlet.currentGauntlet,
      }),

      background () {
        return `bg_${this.gauntlet.generalId}`
      },
    },

    methods: {
      ...mapActions(['getGauntlet']),

      async fetchData () {
        await this.getGauntlet(this.$route.params.id)
      }
    },

    created () {
      this.fetchData()
    },

    watch: {
      '$route': 'fetchData'
    },

    components: {
      GauntletHeader,
      MatchTable,
      GauntletDeckContainer,
    },
  }
</script>

<style lang="sass">
  @import '../css/includes';

  .bg_323::after { background-image: url('../assets/images/crest_abyssian.png'); }
  .bg_1::after { background-image: url('../assets/images/crest_abyssian.png'); }

  .gauntlet-content {
    @include span(9 of 12);
    position: absolute;
    height: 100vh;
    overflow-y: scroll;

    &::after {
      content: "";
      background-repeat: no-repeat;
      background-position: 50%;
      opacity: 0.1;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      position: absolute;
      z-index: -1;
      filter: grayscale(100%);
    }


    > .inner {
      max-width: 1000px;
      margin: 0 auto;
    }
  }

  .gauntlet-deck {
    @include span(3 of 12 last);
  }

</style>