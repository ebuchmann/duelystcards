<template>
  <general-modal :show="modal" width="800px">
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
        <horizontal-spells />
        <horizontal-artifacts />
      </div>
      <horizontal-minions />
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
    </div>
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
  import sortBy from 'lodash.sortby'
  import { mapState } from 'vuex'

  export default {
    computed: {
      ...mapState({ modal: state => state.app.savingDeck }),

      cardList () {
        return sortBy(this.$store.state.deck.cards, ['cost', 'name'])
      },

      minions () {
        return this.cardList.filter(card => card.type === 'minion')
      },

      spellsArtifacts () {
        return this.cardList.filter(card => card.type !== 'minion')
      },
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
    },
  }
</script>

<style lang="sass">
  @import '../../css/includes';

  .horizontal-deck {
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
    }

    .name {
      font-size: 1rem;
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

    > .horizontal-spells {

    }

    > .horizontal-artifacts {

    }
  }
</style>