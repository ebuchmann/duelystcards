<template>
  <div class="site-header container">
    <span class="site-logo">
      Duelystcards
    </span>

    <span class="site-navigation">
      <a>Gauntlet tracker</a>
      <a>Deckbuilder</a>
    </span>

    <account-button v-if="user" />
    <signin-button v-else />
  </div>
</template>

<script>
  import SigninButton from 'components/header/SigninButton'
  import AccountButton from 'components/header/AccountButton'
  import { mapActions, mapState } from 'vuex'

  export default {
    computed: {
      ...mapState({
        user: ({ user }) => user.user,
      })
    },

    components: {
      SigninButton,
      AccountButton,
    }
  }
</script>

<style lang="sass">
  @import '../../css/includes';

  .site-header {
    display: flex;
    justify-content: space-between;
  }

  .site-logo {

  }

  .site-navigation {

  }

  .account-button {
    cursor: pointer;
    background: $blue;
    padding: 8px 14px;
    margin-right: 30px;
  }

  .sign-in-button {
  }
</style>