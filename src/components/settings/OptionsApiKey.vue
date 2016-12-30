<template>
  <div class="options-api-key">
    <h4 class="heading">Api Key</h4>
    <p>This is your personal API key to enable scripts saving data to your account. <strong>Do not share this key with anyone</strong>.</p>
    <api-code key-only="true" />
    <small>Resetting your API Key will invalidate the old key and require updating the script to use the new key</small><br><br>
    <button class="button" @click="resetApiKey">Reset Key</button>
  </div>
</template>

<script>
  import ApiCode from 'components/common/ApiCode'
  import { mapActions, mapState } from 'vuex'

  export default {
    computed: {
      ...mapState({
        user: ({ user }) => user.user,
      }),
    },

    methods: {
      ...mapActions(['resetApiKey'])
    },

    components: {
      ApiCode
    },
  }
</script>

<style lang="sass">
  @import '../../css/includes';
</style>