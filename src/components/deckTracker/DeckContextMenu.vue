<template>
  <dropdown-wrapper v-if="canEditDeck" class="deck-context-menu">
    <div class="menu icon-settings"></div>
    <ul class="options">
      <li v-if="canEditDeck" class="item" @click="handleRemoveDeck">Remove deck</li>
    </ul>
  </dropdown-wrapper>
</template>

<script>
  import { mapActions, mapGetters, mapState } from 'vuex'
  import DropdownWrapper from 'components/DropdownWrapper'

  export default {
    computed: {
      ...mapGetters('deck', ['currentFaction']),
      ...mapGetters('deckTracker', ['canEditDeck']),

      ...mapState({
        deck: ({ deckTracker }) => deckTracker.currentDeck,
        user: ({ user }) => user.user,
      }),
    },

    methods: {
      ...mapActions('deckTracker', ['removeDeck']),

      async handleRemoveDeck() {
        try {
          await this.removeDeck(this.deck._id);
          this.$router.push({ name: 'deck-overview', params: { username: this.$store.state.route.params.username} })
        } catch (error) {

        }
      },
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
    right: 20px;
    top: 0;

    &:focus > .menu {
      background: none;
      color: $blue-light;
    }

    > .menu {
      color: darken($light, 20%);
      font-size: 1.8rem;

      &:hover, &:focus {
        background: none;
        color: $blue-light;
      }
    }

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