<template>
  <div class="app-page">
    <top-nav></top-nav>
    <div class="container">
      <router-view></router-view>
    </div>
    <page-footer></page-footer>
    <import-deck-modal></import-deck-modal>
  </div>
</template>

<script>
  import TopNav from 'components/TopNav'
  import ImportDeckModal from 'components/ImportDeckModal'
  import PageFooter from 'components/PageFooter'

  export default {
    components: {
      TopNav,
      ImportDeckModal,
      PageFooter,
    },
  }
</script>

<style lang="sass">
  @import './css/app';
</style>