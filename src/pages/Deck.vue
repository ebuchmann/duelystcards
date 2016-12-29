<template>
  <div class="gauntlet-page">
    <h1>Gaunlet landing</h1>
  </div>
</template>

<script>
  import { mapState } from 'vuex'

  export default {
    computed: {
      ...mapState({
        user: ({ user }) => user.user,
      }),
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