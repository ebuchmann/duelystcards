<template>
  <general-modal :show="modal" width="500px" :close="closeModal">
    <link href="https://use.fontawesome.com/releases/v5.0.6/css/fontawesome.css" rel="stylesheet">
    <link href="https://use.fontawesome.com/releases/v5.0.6/css/solid.css" rel="stylesheet">
    <div class="export-duelystcards-deck-modal">
      <h1>Export Duelystcards Deck</h1>
      <p>Click to copy a shareable URL of your deck!</p>
      <button class="success" @click="copyURI()"><i class="fas fa-copy fa-lg"></i> Copy</button>
      <button class="cancel" @click="closeModal()">Close</button>
    </div>
  </general-modal>
</template>

<script>
import GeneralModal from 'components/GeneralModal';
import { mapState, mapActions } from 'vuex';

export default {
  computed: {
    ...mapState({ modal: ({ app }) => app.exportDuelystcardsDeck })
  },

  methods: {
    ...mapActions('app', ['toggleProperty']),

    closeModal() {
      this.toggleProperty('exportDuelystcardsDeck');
      this.uri = '';
    },

    // from https://stackoverflow.com/questions/400212/how-do-i-copy-to-the-clipboard-in-javascript
    copyURI() {
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

      ephemeral.value = window.location.href;
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

  .export-duelystcards-deck-modal {
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