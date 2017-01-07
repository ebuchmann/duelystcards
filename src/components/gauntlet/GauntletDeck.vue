<template>
  <div :class="['gauntlet-deck', { 'saving': saving }]">
    <mana-curve />
    <deck-counts />
    <div class="cards">
      <template v-if="divideDeck">
        <deck-divider :type="currentFaction" :cards="factionCards" />
        <deck-card v-for="card in factionCards" :is-selectable="false" :card="card"></deck-card>
        <deck-divider type="Neutral" :cards="neutralCards" />
        <deck-card v-for="card in neutralCards" :card="card"></deck-card>
      </template>
      <template v-else>
        <deck-card v-for="card in sortedCards" :is-selectable="false" :card="card"></deck-card>
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
  import { mapGetters, mapState } from 'vuex'

  export default {
    computed: {
      ...mapState({
        saving: ({ app }) => app.savingDeck,
        divideDeck: ({ app }) => app.divideDeck,
        shortUrl: ({ app }) => app.shortUrl,
      }),
      ...mapGetters('deck', ['currentFaction', 'factionCards', 'neutralCards', 'sortedCards'])
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
    width: $width-drawer-deck;
    float: right;

    > .cards {
      position: relative;
    }
  }
</style>