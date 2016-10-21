<template>
  <div class="top-nav">
    <text-search />
    <div class="deck-options">
      <span class="button" @click="$store.dispatch('toggleProperty', 'saveDeck')"><svg class="icon icon-download"><use xlink:href="#icon-download"></use></svg> Download</span>
      <span class="button" @click="$store.dispatch('toggleProperty', 'importDeck')"><svg class="icon icon-upload"><use xlink:href="#icon-upload"></use></svg> Import</span>
      <span class="button" @click="$store.dispatch('toggleProperty', 'drawerOpen')">Toggle</span>
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
    border-bottom: 1px solid $blue;
    margin-bottom: 30px;
    position: fixed;
    height: 48px;
    left: 0;
    right: 0;
    top: 0;
    z-index: $z-top-nav;
    box-shadow: $medium-shadow;
  }

  .deck-options {
    width: $width-drawer-deck + 20px;
    float: right;
    display: flex;
    height: 100%;

    > .button {
      flex: 0 0 33%;
      height: 100%;
      display: flex;
      align-items: center;
      cursor: pointer;
      padding: 0 10px;

      &:hover {
        background: $blue;
      }

      > .icon {
        margin-right: 10px;
      }
    }
  }
</style>