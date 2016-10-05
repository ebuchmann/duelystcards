<template>
  <general-modal :show="modal" width="500px" :close="showModal">
    <div class="import-deck-modal">
      <h1>Import Deck</h1>
      <p>Paste the URL of the deck you want to import</p>
      <p v-if="error">There was an issue importing the deck. Please make sure the URL is correct and that the exported deck has a general.</p>
      <input class="input" ref="url" type="text" placeholder="Insert URL" />
      <button class="success" @click="handleImport()">Import</button>
      <button class="cancel" @click="closeModal()">Cancel</button>
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
        error: false,
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

      closeModal () {
        this.modal = false
        this.error = false
        this.$refs.url.value = ''
      },

      async handleImport () {
        try {
          this.error = false
          const url = this.$refs.url.value
          if (!url) return

          const hash = url.split(/(#|build=)/).pop()

          await this.$store.dispatch('clearDeck')
          const faction = await this.$store.dispatch('loadDeck', hash)

          this.$router.push({ path: `/deck/${faction}/#${hash}`} )
          this.closeModal()
        } catch (e) {
          this.error = true
        }
      },
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
      background: $blue-dark;
      border: none;
      color: $light;
      width: 100%;
      padding: 8px;
      margin-bottom: 15px;
    }
  }

  button.success {
    background: $blue-light;
  }

  button.cancel {
    background: $gray-dark;
  }
</style>