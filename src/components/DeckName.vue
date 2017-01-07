<template>
  <div class="deck-name">
    <input v-if="editing" ref="input" @blur="editing = false" class="input" type="text" v-model="deckName" placeholder="Deck name..." />
    <div v-else :class="['text', { 'empty': !deckName.length }]" @click="startEditing">{{ deckName || 'Deck name...' }}</div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        editing: false,
      };
    },

    computed: {
      deckName: {
        get () {
          return this.$store.state.deck.deckName;
        },
        set (value) {
          this.$store.commit('deck/UPDATE_DECK_NAME', value)
        }
      },
    },

    methods: {
      startEditing() {
        this.editing = true;
        this.$nextTick(() => {
          this.$refs.input.focus();
        });
      },
    },
  };
</script>

<style lang="sass">
  @import './src/css/includes';

  .deck-name {
    margin-bottom: 30px;
    font-size: 1.2rem;
    padding: 8px;

    > .text {
      margin: 1px 0;
      border-bottom: 1px solid transparent;

      &.empty {
        color: $gray-light;
      }
    }

    > .input {
      font-size: 1.2rem;
      background: $blue-dark;
      border: none;
      border-bottom: 1px solid $dark;
      width: 100%;

      &:focus {
        outline: none;
      }
    }
  }
</style>