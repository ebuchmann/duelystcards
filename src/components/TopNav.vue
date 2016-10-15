<template>
  <div class="top-nav">
    <text-search />
    <div class="deck-options">
      <button @click="$store.dispatch('toggleProperty', 'saveDeck')">Download</button>
      <button @click="$store.dispatch('toggleProperty', 'importDeck')">Import</button>
      <button @click="$store.dispatch('toggleProperty', 'drawerOpen')">Toggle</button>
    </div>
  </div>
</template>

<script>
  import TextSearch from './TextSearch'

  export default {
    components: {
      TextSearch,
    },
  }
</script>

<style lang="sass">
  @import '../css/includes';

  .top-nav {
    background: #070e13;
    border-bottom: 1px solid white;
    margin-bottom: 30px;
    position: fixed;
    height: 48px;
    left: 0;
    right: 0;
    top: 0;
    z-index: $z-top-nav;
  }

  .deck-options {
    width: $width-drawer-deck + 20px;
    float: right;
    display: flex;
    height: 100%;

    > button {
      flex: 0 0 33%;
      height: 100%;
    }
  }
</style>