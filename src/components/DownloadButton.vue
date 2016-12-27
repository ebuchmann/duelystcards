<template>
  <div class="download-button button" tabindex="1" ref="button">
    <i class="icon icon-download" data-tooltip="Save deck" data-position="bottom left"></i>
    <div class="menu">
      <div class="option" @click="handleSaveToComputer('horizontal')">Save to computer (horizontal)</div>
      <div class="option" @click="handleSaveToImgur('horizontal')">Save to Imgur (horizontal)</div>
      <div class="option" @click="handleSaveToComputer('vertical')">Save to computer (vertical)</div>
      <div class="option" @click="handleSaveToImgur('vertical')">Save to Imgur (vertical)</div>
    </div>
  </div>
</template>

<script>
  import { saveToComputer, saveToImgur } from 'utils/saveDeck'
  import { mapGetters, mapState } from 'vuex'

  export default {
    computed: {
      ...mapState({
        imgurLink: ({ app }) => app.imgurLink,
        imgurHash: ({ app }) => app.imgurHash,
      }),
      ...mapGetters(['currentFaction'])
    },

    methods: {
      handleSaveToComputer (type) {
        saveToComputer(type, this.currentFaction)
        this.$refs.button.blur()
      },

      handleSaveToImgur (type) {
        saveToImgur(type)
        this.$refs.button.blur()
      },
    },
  }
</script>

<style lang="sass">
  @import '../css/includes';

  .download-button {
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

  .download-button:focus > .menu {
    display: block;
  }
</style>