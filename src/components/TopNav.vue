<template>
  <div class="top-nav">
    <h2 class="logo">Deck Builder</h2>
    <text-search />
    <import-deck-button />
    <button @click="$store.dispatch('toggleDrawer')">Toggle</button>
  </div>
</template>

<script>
  import ImportDeckButton from './ImportDeckButton'
  import TextSearch from './TextSearch'

  export default {
    components: {
      ImportDeckButton,
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
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0 40px;

    > .logo {
      margin: 0;
    }
  }
</style>