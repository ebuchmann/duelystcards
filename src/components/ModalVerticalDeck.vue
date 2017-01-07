<template>
  <general-modal :show="true">
    <div class="modal-vertical-deck">
      <mana-curve />
      <deck-counts />
      <deck-general />
      <template v-if="divideDeck">
        <deck-divider :type="currentFaction" :cards="factionCards" />
        <deck-card v-for="card in factionCards" :card="card" :isSelectable="false" />
        <deck-divider type="Neutral" :cards="neutralCards" />
        <deck-card v-for="card in neutralCards" :card="card" :isSelectable="false" />
      </template>
      <template v-else>
        <deck-card v-for="card in sortedCards" :card="card" :isSelectable="false" />
      </template>
      <template v-if="sortedSideboard.length">
        <deck-divider type="Sideboard" :cards="sortedSideboard" />
        <deck-card v-for="card in sortedSideboard" :card="card" :isSelectable="false" />
      </template>
      <div class="bottom">
        <p class="name" v-show="deckName">{{ deckName }}</p>
        <p class="url">{{ url }}</p>
      </div>
    </div>
  </general-modal>
</template>

<script>
  import ManaCurve from 'components/ManaCurve';
  import DeckCounts from 'components/DeckCounts';
  import DeckGeneral from 'components/DeckGeneral';
  import DeckCard from 'components/DeckCard';
  import DeckDivider from 'components/DeckDivider';
  import GeneralModal from 'components/GeneralModal';

  import { mapGetters, mapState } from 'vuex';

  export default {
    computed: {
      ...mapState({
        divideDeck: ({ app }) => app.divideDeck,
        shortUrl: ({ app }) => app.shortUrl,
        deckName: ({ deck }) => deck.deckName,
      }),

      ...mapGetters('deck', ['factionCards', 'neutralCards', 'sortedCards', 'sortedSideboard']),

      url () {
        if (this.shortUrl.length) return this.shortUrl.substr(2)
      }
    },

    components: {
      ManaCurve,
      DeckCard,
      DeckCounts,
      DeckGeneral,
      DeckDivider,
      GeneralModal,
    },
  };
</script>

<style lang="sass">
  @import './src/css/includes';

  .modal-vertical-deck {
    background: $blue-dark;
    width: 340px;
    padding: 20px;

    > .bottom {
      border-top: 1px solid $gray;
      background: rgba(25, 25, 25, 0.3);
      margin: 20px -20px -20px -20px;
      padding-bottom: 10px;
      padding-top: 10px;

      > .name {
        padding: 0 20px;
      }

      > .url {
        color: $blue-light;
        text-align: center;
      }
    }

  }
</style>