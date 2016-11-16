<template>
  <div class="deck-options">
    <button :class="['option', { 'active': divideDeck }]" @click="toggleDivideDeck()"><i class="icon icon-divide-list" data-tooltip="Toggle deck divider" data-position="center top"></i></button>
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

  .deck-options {
    border: 1px solid #3f474e;
    border-radius: 4px;
    height: 38px;

    > .option {
      background: transparent;
      cursor: pointer;
      height: 100%;
      border-radius: 4px;
      color: gray;

      &.active {
        background: #2f2b2b;
        color: $light;
      }

      > .icon {
        font-size: 1.3rem;
      }
    }
  }
</style>