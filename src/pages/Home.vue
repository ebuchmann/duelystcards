<template>
  <div class="home-page">
    <drawer-filters />
    <div :class="['left-column', { closed }]">
      <card-list v-if="factionCards" :faction="faction" :cards="factionCards" />
      <card-list v-if="neutralCards" faction="neutral" :cards="neutralCards" />
      <card-list v-if="!factionCards && !neutralCards" faction="generals" :cards="visibleCards" />
    </div>
    <drawer-deck />
  </div>
</template>

<script>
  import DrawerDeck from 'components/DrawerDeck'
  import DrawerFilters from 'components/DrawerFilters'
  import CardList from 'components/CardList'
  import { mapGetters } from 'vuex'

  export default {
    computed: {
      faction () {
        if (this.$store.state.deck.general) return this.$store.state.deck.general.faction
      },

      factionCards () {
        const general = this.$store.state.deck.general
        if (general) return this.$store.getters.filteredCards.filter(card => card.faction === general.faction)
      },

      neutralCards () {
        const general = this.$store.state.deck.general
        if (general) return this.$store.getters.filteredCards.filter(card => card.faction === 'neutral')
      },

      closed () {
        return !this.$store.state.app.drawerOpen
      },

      ...mapGetters(['visibleCards']),
    },

    created() {
      if (this.$store.state.route.hash) this.$store.dispatch('loadDeck', this.$store.state.route.hash.substr(1))
    },

    components: {
      DrawerDeck,
      DrawerFilters,
      CardList,
    },
  }
</script>

<style lang="sass">
  @import '../css/includes';

  .left-column {
    position: relative;
    margin-top: 65px;
    padding: 0 40px 0 $width-drawer-filter + 30px;

    @include breakpoint(lg) {
      width: calc(100% - 360px);
    }

    &.closed {
      max-width: 1600px;
      width: 100%;
      margin-left: auto;
      margin-right: auto;
    }
  }

  .deck-page {
    @include clearfix;
  }
</style>