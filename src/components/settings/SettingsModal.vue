<template>
  <general-modal :show="modal" width="780px" :close="closeModal">
    <div class="settings-modal">
      <div class="left">
        <h4 class="heading">Settings</h4>
        <ul class="links">
          <li :class="['link', { 'active': tab === 'api'}]" @click="tab = 'api'">API Key</li>
          <li :class="['link', { 'active': tab === 'script'}]" @click="tab = 'script'">Script Installation</li>
        </ul>
      </div>
      <div class="right">
        <options-api-key v-if="tab === 'api'" />
        <options-script-installation v-if="tab === 'script'" />
      </div>
    </div>
  </general-modal>
</template>

<script>
  import GeneralModal from 'components/GeneralModal'
  import OptionsApiKey from 'components/settings/OptionsApiKey'
  import OptionsScriptInstallation from 'components/settings/OptionsScriptInstallation'
  import { mapState, mapActions } from 'vuex'

  export default {
    data() {
      return {
        tab: 'api',
      };
    },

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
      OptionsApiKey,
      OptionsScriptInstallation,
    },
  }
</script>

<style lang="sass">
  @import '../../css/includes';

  .settings-modal {
    border-radius: 6px;
    display: flex;
    padding: 10px 10px 10px 0;
    
    .heading {
      padding: 4px 8px 4px 15px;
      border-bottom: 1px solid $blue;
    }

    > .left {
      flex: 0 0 200px;

    }

    > .right {
      flex: 1;
      padding-left: 20px;
    }

    .links {
      list-style: none;
      margin: 0;
      padding: 0;

      > .link {
        position: relative;
        color: darken($light, 10%);
        cursor: pointer;
        padding: 4px 8px 4px 15px;

        &:hover {
          &::before {
            opacity: .5;
          }
        }

        &::before {
          position: absolute;
          top: 0;
          left: 0;
          height: 100%;
          content: ' ';
          border-left: 4px solid $blue-light;
          opacity: 0;
        }

        &.active {
          color: $light;

          &::before {
            opacity: 1;
          }
        }
      }
    }
  }
</style>