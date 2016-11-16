<template>
  <div class="top-nav">
    <text-search />
    <div class="site-options">
      <span :class="['button', 'button-toggle', { 'left': closed }]" @click="$store.dispatch('toggleProperty', 'drawerOpen')" data-tooltip="Toggle deck list" data-position="bottom left"></span>
      <span class="button" @click="$store.dispatch('toggleProperty', 'importDeck')"><i class="icon icon-upload" data-tooltip="Import deck" data-position="bottom left"></i></span>
      <download-button />
    </div>
  </div>
</template>

<script>
  import TextSearch from 'components/TextSearch'
  import DownloadButton from 'components/DownloadButton'
  import { saveToComputer } from 'utils/saveDeck'

  export default {
    computed: {
      closed () {
        return !this.$store.state.app.drawerOpen
      },
    },

    methods: {
      saveToComputer,
    },

    components: {
      TextSearch,
      DownloadButton,
    },
  }
</script>

<style lang="sass">
  @import '../css/includes';

  .top-nav {
    background: $blue-dark;
    border-bottom: 1px solid $blue;
    margin-bottom: 30px;
    position: fixed;
    height: 48px;
    left: 0;
    right: 0;
    top: 0;
    z-index: $z-top-nav;
    box-shadow: $medium-shadow;
    display: flex;
    justify-content: space-between;
  }

  .site-options {

    > .button {
      height: 100%;
      display: flex;
      align-items: center;
      cursor: pointer;
      float: right;
      width: 40px;
      transition: color .2s ease-out;

      &:hover > .icon {
        color: $blue-light;
      }

      > .icon {
        font-size: 1.6rem;
        width: 100%;
        height: 100%;
        text-align: center;
        padding: 10px;
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