<template>
  <div class="import-export-button button" tabindex="1" ref="button">
    <i class="icon icon-upload" data-tooltip="Import/Export Deck" data-position="bottom left"></i>
    <div class="menu">
      <div class="option" @click="$store.dispatch('app/toggleProperty', 'importDuelystcardsDeck')">Duelystcards Import</div>
      <div class="option" @click="$store.dispatch('app/toggleProperty', 'exportDuelystcardsDeck')">Duelystcards Export</div>
      <div class="option" @click="$store.dispatch('app/toggleProperty', 'importDuelystDeck')">Duelyst Import</div>
      <div class="option" @click="$store.dispatch('app/toggleProperty', 'exportDuelystDeck')">Duelyst Export</div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapState } from 'vuex';

export default {
  computed: {},

  methods: {}
};
</script>

<style lang="sass">
  @import '../css/includes';

  .import-export-button {
    position: relative;

    &:focus, &:active {
      outline: none;
    }

    > .menu {
      list-style: none;
      padding: 0;
      display: none;
      position: absolute;
      min-width: 210px;
      background: $blue;
      top: -168px;
      z-index: 9999;
      cursor: pointer;

      > .option {
        padding: 10px;
        font-size: .9rem;

        &:hover {
          background: $blue-dark;
        }
      }
    }
  }

  .import-export-button:focus > .menu {
    display: block;
  }
</style>