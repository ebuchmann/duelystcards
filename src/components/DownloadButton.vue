<template>
  <div class="download-button button" tabindex="1" ref="button">
    <i class="icon icon-download"></i>
    <div class="menu">
      <div class="option" @click="handleSaveToComputer()">Save to computer</div>
      <div class="option" @click="handleSaveToImgur()">Save to Imgur</div>
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
      handleSaveToComputer () {
        saveToComputer(this.currentFaction)
        this.$refs.button.blur()
      },

      handleSaveToImgur () {
        if (this.imgurLink && this.imgurHash === window.location.hash) {
          this.$store.dispatch('toggleProperty', 'imgurModal')
        } else {
          saveToImgur()
        }
        this.$refs.button.blur()
      },
    },
  }
</script>

<style lang="sass">
  @import '../css/includes';

  .download-button {
    position: relative;

    > .menu {
      list-style: none;
      padding: 0;
      display: none;
      position: absolute;
      min-width: 180px;
      background: $blue;
      top: 48px;
      right: 20px;

      > .option {
        padding: 10px;

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