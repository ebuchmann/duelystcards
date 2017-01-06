<template>
  <span class="account-button sign-in-button" @click="showSignin">
    Sign in
  </span>
</template>

<script>
  import { mapActions } from 'vuex'

  export default {
    methods: {
      ...mapActions('app', ['toggleProperty']),

      showSignin() {
        this.toggleProperty('loginModal')
      }
    }
  }
</script>

<style lang="sass">
  @import '../../css/includes';

  .sign-in-button {
  }
</style>