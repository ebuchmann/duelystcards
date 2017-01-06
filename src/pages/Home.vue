<template>
  <div class="home-page">
    <drawer-filters />
    <div :class="['left-column', { closed }]">
      <text-search />
      <card-list v-if="factionCards" :faction="faction" :cards="factionCards" />
      <card-list v-if="neutralCards" faction="neutral" :cards="neutralCards" />
      <card-list v-if="!factionCards && !neutralCards" faction="generals" :cards="visibleCards" />
    </div>
    <drawer-deck />
    <modal-waiting />
  </div>
</template>

<script>
  import DrawerDeck from 'components/DrawerDeck'
  import DrawerFilters from 'components/DrawerFilters'
  import CardList from 'components/CardList'
  import ModalWaiting from 'components/ModalWaiting'
  import TextSearch from 'components/TextSearch'
  import { mapGetters } from 'vuex'

  export default {
    computed: {
      faction () {
        if (this.$store.state.deck.general) return this.$store.state.deck.general.faction
      },

      factionCards () {
        const general = this.$store.state.deck.general
        if (general) return this.$store.getters['deck/filteredCards'].filter(card => card.faction === general.faction)
      },

      neutralCards () {
        const general = this.$store.state.deck.general
        if (general) return this.$store.getters['deck/filteredCards'].filter(card => card.faction === 'neutral')
      },

      closed () {
        return !this.$store.state.app.drawerOpen
      },

      ...mapGetters('deck', ['visibleCards']),
    },

    created() {
      if (this.$store.state.route.hash) this.$store.dispatch('deck/loadDeck', this.$store.state.route.hash.substr(1))
    },

    beforeRouteLeave (to, from, next) {
      this.$store.dispatch('app/toggleProperty', 'deckSideboard');
      this.$store.dispatch('deck/clearDeck');
      this.$store.dispatch('cardList/resetFilters');
      this.$store.dispatch('app/setProperty', { property: 'deckSideboard', value: false });
      next();
    },

    components: {
      DrawerDeck,
      DrawerFilters,
      CardList,
      ModalWaiting,
      TextSearch,
    },
  }
</script>

<style lang="sass">
  @import '../css/includes';

  .left-column {
    position: relative;
    padding: 0 40px 0 $width-drawer-filter + 30px;
    margin-top: 20px;

    @include breakpoint(lg) {
      width: calc(100% - #{$width-drawer-deck} - 20px);
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