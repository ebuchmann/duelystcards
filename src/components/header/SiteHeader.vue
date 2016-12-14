<template>
  <div class="site-header container">
    <span class="site-logo">
      Duelystcards
    </span>

    <span class="site-navigation">
      <router-link :to="{ name: 'deckbuilder' }" exact>
        Deckbuilder
      </router-link>
      <router-link v-if="user" :to="{ name: 'gauntlet-overview', params: { username: user.username } }">
        Gauntlet
      </router-link>
      <router-link v-else :to="{ name: 'gauntlet' }">
        Gauntlet
      </router-link>
      <account-button v-if="user" />
      <signin-button v-else />
    </span>
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
    border-bottom: 2px solid $blue;
    position: fixed;
    left: 0;
    right: 0;
    height: $height-site-header;
    background: $blue-dark;
    z-index: $z-top-nav;
    align-items: center;
  }

  .site-logo {

  }

  .site-navigation {
    > a {
      color: $blue-light;
      margin-right: 15px;

      &.router-link-active {
        color: $light;
      }
    }
  }
</style>