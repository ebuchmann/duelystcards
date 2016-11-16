<template>
  <div :class="['drawer-deck', { closed }]">
    <deck-list />
    <div class="btn-group">
      <deck-options />
      <button class="btn clear-deck" @click="$store.dispatch('resetAll')"><i class="icon icon-clear-deck"></i> Clear</button>
    </div>
  </div>
</template>

<script>
  import DeckList from 'components/DeckList'
  import DeckOptions from 'components/DeckOptions'

  export default {
    computed: {
      closed () {
        return !this.$store.state.app.drawerOpen
      },
    },

    components: {
      DeckList,
      DeckOptions,
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
    width: 100%;
    height: 44px;
    background: $blue-dark;
    z-index: $z-btn-group;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .clear-deck {
    border: 1px solid #1c1e22;
    border-radius: 4px;
    background: #2e3136;
    height: 32px;
    cursor: pointer;

    &:focus, &:hover {
      outline: none;
    }
  }
</style>