<template>
  <div class="app-page">
    <site-header />
    <div class="main-content">
      <router-view />
    </div>

    <import-deck-modal />
    <imgur-modal />
    <settings-modal v-if="$store.state.user.user" />
    <login-modal />

    <modal-horizontal-deck v-if="modal && saveType === 'horizontal'" />
    <modal-vertical-deck v-if="modal && saveType === 'vertical'" />
  </div>
</template>

<script>
  import SiteHeader from 'components/header/SiteHeader';
  import ImportDeckModal from 'components/ImportDeckModal';
  import ImgurModal from 'components/ImgurModal';
  import ModalHorizontalDeck from 'components/horizontal/ModalHorizontalDeck';
  import SettingsModal from 'components/settings/SettingsModal';
  import LoginModal from 'components/header/LoginModal';
  import ModalVerticalDeck from 'components/ModalVerticalDeck';

  import { mapState } from 'vuex';

  export default {
    computed: {
      ...mapState({
        modal: ({ app }) => app.savingDeck,
        saveType: ({ app }) => app.saveType,
      })
    },

    components: {
      SiteHeader,
      ImportDeckModal,
      ImgurModal,
      ModalHorizontalDeck,
      SettingsModal,
      LoginModal,
      ModalVerticalDeck,
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