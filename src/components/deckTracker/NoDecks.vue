<template>
  <div class="no-decks">
    <div class="left">
      <img src="../../assets/images/emote_vaath_confused.png" />
    </div>
    <div class="right">
      <h2>There aren't any decks here!</h2>
      <template v-if="user && user.username === username">
        <p>To begin automatically tracking decks you have to add this script to your game file. Your API key is unique to your account and is used to keep data associated with your account.</p>
        <p>As you play ranked games in Duelyst the script will detect when a game is finished and send over the match data to our servers. If a matching deck exists the match will be tracked under that deck, otherwise a new deck will be created. Decks are unique, so even changing out one card will create a new deck so you can track if those recent changes are better than the deck was before.</p>
        <code>const DC_API_KEY = '{{ user.apiKey }}';
$.getScript('https://duelyst.cards/public/dc_tracker.js');</code>
        <small>If you need any help just come into our discord channel and we can help</small>
      </template>
    </div>
  </div>
</template>

<script>
  import { mapState } from 'vuex'

  export default {
    computed: {
      ...mapState({
        user: ({ user }) => user.user,
        username: ({ route }) => route.params.username,
      })
    }
  }
</script>

<style lang="sass">
  @import '../../css/includes';

  .no-decks {
    border: 1px solid $blue;
    max-width: 1100px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    padding: 30px 0;

    code {
      background: $light;
      color: $dark;
      padding: 10px;
      white-space: pre;
      display: block;
    }

    > .right {
      padding-right: 30px;
    }
  }
</style>