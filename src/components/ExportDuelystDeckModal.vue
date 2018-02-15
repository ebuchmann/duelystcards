<template>
  <general-modal :show="modal" width="500px" :close="closeModal">
    <div class="export-duelyst-deck-modal">
      <h1>Export Duelyst Deck</h1>
      <p>Click copy to add a pastable Duelyst deck hash to your clipboard.</p>
      <p v-if="error">There was an issue generating the deck hash. Please make sure that the deck has a general. Report unsolved issues in <a href="https://discord.gg/P2TnFnj" target="_blank">Discord</a>.</p>
      <button class="success" @click="copyHash()"><i class="fas fa-copy fa-lg"></i> Copy</button>
      <button class="cancel" @click="closeModal()">Close</button>
    </div>
  </general-modal>
</template>

<script>
import GeneralModal from 'components/GeneralModal';
import { duelystCardsToDuelystHash } from '../utils/hashing';
import { mapState, mapActions } from 'vuex';

export default {
  data() {
    return {
      error: false
    };
  },

  computed: {
    ...mapState({ modal: ({ app }) => app.exportDuelystDeck })
  },

  methods: {
    ...mapActions('app', ['toggleProperty']),

    closeModal() {
      this.toggleProperty('exportDuelystDeck');
      this.error = false;
    },

    generateDuelystHash() {
      try {
        this.error = false;
        return duelystCardsToDuelystHash(window.location.hash.slice(1));
      } catch (e) {
        console.error('Error hashing current deck.', e);
        this.error = true;
      }
    },

    // from https://stackoverflow.com/questions/400212/how-do-i-copy-to-the-clipboard-in-javascript
    copyHash() {
      const ephemeral = document.createElement('textarea');
      ephemeral.style.position = 'fixed';
      ephemeral.style.top = 0;
      ephemeral.style.left = 0;
      ephemeral.style.width = '2em';
      ephemeral.style.height = '2em';
      ephemeral.style.padding = 0;
      ephemeral.style.border = 'none';
      ephemeral.style.outline = 'none';
      ephemeral.style.boxShadow = 'none';
      ephemeral.style.background = 'transparent';

      ephemeral.value = this.generateDuelystHash();
      document.body.appendChild(ephemeral);

      ephemeral.select();

      document.execCommand('copy');

      document.body.removeChild(ephemeral);
      this.closeModal();
    }
  },

  components: {
    GeneralModal
  }
};
</script>

<style lang="sass">
  @import '../css/includes';

  .export-duelyst-deck-modal {
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