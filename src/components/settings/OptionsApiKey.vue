<template>
  <div class="options-api-key">
    <h4 class="heading">Api Key</h4>
    <p>This is your personal API key to enable scripts saving data to your account. Do not share this key with anyone.</p>
    <code>
      {{ user.apiKey }}
    </code>
    <small>Resetting your API Key will invalidate the old key and require updating the script to use the new key</small>
    <button class="button" @click="resetApiKey">Reset Key</button>
  </div>
</template>

<script>
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
  }
</script>

<style lang="sass">
  @import '../../css/includes';
</style>