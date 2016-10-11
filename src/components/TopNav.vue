<template>
  <div class="top-nav">
    <div class="container">
      <h2 class="logo"><router-link to="/">Deck Builder</router-link></h2>
      <text-search />
      <import-deck-button />
    </div>
  </div>
</template>

<script>
  import ImportDeckButton from './ImportDeckButton'
  import TextSearch from './TextSearch'

  export default {
    components: {
      ImportDeckButton,
      TextSearch,
    },
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