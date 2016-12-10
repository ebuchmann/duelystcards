<template>
  <div class="app-page">
    <site-header />
    <!-- <top-nav /> -->
    <router-view />

    <import-deck-modal />
    <horizontal-deck />
    <imgur-modal />
    <settings-modal />
    <login-modal />
  </div>
</template>

<script>
  import SiteHeader from 'components/header/SiteHeader'
  import TopNav from 'components/TopNav'
  import ImportDeckModal from 'components/ImportDeckModal'
  import ImgurModal from 'components/ImgurModal'
  import HorizontalDeck from 'components/horizontal/HorizontalDeck'
  import SettingsModal from 'components/settings/SettingsModal'
  import LoginModal from 'components/LoginModal'

  export default {
    components: {
      SiteHeader,
      TopNav,
      ImportDeckModal,
      ImgurModal,
      HorizontalDeck,
      SettingsModal,
      LoginModal,
    },
  }
</script>

<style lang="sass">
  @import './css/app';

  .app-page {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    overflow: hidden;
  }
</style>