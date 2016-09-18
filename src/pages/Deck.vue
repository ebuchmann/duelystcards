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
  import generals from '../cards/generals'
  import cards from '../cards'
  import GameCard from 'components/GameCard'
  import GeneralCard from 'components/GeneralCard'
  import DeckList from 'components/DeckList'
  import CardPagination from 'components/CardPagination'
  import FilterArea from 'components/FilterArea'
  import { mapGetters, mapActions } from 'vuex'

  export default {
    computed: mapGetters({
      visibleCards: 'visibleCards',
      general: 'general'
    }),

    watch: {
      general() {
        if (this.general) this.$store.dispatch('setCardList', [...cards[this.$route.params.faction], ...cards.neutral])
      },
    },

    methods: {
      async loadDeck (hash) {
        const deck = atob(hash.slice(1)).split(',')
        const general = deck.splice(0, 1)[0]

        const [qty, id] = general.split(':')
        await this.$store.dispatch('selectGeneral', generals.find(general => general.id === Number(id)))
        deck.forEach(card => {
          const [qty, id] = card.split(':')
          this.$store.dispatch('selectCard', { card: this.$store.state.cardList.cards.find(c => c.id === Number(id)), qty: Number(qty) })
        })
      },

      swapPage (event) {
        event.preventDefault()
        event.wheelDelta > 0
          ? this.$store.dispatch('goToPage', -1)
          : this.$store.dispatch('goToPage', 1)
      }
    },

    created () {
      if (this.$route.hash) this.loadDeck(this.$route.hash)
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
  }

  .right-column {
    @include span(3 of 12 last)
  }

  .card-grid {
    @include clearfix;
  }

  .deck-page {
    @include clearfix;
  }
  
</style>