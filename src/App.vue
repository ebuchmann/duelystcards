<template>
  <div class="app-page">
    <site-header />
    <!-- <top-nav /> -->
    <div class="main-content">
      <router-view />
    </div>

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

  .main-content {
    padding-top: $height-site-header-spacing;
    height: calc(100vh - #{$height-site-header-spacing});
  }

</style>