<template>
  <div class="deck-page">
    <div class="left-column">
      <template v-if="!$store.state.deck.general">
        <game-card v-for="general in factionGenerals" :card="general"></game-card>
      </template>
      <template v-else>
        <div class="card-grid">
          <game-card v-for="card in cards" :card="card">{{ card.name }}</game-card>
        </div>
        <card-pagination></card-pagination>
      </template>
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

  export default {
    computed: {
      cards() {
        const { currentPage, cards } = this.$store.state.cardList
        return cards.slice((currentPage - 1) * 8, currentPage * 8)
      },

      general() {
        return this.$store.state.deck.general
      },

      factionGenerals() {
        return generals.filter(general => general.faction === this.$route.params.faction)
      },
    },

    watch: {
      general() {
        if (this.general) this.$store.dispatch('setCardList', [...cards[this.general.faction], ...cards.neutral])
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
  
    > .game-card {
      @include gallery(3 of 12)
    }
  }
  
</style>