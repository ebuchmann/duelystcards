<template>
  <div :class="['gauntlet-deck-container', { closed }]" v-scroll>
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
    right: 0;
    top: 48px;
    bottom: 0;
    margin-right: 5px;
    transition: $all-fast;
    background: $blue-dark;
    z-index: $z-drawer-deck;
    height: calc(100vh - #{$height-site-header-spacing});

    &.closed {
      transform: translateX(112%);
    }
  }
</style>