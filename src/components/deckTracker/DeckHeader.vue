<template>
  <div class="deck-header">
    <router-link class="previous" :to="{ name: 'deck-overview', params: { username: $route.params.username } }">
      back to decks
    </router-link>
    <deck-context-menu />
    <div class="sprite">
      <div :class="spriteClass"></div>
    </div>
    <deck-name-input :deck="deck" />
    <div class="win-loss">Wins: {{ deck.wins }}, Losses: {{ deck.losses }}</div>
  </div>
</template>

<script>
  import DeckContextMenu from 'components/deckTracker/DeckContextMenu'
  import DeckNameInput from 'components/deckTracker/DeckNameInput'

  export default {
    props: ['deck'],

    data() {
      return {
        name: this.deck.name || '',
        disabled: false,
      };
    },

    computed: {
      spriteClass () {
        return `sprite general-lg general-sprite general-hex_${this.deck.generalId}-lg`
      },
    },

    components: {
      DeckContextMenu,
      DeckNameInput,
    },
  }
</script>

<style lang="sass">
  @import '../../css/includes';

  .deck-header {
    position: relative;
    display: flex;
    flex-direction: column;
    padding-bottom: 30px;

    .previous {
      position: absolute;
      top: 0;
      left: 0;
    }

    > .sprite {
      margin: 0 auto;

      > .sprite {
        position: relative;
      }
    }

    > .win-loss {
      text-align: center;
      font-size: 2rem;
    }

    > .name {
      font-size: 3rem;
      text-align: center;
    }
  }
</style>