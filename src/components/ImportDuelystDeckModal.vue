<template>
  <general-modal :show="modal" width="500px" :close="closeModal">
    <div class="import-duelyst-deck-modal">
      <h1>Import Duelyst Deck</h1>
      <p>Paste the hash generated after clicking export in game while editing a deck.</p>
      <p v-if="error">There was an issue importing the deck. Please make sure the hash was copied correctly and that the exported deck has a general. Report unsolved issues in <a href="https://discord.gg/P2TnFnj" target="_blank">Discord</a>.</p>
      <input class="input" ref="hash" type="text" placeholder="Insert hash" />
      <button class="success" @click="handleDuelystImport()">Import</button>
      <button class="cancel" @click="closeModal()">Cancel</button>
    </div>
  </general-modal>
</template>

<script>
import GeneralModal from 'components/GeneralModal';
import { duelystToDuelystCardsHash } from '../utils/hashing';
import { mapState, mapActions } from 'vuex';

export default {
  data() {
    return {
      error: false
    };
  },

  computed: {
    ...mapState({ modal: ({ app }) => app.importDuelystDeck })
  },

  watch: {
    modal() {
      if (this.$store.state.app.importDuelystDeck) {
        this.$nextTick(() => {
          this.$refs.hash.focus();
        });
      }
    }
  },

  methods: {
    ...mapActions('app', ['toggleProperty']),

    closeModal() {
      this.toggleProperty('importDuelystDeck');
      this.error = false;
      this.$refs.hash.value = '';
    },

    async handleDuelystImport() {
      try {
        this.error = false;
        const duelystHash = this.$refs.hash.value;
        if (!duelystHash) return;

        const ourHash = duelystToDuelystCardsHash(duelystHash);

        await this.$store.dispatch('deck/clearDeck');
        const faction = await this.$store.dispatch('deck/loadDeck', ourHash);

        this.$router.push({ path: `/#${ourHash}` });
        this.closeModal();
      } catch (e) {
        this.error = true;
        console.error('Error importing Duelyst hash.', e);
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

  .import-duelyst-deck-modal {
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