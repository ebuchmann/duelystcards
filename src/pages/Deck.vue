<template>
  <div class="gauntlet-page">
    <div class="no-decks">
      <div class="left">
        <img src="../assets/images/emote_vaath_confused.png" />
      </div>
      <div class="right">
        <h2>Duelyst Deck Tracker</h2>
        <p>To begin automatically tracking decks you must have <a @click="toggleProperty('loginModal')">an account</a>. Once logged in you will see instructions on how to start tracking your own decks. Later this page will be expanded to feature top ranking decks and other community decks.</p>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapActions, mapState } from 'vuex'

  export default {
    methods: {
      ...mapActions(['toggleProperty']),
    },

    computed: {
      ...mapState({
        user: ({ user }) => user.user,
      }),
    },

    watch: {
      user() {
        if (this.user) this.$router.push({ name: 'deck-overview', params: { username: this.user.username } })
      },
    },

    beforeRouteEnter (to, from, next) {
      next(vm => {
        if (vm.user) next({ name: 'deck-overview', params: { username: vm.user.username }})
      })
    }
  }
</script>

<style lang="sass">
  @import '../css/includes';

</style>