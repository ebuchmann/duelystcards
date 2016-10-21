<template>
  <div :class="['drawer-deck', { closed }]">
    <deck-list />
    <div class="btn-group">
    {{ totalCards }} / 40 cards
      <button class="btn" @click="$store.dispatch('resetAll')">Clear Deck</button>
    </div>
  </div>
</template>

<script>
  import DeckList from 'components/DeckList'

  export default {
    computed: {
      closed () {
        return !this.$store.state.app.drawerOpen
      },

      totalCards () {
        return this.$store.state.deck.totalCards
      }
    },

    components: {
      DeckList,
    },
  }
</script>

<style lang="sass">
  @import '../css/includes';

  .drawer-deck {
    width: $width-drawer-deck;
    position: fixed;
    right: 0;
    top: 48px;
    bottom: 0;
    margin-right: 20px;
    height: calc(100vh - 48px);
    transition: $all-fast;
    background: $blue-dark;
    z-index: $z-drawer-deck;

    &.closed {
      transform: translateX(112%);
    }
  }

  .btn-group {
    position: absolute;
    bottom: 0;
  }
</style>