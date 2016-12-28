<template>
  <dropdown-wrapper class="deck-context-menu">
    <div class="menu">Menu</div>
    <ul class="options">
      <li class="item" @click="handleRemoveDeck">Remove deck</li>
    </ul>
  </dropdown-wrapper>
</template>

<script>
  import { mapActions, mapState } from 'vuex'
  import DropdownWrapper from 'components/DropdownWrapper'

  export default {
    computed: {
      ...mapState({
        deck: ({ deckTracker }) => deckTracker.currentDeck,
        user: ({ user }) => user.user,
      }),

      canRemove () {
        if (this.user) return this.deck.user_id === this.user._id

        return false
      },
    },

    methods: {
      ...mapActions(['removeDeck']),

      async handleRemoveDeck() {
        await this.removeDeck(this.deck._id);
        this.$router.push({ name: 'deck-overview', params: { username: this.$store.state.route.params.username} })
      }
    },

    components: {
      DropdownWrapper,
    },
  }
</script>

<style lang="sass">
  @import '../../css/includes';

  .deck-context-menu {
    position: absolute;
    right: 0;
    top: 0;

    .options {
      right: 0;
      top: initial;
      white-space: nowrap;
      padding: 0;

      > .item {
        padding: 5px 12px;
        cursor: pointer;

        &:hover {
          background: lighten($blue, 10%);
        }
      }
    }
  }
</style>