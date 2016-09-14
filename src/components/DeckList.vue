<template>
  <div class="deck-list">
    <mana-curve></mana-curve>
    <deck-counts></deck-counts>
    <deck-general></deck-general>
    <div class="general" v-if="$store.state.deck.general">
      {{ $store.state.deck.general.name }}
    </div>
    <div class="cards">
      <deck-card v-for="card in cardList" :card="card"></deck-card>
    </div>
  </div>
</template>

<script>
  import ManaCurve from './ManaCurve'
  import DeckCounts from './DeckCounts'
  import DeckGeneral from './DeckGeneral'
  import DeckCard from './DeckCard'

  export default {
    computed: {
      cardList() {
        return this.$store.state.deck.cards.sort((a, b) => a.name > b.name).sort((a, b) => a.cost > b.cost)
      },
    },

    components: {
      ManaCurve,
      DeckCounts,
      DeckGeneral,
      DeckCard,
    },
  }
</script>

<style lang="sass">
  @import '../css/includes';
</style>