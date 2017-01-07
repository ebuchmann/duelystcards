<template>
  <general-modal :show="modal" class="horizontal-deck-modal">
    <div class="horizontal-deck">
      <div class="horizontal-top">
        <div class="horizontal-general">
          <deck-general />
        </div>
        <div class="horizontal-counts">
          <deck-counts />
        </div>
        <div class="horizontal-mana">
          <mana-curve />
        </div>
      </div>
      <div class="sprite-row">
        <horizontal-spells :cards="deckSpells" />
        <horizontal-artifacts :cards="deckArtifacts" />
      </div>
      <horizontal-minions :cards="deckMinions" />
      <div class="horizontal-cards">
        <div class="section-header">Spells &amp; Artifacts</div>
        <div class="section-header">Minions</div>
      </div>
      <div class="horizontal-cards">
        <div class="columns">
          <horizontal-deck-card v-for="card in spellsArtifacts" :card="card" />
        </div>
        <div class="columns">
          <horizontal-deck-card v-for="card in minions" :card="card" />
        </div>
      </div>
      <div class="short-url">
        <div class="name">{{ deckName }}</div>
        <div class="url">{{ url }}</div>
      </div>
    </div>
    <horizontal-sidebar v-if="hasSideboard" />
  </general-modal>
</template>

<script>
  import GeneralModal from 'components/GeneralModal'
  import DeckGeneral from 'components/DeckGeneral'
  import DeckCounts from 'components/DeckCounts'
  import ManaCurve from 'components/ManaCurve'
  import HorizontalDeckCard from 'components/horizontal/HorizontalDeckCard'
  import HorizontalSpells from 'components/horizontal/HorizontalSpells'
  import HorizontalArtifacts from 'components/horizontal/HorizontalArtifacts'
  import HorizontalMinions from 'components/horizontal/HorizontalMinions'
  import HorizontalSidebar from 'components/horizontal/HorizontalSidebar'
  import sortBy from 'lodash.sortby'
  import { mapState } from 'vuex'

  export default {
    computed: {
      ...mapState({
        modal: ({ app }) => app.savingDeck,
        shortUrl: ({ app }) => app.shortUrl,
        deckName: ({ deck }) => deck.deckName,
      }),

      cardList () {
        return sortBy(this.$store.state.deck.cards, ['cost', 'name'])
      },

      minions () {
        return this.cardList.filter(card => card.type === 'minion')
      },

      spellsArtifacts () {
        return this.cardList.filter(card => card.type !== 'minion')
      },

      url () {
        if (this.shortUrl.length) return this.shortUrl.substr(2)
      },

      deckSpells () {
        return sortBy(this.$store.state.deck.cards, ['cost', 'name']).filter(card => card.type === 'spell')
      },

      deckArtifacts () {
        return sortBy(this.$store.state.deck.cards, ['cost', 'name']).filter(card => card.type === 'artifact')
      },

      deckMinions () {
        return sortBy(this.$store.state.deck.cards, ['cost', 'name']).filter(card => card.type === 'minion')
      },

      hasSideboard () {
        return !!this.$store.state.deck.sideboard.length
      }
    },

    components: {
      GeneralModal,
      DeckGeneral,
      DeckCounts,
      ManaCurve,
      HorizontalDeckCard,
      HorizontalSpells,
      HorizontalArtifacts,
      HorizontalMinions,
      HorizontalSidebar,
    },
  }
</script>

<style lang="sass">
  @import '../../css/includes';

  .horizontal-deck-modal .modal-wrapper .modal-container {
    background: $blue-dark;
    padding: 5px;
  }

  .horizontal-top {
    display: flex;
    justify-content: space-between;
  }

  .horizontal-general {
    flex: 0 0 30%;

    .deck-general {
      height: 65px;
      
      .name {
        font-size: 1.1rem;
      }

      .count {
        font-size: .75rem;
      }
    }

    .sprite {
      bottom: -13px;
      transform: scale(0.8);
    }

    .count {
      font-size: .6rem;
    }
  }

  .horizontal-counts {
    flex: 0 0 34%;

    .deck-counts {
      height: 65px;
    }

    .count > .label {
      padding-top: 10px;
    }
  }

  .horizontal-mana {
    background: $dark;
    height: 65px;
    padding: 5px;
    flex: 0 0 34%;

    .card-counts {
      height: 25px;
      margin-top: 16px;

      > .mana > .bar > .count {
        font-size: .7rem;
        margin-top: -15px;
      }
    }

    .mana-numbers {
      border-bottom: none;

      > .number {
        font-size: .6rem;
      }
    }
  }

  .horizontal-cards {
    display: flex;

    > .section-header {
      flex: 1;
      margin: 0 0 5px 5px;
      font-size: .85rem;
      border-bottom: 1px solid $blue;
    }

    > .columns {
      flex: 1;
      margin: 0 5px;
    }
  }

  .columns {
    -webkit-column-count: 2;
    -moz-column-count: 2;
    column-count: 2;
    -webkit-column-gap: 10px;
    -moz-column-gap: 10px;
    column-gap: 10px;

    > .horizontal-deck-card {
      -webkit-column-break-inside:avoid;
      -moz-column-break-inside:avoid;
      -o-column-break-inside:avoid;
      -ms-column-break-inside:avoid;
      column-break-inside:avoid;
    }
  }

  .sprite-row {
    display: flex;
    justify-content: space-between;
  }

  .short-url {
    background: rgba(25, 25, 25, 0.3);
    margin: 5px -5px -5px -5px;
    padding: 6px 10px;
    display: flex;

    > .name {
      min-width: 600px;
    }

    > .url {
      color: $blue-light;
      margin-left: auto;
    }
  }
</style>