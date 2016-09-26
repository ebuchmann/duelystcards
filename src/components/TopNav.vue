<template>
  <div class="top-nav">
    <div class="container">
      <h2 class="logo"><router-link to="/">Deck Builder</router-link></h2>
      <faction-navigation></faction-navigation>
      <import-deck-button></import-deck-button>
    </div>
  </div>
</template>

<script>
  import FactionNavigation from './FactionNavigation'
  import ImportDeckButton from './ImportDeckButton'

  export default {
    components: {
      FactionNavigation,
      ImportDeckButton,
    }
  }
</script>

<style lang="sass">
  @import '../css/includes';

  .top-nav {
    background: #070e13;
    padding-top: 15px;
    padding-bottom: 15px;
    margin-bottom: 30px;
    @include clearfix;

    > .container > .logo {
      float: left;
    }
  }
</style>