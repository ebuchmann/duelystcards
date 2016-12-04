<template>
  <footer class="page-footer">
    Duelyst version: {{ version }}<br>Deckbuilder version: 1.0.0 - 
    by <a href="https://github.com/ebuchmann/deckbuilder" target="_blank">ebuchmann</a>
  </footer>
</template>

<script>
  import credentials from '../../credentials';

  export default {
    computed: {
      version() {
        return credentials.duelystVersion
      }
    }
  }
</script>

<style lang="sass">
  @import '../css/includes';

  .page-footer {
    padding: 30px 0 30px $width-drawer-filter + 30px;
  }
</style>