<template>
  <div class="top-nav">
    <text-search />
    <div class="deck-options">
      <span class="button" @click="$store.dispatch('toggleProperty', 'saveDeck')"><i class="icon icon-download"></i> Download</span>
      <span class="button" @click="$store.dispatch('toggleProperty', 'importDeck')"><i class="icon icon-upload"></i> Import</span>
      <span :class="['button', 'button-toggle', { 'left': closed }]" @click="$store.dispatch('toggleProperty', 'drawerOpen')"></span>
    </div>
  </div>
</template>

<script>
  import TextSearch from './TextSearch'

  export default {
    computed: {
      closed () {
        return !this.$store.state.app.drawerOpen
      },
    },

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
      flex: 0 0 45%;
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

    > .button-toggle {
      font-size: 1.6rem;
      flex: 0 0 10%;
      text-align: center;
      padding: 0;

      &::before {
        width: 100%;
        @include font-icon($icon-chevron-right);
      }

      &.left {
        &::before {
          @include font-icon($icon-chevron-left);
        }
      }
    }
  }
</style>