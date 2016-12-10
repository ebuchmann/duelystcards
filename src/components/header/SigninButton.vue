<template>
  <span class="account-button sign-in-button" @click="showSignin">
    Sign in
  </span>
</template>

<script>
  import { mapActions } from 'vuex'

  export default {
    methods: {
      ...mapActions(['toggleProperty']),

      showSignin() {
        this.toggleProperty('loginModal')
      }
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