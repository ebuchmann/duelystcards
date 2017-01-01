<template>
  <div class="horizontal-sideboard">
    <div class="sideboard-top">
    </div>
    <div class="sprite-row">
      <horizontal-spells :cards="sideboardSpells" />
    </div>
    <div class="sprite-row">
      <horizontal-minions :cards="sideboardMinions" />
    </div>
    <div class="horizontal-cards">
        <div class="section-header">Sideboard cards</div>
      </div>
    <div class="horizontal-cards">
      <div class="columns">
        <horizontal-deck-card v-for="card in allCards" :card="card" />
      </div>
    </div>
  </div>
</template>

<script>
  import sortBy from 'lodash.sortby'
  import HorizontalSpells from 'components/horizontal/HorizontalSpells'
  import HorizontalMinions from 'components/horizontal/HorizontalMinions'
  import HorizontalDeckCard from 'components/horizontal/HorizontalDeckCard'
  
  export default {
    computed: {
      allCards () {
        return sortBy(this.$store.state.deck.sideboard, ['cost', 'name'])
      },

      sideboardSpells () {
        return sortBy(this.$store.state.deck.sideboard, ['cost', 'name']).filter(card => card.type !== 'minion')
      },

      sideboardMinions () {
        return sortBy(this.$store.state.deck.sideboard, ['cost', 'name']).filter(card => card.type === 'minion')
      }
    },
    
    components: {
      HorizontalSpells,
      HorizontalMinions,
      HorizontalDeckCard,
    },
  }
</script>

<style lang="sass">
  @import '../../css/includes';

  .horizontal-sideboard {
    border-left: 1px solid $blue;

    > .sideboard-top {
      height: 75px;
      padding-left: 5px;
    }

    .sprite-row {
      padding: 0 10px;
    }
  }
</style>