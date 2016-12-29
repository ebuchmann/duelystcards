<template>
  <div class="options-script-installation">
    <h4 class="heading">Script Installation</h4>
    <div class="tabs">
      <span :class="{'active': tab === 'windows'}" @click="tab = 'windows'">Windows</span> | 
      <span :class="{'active': tab === 'steam'}" @click="tab = 'steam'">Steam</span> | 
      <span :class="{'active': tab === 'mac'}" @click="tab = 'mac'">Mac OS</span>
    </div>
    <div>
      <ol>
      <template v-if="tab === 'windows'">
        <li>Find C:\Users\&lt;USERNAME&gt;\.counterplay\duelyst</li>
        <li>Open the folder for the current game version, ie. v1.78.0</li>
        <li>Move to \resources\app\src</li>
      </template>
      <template v-else-if="tab === 'steam'">
        <li>Locate the Duelyst folder by right-clicking Duelyst in Steam -> Properties -> Local files -> Browse local files</li>
        <li>Move to \resources\app\src</li>
      </template>
      <template v-else>
        <li>Find ~/.counterplay/duelyst</li>
        <li>Open the folder for the current game version, ie. v1.78.0</li>
        <li>Edit the package contents of Duelyst.app, go to /resources/app/src</li>
      </template>
        <li>Edit duelyst.js with any text editor</li>
        <li>Copy the below code block and paste it into the bottom of the file</li>
        <li>Save the file and run the client, if it's successful you should start seeing in game notifications about connecting to duelystcards.com</li>
      </ol>
    </div>
    <api-code />
  </div>
</template>

<script>
  import ApiCode from 'components/common/ApiCode'
  import { mapActions, mapState } from 'vuex'

  export default {
    data() {
      return {
        tab: 'windows',
      };
    },

    computed: {
      ...mapState({
        user: ({ user }) => user.user,
      }),
    },

    components: {
      ApiCode,
    },
  }
</script>

<style lang="sass">
  @import '../../css/includes';

  .options-script-installation {
    .tabs {
      cursor: pointer;
      margin-bottom: 10px;

      .active {
        border-bottom: 2px solid $blue-light;
      }
    }
  }
</style>