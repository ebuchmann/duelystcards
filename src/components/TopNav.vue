<template>
  <div class="top-nav container">
    <h2 class="logo"><router-link to="/">Deck Builder</router-link></h2>
    <faction-navigation></faction-navigation>
  </div>
</template>

<script>
  import FactionNavigation from './FactionNavigation'

  export default {
    components: {
      FactionNavigation
    }
  }
</script>

<style lang="sass">
  @import '../css/includes';

  .top-nav {
    @include clearfix;

    > .logo {
      float: left;
    }
  }
</style>