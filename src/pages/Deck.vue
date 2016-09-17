<template>
  <div class="deck-page">
    <div class="top">
      <div class="medium">
        <text-search></text-search>
      </div>
      <div class="small">
        <type-select></type-select>
      </div>
      <div class="small">
        <rarity-select></rarity-select>
      </div>
    </div>
    <div class="left-column">
      <div class="card-grid" @mousewheel="swapPage($event)">
        <game-card v-for="card in visibleCards" :card="card">{{ card.name }}</game-card>
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
  import DeckList from 'components/DeckList'
  import CardPagination from 'components/CardPagination'
  import TextSearch from 'components/TextSearch'
  import TypeSelect from 'components/TypeSelect'
  import RaritySelect from 'components/RaritySelect'
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
      DeckList,
      CardPagination,
      TextSearch,
      TypeSelect,
      RaritySelect,
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

    > .top {
      > .medium {
        @include span (4 of 12)
      }

      > .small {
        @include span (2 of 12)
      }
    }
  }
  
</style>