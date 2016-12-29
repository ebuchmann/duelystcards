<template>
<code class="api-code"><template v-if="keyOnly">{{ user.apiKey }}</template><template v-else>const DC_API_KEY = '{{ user.apiKey }}';
$.getScript('https://duelyst.cards/public/dc_tracker.js');</template></code>
</template>

<script>
  import { mapState } from 'vuex'

  export default {
    props: {
      keyOnly: {
        default: false,
      },
    },

    computed: {
      ...mapState({
        user: ({ user }) => user.user,
      })
    }
  }
</script>

<style lang="sass">
  @import '../../css/includes';

  .api-code {
    background: $light;
    color: $dark;
    padding: 10px;
    white-space: pre;
    display: block;
  }
</style>