<template>
  <div :class="['gauntlet-deck', { 'saving': saving }]" ref="deck">
    <mana-curve />
    <deck-counts />
    <div ref="scroll" class="cards">
      <template v-if="divideDeck">
        <deck-divider :type="currentFaction" :cards="factionCards" />
        <deck-card v-for="card in factionCards" :is-selectable="false" :card="card"></deck-card>
        <deck-divider type="Neutral" :cards="neutralCards" />
        <deck-card v-for="card in neutralCards" :card="card"></deck-card>
      </template>
      <template v-else>
        <deck-card v-for="card in cardList" :is-selectable="false" :card="card"></deck-card>
      </template>
    </div>
    <div class="vertical-short-url">
      {{ shortUrl }}
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
        shortUrl: ({ app }) => app.shortUrl,
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
  @import '../../css/includes';

  .gauntlet-deck {
    padding-top: 30px;
    height: 100%;
    width: 100%;

    > .cards {
      position: relative;
    }
  }
</style>