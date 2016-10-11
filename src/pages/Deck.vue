<template>
  <div class="deck-page">
    <div class="left-column">
      <card-list v-if="factionCards" :faction="faction" :cards="factionCards" />
      <card-list v-if="neutralCards" faction="neutral" :cards="neutralCards" />
      <card-list v-if="!factionCards && !neutralCards" faction="generals" :cards="visibleCards" />
    </div>
    <drawer-deck />
  </div>
</template>

<script>
  import DrawerDeck from 'components/DrawerDeck'
  import FilterArea from 'components/FilterArea'
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

      ...mapGetters(['visibleCards']),
    },

    beforeRouteLeave (route, redirect, next) {
      this.$store.dispatch('resetAll')
      next()
    },

    created() {
      if (this.$store.state.route.hash) this.$store.dispatch('loadDeck', this.$store.state.route.hash.substr(1))
    },

    components: {
      DrawerDeck,
      FilterArea,
      CardList,
    },
  }
</script>

<style lang="sass">
  @import '../css/includes';

  .deck-page {
    min-width: 945px;
  }

  .left-column {
    position: relative;
    width: calc(100% - 360px);
    margin-top: 20px;
    padding: 0 40px;
  }

  .deck-page {
    @include clearfix;
  }
</style>