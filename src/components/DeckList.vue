<template>
  <div :class="['deck-list', { 'saving': saving }]" ref="deck">
    <mana-curve />
    <deck-counts />
    <deck-general />
    <div ref="scroll" class="cards">
      <template v-if="divideDeck">
        <deck-divider :type="currentFaction" :cards="factionCards" />
        <deck-card v-for="card in factionCards" :card="card"></deck-card>
        <deck-divider type="Neutral" :cards="neutralCards" />
        <deck-card v-for="card in neutralCards" :card="card"></deck-card>
      </template>
      <template v-else>
        <deck-card v-for="card in cardList" :card="card"></deck-card>
      </template>
    </div>
  </div>
</template>

<script>
  import ManaCurve from 'components/ManaCurve'
  import DeckCounts from 'components/DeckCounts'
  import DeckGeneral from 'components/DeckGeneral'
  import DeckCard from 'components/DeckCard'
  import DeckDivider from 'components/DeckDivider'
  import sortBy from 'lodash.sortby'
  import Ps from 'perfect-scrollbar'
  import { mapGetters, mapState } from 'vuex'

  export default {
    computed: {
      factionCards () {
        return sortBy(this.$store.state.deck.cards.filter(card => card.faction !== 'neutral'), ['cost', 'name'])
      },
      neutralCards () {
        return sortBy(this.$store.state.deck.cards.filter(card => card.faction === 'neutral'), ['cost', 'name'])
      },
      cardList () {
        return sortBy(this.$store.state.deck.cards, ['cost', 'name'])
      },
      ...mapState({
        saving: ({ app }) => app.savingDeck,
        divideDeck: ({ app }) => app.divideDeck,
      }),
      ...mapGetters(['currentFaction'])
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
      DeckDivider,
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
      height: calc(100% - 290px);
    }

    &.saving > .cards {
      height: auto;
      padding-bottom: 30px;
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