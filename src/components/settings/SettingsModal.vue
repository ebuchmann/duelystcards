<template>
  <general-modal :show="modal" width="500px" :close="closeModal">
    <div class="settings-modal">
      <h1>Settings</h1>
    </div>
  </general-modal>
</template>

<script>
  import GeneralModal from 'components/GeneralModal'
  import Clipboard from 'clipboard'
  import { mapState, mapActions } from 'vuex'

  export default {
    computed: {
      ...mapState({
        modal: state => state.app.settingsModal,
      }),
    },

    methods: {
      ...mapActions(['toggleProperty']),

      closeModal () {
        this.toggleProperty('settingsModal')
      },
    },

    components: {
      GeneralModal,
    },
  }
</script>

<style lang="sass">
  @import '../../css/includes';

  .settings-modal {
    background: $blue;
    text-align: center;
    border-radius: 6px;
  }
</style>