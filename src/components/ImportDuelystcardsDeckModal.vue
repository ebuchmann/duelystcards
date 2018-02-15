<template>
  <general-modal :show="modal" width="500px" :close="closeModal">
    <div class="import-duelystcards-deck-modal">
      <h1>Import Duelystcards Deck</h1>
      <p>Paste the URL of the deck you want to import. The deck must contain a general for successful import.</p>
      <p v-if="error">There was an issue importing the deck. Please make sure the URL is correct and that the exported deck has a general.</p>
      <input class="input" ref="url" type="text" placeholder="Insert URL" />
      <button class="success" @click="handleDuelystcardsImport()">Import</button>
      <button class="cancel" @click="closeModal()">Close</button>
    </div>
  </general-modal>
</template>

<script>
import GeneralModal from 'components/GeneralModal';
import { mapState, mapActions } from 'vuex';

export default {
  data() {
    return {
      error: false
    };
  },

  computed: {
    ...mapState({ modal: ({ app }) => app.importDuelystcardsDeck })
  },

  watch: {
    modal() {
      if (this.$store.state.app.importDuelystcardsDeck) {
        this.$nextTick(() => {
          this.$refs.url.focus();
        });
      }
    }
  },

  methods: {
    ...mapActions('app', ['toggleProperty']),

    closeModal() {
      this.toggleProperty('importDuelystcardsDeck');
      this.error = false;
      this.$refs.url.value = '';
    },

    async handleDuelystcardsImport() {
      try {
        this.error = false;
        const url = this.$refs.url.value;
        if (!url) return;

        const hash = url.split(/(#|build=|deckList=)/).pop();

        await this.$store.dispatch('deck/clearDeck');
        const faction = await this.$store.dispatch('deck/loadDeck', hash);

        this.$router.push({ path: `/#${hash}` });
        this.closeModal();
      } catch (e) {
        this.error = true;
      }
    }
  },

  components: {
    GeneralModal
  }
};
</script>

<style lang="sass">
  @import '../css/includes';

  .import-duelystcards-deck-modal {
    padding: 30px;

    > .input {
      background: rgba(#000, 0.9);
      border: 1px solid $blue;
      color: $light;
      width: 100%;
      padding: 8px;
      margin-bottom: 15px;

      &:focus {
        outline: 0;
        box-shadow: inset 0 1px 1px rgba(0,0,0,.075), 0 0 8px rgba(102,175,233,.6);
      }
    }
  }

  button.success {
    cursor: pointer;
    background: $blue-light;
  }

  button.cancel {
    cursor: pointer;
    background: $gray-dark;
  }
</style>