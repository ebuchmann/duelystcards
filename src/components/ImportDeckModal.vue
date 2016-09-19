<template>
  <general-modal :show="modal" width="500px" :close="showModal">
    <div class="import-deck-modal">
      <h1>Import Deck</h1>
      <p>Paste the URL of the deck you want to import</p>
      <input class="input" ref="url" type="text" />
      <button @click="handleImport()">Import</button>
    </div>
  </general-modal>
</template>

<script>
  import bus from '../bus'
  import GeneralModal from 'components/GeneralModal'

  export default {
    data () {
      return {
        modal: false,
      }
    },

    methods: {
      showModal (value) {
        this.modal = value
        if (this.modal) {
          this.$nextTick(() => {
            this.$refs.url.focus()
          })
        } else {
          this.$refs.url.value = ''
        }
      },

      handleImport () {
        const url = this.$refs.url.value
        if (!url) return
        
        const hash = url.substring(url.indexOf('#') + 1)

        this.$router.push({ path: `/deck/lyonar/#${hash}`} )
        this.modal = false;
      }
    },

    created () {
      bus.$on('import-deck-modal', this.showModal)
    },

    components: {
      GeneralModal,
    },
  }
</script>

<style lang="sass">
  @import '../css/includes';

  .import-deck-modal {
    background: $blue;
    padding: 30px;

    > .input {
      background: $blue-light;
      border: none;
      color: black;
    }
  }
</style>