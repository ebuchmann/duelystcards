<template>
  <div class="app-page">
    <top-nav></top-nav>
    <router-view></router-view>
    <page-footer></page-footer>
    <import-deck-modal></import-deck-modal>
    <save-deck-modal></save-deck-modal>
  </div>
</template>

<script>
  import TopNav from 'components/TopNav'
  import ImportDeckModal from 'components/ImportDeckModal'
  import SaveDeckModal from 'components/SaveDeckModal'
  import PageFooter from 'components/PageFooter'

  export default {
    components: {
      TopNav,
      ImportDeckModal,
      SaveDeckModal,
      PageFooter,
    },
  }
</script>

<style lang="sass">
  @import './css/app';
</style>