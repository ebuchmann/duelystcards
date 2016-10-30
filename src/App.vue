<template>
  <div class="app-page">
    <top-nav />
    <router-view />
    <page-footer />
    <import-deck-modal />
    <imgur-modal />
  </div>
</template>

<script>
  import TopNav from 'components/TopNav'
  import ImportDeckModal from 'components/ImportDeckModal'
  import ImgurModal from 'components/ImgurModal'
  import PageFooter from 'components/PageFooter'

  export default {
    components: {
      TopNav,
      ImportDeckModal,
      ImgurModal,
      PageFooter,
    },
  }
</script>

<style lang="sass">
  @import './css/app';
</style>