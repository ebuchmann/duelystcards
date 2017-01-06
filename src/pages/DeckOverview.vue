<template>
  <div class="deck-page container">
    <loading-animation v-if="loading && lastUsername !== $route.params.username" />
    <template v-else>
      <div class="deck-card-wrapper" v-if="decks.length">
        <deck-card v-for="deck in decks" :deck="deck" />
      </div>
      <no-decks v-else />
    </template>
  </div>
</template>

<script>
  import { mapActions, mapState } from 'vuex'
  import LoadingAnimation from 'components/common/LoadingAnimation'
  import DeckCard from 'components/deckTracker/DeckCard'
  import NoDecks from 'components/deckTracker/NoDecks'

  export default {
    data () {
      return {
        loading: false,
      };
    },

    computed: {
      ...mapState({
        decks: ({ deckTracker }) => deckTracker.decks,
        lastUsername: ({ deckTracker }) => deckTracker.lastUsername,
        user: ({ user }) => user.user,
      }),
    },

    methods: {
      ...mapActions('deckTracker', ['getDecks']),

      async fetchData () {
        this.loading = true
        await Promise.all([
          this.getDecks(this.$route.params.username),
        ])
        this.loading = false
      }
    },

    created () {
      this.fetchData()
    },

    watch: {
      '$route': 'fetchData'
    },

    components: {
      LoadingAnimation,
      DeckCard,
      NoDecks,
    },
  }
</script>

<style lang="sass">
  @import '../css/includes';

  .deck-card-wrapper {
    display: flex;
    flex-wrap: wrap;

    > .deck-card-vertical {
      width: 300px;
    }
  }

</style>