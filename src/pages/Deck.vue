<template>
  <div class="deck-page">
    <filter-area></filter-area>
    <div class="left-column">
      <div class="card-grid" @mousewheel="swapPage($event)">
        <template v-for="card in visibleCards">
          <game-card v-if="card.type !== 'general'" :card="card"></game-card>
          <general-card v-else :card="card"></general-card>
        </template>
      </div>
      <card-pagination></card-pagination>
    </div>
    <div class="right-column">
      <deck-list></deck-list>
    </div>
  </div>
</template>

<script>
  import GameCard from 'components/GameCard'
  import GeneralCard from 'components/GeneralCard'
  import DeckList from 'components/DeckList'
  import CardPagination from 'components/CardPagination'
  import FilterArea from 'components/FilterArea'
  import { mapGetters } from 'vuex'

  export default {
    computed: mapGetters({
      visibleCards: 'visibleCards',
    }),

    data () {
      return {
        scrolling: false,
      }
    },

    methods: {
      swapPage (event) {
        event.preventDefault()
        if (this.scrolling) return

        this.scrolling = true
        event.wheelDelta > 0
          ? this.$store.dispatch('goToPage', -1)
          : this.$store.dispatch('goToPage', 1)

        setTimeout(() => {
          this.scrolling = false
        }, 100)
      },
    },

    beforeRouteLeave (route, redirect, next) {
      this.$store.dispatch('clearDeck')
      this.$store.commit('SET_PAGE', 1)
      next()
    },

    // watch: {
    //   '$route': 'test'
    // },

    created() {
      if (this.$store.state.route.hash) this.$store.dispatch('loadDeck', this.$store.state.route.hash)
    },

    components: {
      GameCard,
      GeneralCard,
      DeckList,
      CardPagination,
      FilterArea,
    },
  }
</script>

<style lang="sass">
  @import '../css/includes';

  .left-column {
    @include span(9 of 12)
    margin-top: 20px;
  }

  .right-column {
    @include span(3 of 12 last)
    margin-top: 60px;
  }

  .card-grid {
    @include clearfix;
  }

  .deck-page {
    @include clearfix;
  }
  
</style>