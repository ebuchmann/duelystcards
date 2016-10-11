<template>
  <div class="deck-list">
    <mana-curve></mana-curve>
    <deck-counts></deck-counts>
    <deck-general></deck-general>
    <div ref="scroll" class="cards">
      <deck-card v-for="card in cardList" :card="card"></deck-card>
    </div>
  </div>
</template>

<script>
  import ManaCurve from './ManaCurve'
  import DeckCounts from './DeckCounts'
  import DeckGeneral from './DeckGeneral'
  import DeckCard from './DeckCard'
  import sortBy from 'lodash.sortby'
  import Ps from 'perfect-scrollbar'

  export default {
    computed: {
      cardList () {
        return sortBy(this.$store.state.deck.cards, ['cost', 'name'])
      },
    },

    watch: {
      cardList () {
        Ps.update(this.$refs.scroll)
      }
    },

    mounted () {
      Ps.initialize(this.$refs.scroll)
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

  .deck-list {
    padding-top: 30px;
    height: 100%;

    > .cards {
      position: relative;
      height: calc(100% - 256px);
    }
  }

  .save-deck {
    margin-top: 15px;
    padding: 8px;

    &::before {
      @include font-icon($icon-download)
      padding-top: 2px;
      margin-right: 10px;
    }
  }
</style>