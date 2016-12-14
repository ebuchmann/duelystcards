<template>
  <span @click="logout" class="account-button account-button">
    {{ user.username }}
  </span>
</template>

<script>
  import { mapActions, mapState } from 'vuex'

  export default {
    computed: {
      ...mapState({
        user: ({ user }) => user.user,
      })
    },

    methods: {
      ...mapActions(['logout'])
    }
  }
</script>

<style lang="sass">
  @import '../../css/includes';

  .account-button {
    cursor: pointer;
    background: $blue;
    padding: 8px 14px;
  }
</style>