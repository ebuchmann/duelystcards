<template>
  <div class="app-page">
    <top-nav />
    <router-view />
    <page-footer />
    <import-deck-modal />
    <horizontal-deck />
    <imgur-modal />
  </div>
</template>

<script>
  import TopNav from 'components/TopNav'
  import ImportDeckModal from 'components/ImportDeckModal'
  import ImgurModal from 'components/ImgurModal'
  import HorizontalDeck from 'components/horizontal/HorizontalDeck'
  import PageFooter from 'components/PageFooter'

  export default {
    components: {
      TopNav,
      ImportDeckModal,
      ImgurModal,
      HorizontalDeck,
      PageFooter,
    },
  }
</script>

<style lang="sass">
  @import './css/app';
</style>