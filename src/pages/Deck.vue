<template>
  <div class="deck-page">
    <div class="top">
      <text-search></text-search>
      <type-select></type-select>
      <rarity-select></rarity-select>
    </div>
    <div class="left-column">

    <div class="card-grid">
      <game-card v-for="card in filteredCards" :card="card">{{ card.name }}</game-card>
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
      filteredCards: 'filteredCards',
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
  }
  
</style>