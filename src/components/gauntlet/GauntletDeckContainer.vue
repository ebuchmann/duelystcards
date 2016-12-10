<template>
  <div :class="['gauntlet-deck-container', { closed }]">
    <gauntlet-deck />
  </div>
</template>

<script>
  import GauntletDeck from 'components/gauntlet/GauntletDeck'

  export default {
    computed: {
      closed () {
        return !this.$store.state.app.drawerOpen
      },
    },

    components: {
      GauntletDeck,
    },
  }
</script>

<style lang="sass">
  @import '../../css/includes';

  .gauntlet-deck-container {
    width: $width-drawer-deck;
    position: fixed;
    right: 0;
    top: 48px;
    bottom: 0;
    margin-right: 5px;
    height: calc(100vh - 48px);
    transition: $all-fast;
    background: $blue-dark;
    z-index: $z-drawer-deck;
    overflow-y: scroll;

    &.closed {
      transform: translateX(112%);
    }
  }
</style>