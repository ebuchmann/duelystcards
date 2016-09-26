<template>
  <div class="app-page">
    <top-nav></top-nav>
    <div class="container">
      <router-view></router-view>
    </div>

    <import-deck-modal></import-deck-modal>
  </div>
</template>

<script>
  import TopNav from 'components/TopNav'
  import ImportDeckModal from 'components/ImportDeckModal'

  export default {
    components: {
      TopNav,
      ImportDeckModal,
    },
  }
</script>

<style lang="sass">
  @import './css/app';
</style>