<template>
  <div :class="['drawer-deck', { closed }]">
    <deck-list />
    <div class="btn-group">
      <button class="btn" @click="closed = !closed">Close</button>
      <button class="btn" @click="$store.dispatch('resetAll')">Clear Deck</button>
      {{ closed }}
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
    },

    components: {
      DeckList,
    },
  }
</script>

<style lang="sass">
  @import '../css/includes';

  .drawer-deck {
    width: 340px;
    position: fixed;
    right: 0;
    top: 48px;
    bottom: 0;
    margin-right: 20px;
    height: calc(100vh - 60px);
    transition: $all-fast;

    &.closed {
      transform: translateX(112%);
    }
  }

  .btn-group {
    position: absolute;
    bottom: 0;
  }
</style>