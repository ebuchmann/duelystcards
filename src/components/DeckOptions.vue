<template>
    <div>
      <button :class="['option', 'button', { 'active': divideDeck }]" @click="toggleDivideDeck()">
        <i class="icon icon-divide-list" data-tooltip="Toggle deck divider" data-position="center top"></i>
      </button>
      <button @click="toggleProperty('deckSideboard')" data-tooltip="Tournament sideboard" data-position="center top">Sideboard</button>
    </div>
</template>

<script>
  import { setStorage } from 'utils/localStorage'
  import { mapActions, mapState } from 'vuex'

  export default {
    computed: {
      ...mapState({
        divideDeck:({ app }) => app.divideDeck,
      }),
    },

    methods: {
      toggleDivideDeck () {
        this.toggleProperty('divideDeck')
        setStorage('divideDeck', this.divideDeck)
      },

      ...mapActions(['toggleProperty'])
    },
  }
</script>

<style lang="sass">
  @import '../css/includes';

  .option.button {
    color: darken($light, 30%);
  }

  .option.button.active {
    color: $light;
  }

</style>