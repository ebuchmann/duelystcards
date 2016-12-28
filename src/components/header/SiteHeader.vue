<template>
  <div class="site-header">
    <div class="container">
      <span class="site-logo">
        Duelystcards
      </span>

      <span class="site-navigation">
        <router-link :to="{ name: 'deckbuilder' }" exact>
          Deck builder
        </router-link>
        <span class="divider"></span>
        <router-link v-if="user" :to="{ name: 'deck-overview', params: { username: user.username } }">
          Deck tracker
        </router-link>
        <router-link v-else :to="{ name: 'deck' }">
          Deck tracker
        </router-link>
        <account-button v-if="user" />
        <signin-button v-else />
      </span>
    </div>
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
    background: $blue-dark;
    position: fixed;
    left: 0;
    right: 0;
    z-index: $z-top-nav;

    > .container {
      height: $height-site-header;
      display: flex;
      justify-content: space-between;
      border-bottom: 2px solid $blue;
      align-items: center;
    }
  }

  .site-logo {

  }

  .site-navigation {
    display: flex;
    align-items: center;

    > .divider {
      border-left: 1px solid $light;
      margin-right: 15px;
      height: 20px;
    }

    > a {
      color: $blue-light;
      margin-right: 15px;

      &.router-link-active {
        color: $light;
      }
    }
  }
</style>