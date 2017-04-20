<template>
  <div class="deck-list">
    <deck-name />
    <mana-curve />
    <deck-counts />
    <deck-general />
    <div class="cards">
      <template v-if="deckSideboard">
        <deck-divider type="Sideboard" :cards="sortedSideboard" />
        <deck-card v-for="card in sortedSideboard" :key="card.id" :card="card"/>
      </template>
      <template v-else>
        <template v-if="divideDeck">
          <deck-divider :type="currentFaction" :cards="factionCards" />
          <deck-card v-for="card in factionCards" :key="card.id" :card="card" />
          <deck-divider type="Neutral" :cards="neutralCards" />
          <deck-card v-for="card in neutralCards" :key="card.id" :card="card" />
        </template>
        <template v-else>
          <deck-card v-for="card in sortedCards" :key="card.id" :card="card" />
        </template>
      </template>
    </div>
  </div>
</template>

<script>
  import ManaCurve from 'components/ManaCurve';
  import DeckCounts from 'components/DeckCounts';
  import DeckGeneral from 'components/DeckGeneral';
  import DeckCard from 'components/DeckCard';
  import DeckDivider from 'components/DeckDivider';
  import DeckName from 'components/DeckName';
  import { mapGetters, mapState } from 'vuex';

  export default {
    computed: {
      ...mapGetters('deck', ['currentFaction', 'factionCards', 'neutralCards', 'sortedCards', 'sortedSideboard']),

      ...mapState({
        divideDeck: ({ app }) => app.divideDeck,
        deckSideboard: ({ app }) => app.deckSideboard,
      }),
    },

    components: {
      ManaCurve,
      DeckCounts,
      DeckGeneral,
      DeckCard,
      DeckDivider,
      DeckName,
    },
  }
</script>

<style lang="sass">
  @import '../css/includes';

  .deck-list {
    height: calc(100% - 50px);

    > .cards {
      position: relative;
      height: calc(100% - 290px);
    }

    &.saving > .cards {
      height: auto;
      padding-bottom: 30px;
    }

    &.saving > .vertical-short-url {
      display: block;
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
