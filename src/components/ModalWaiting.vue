<template>
  <div class="modal-waiting" v-show="saving">
    <h1>Generating image...</h1>
  </div>
</template>

<script>
  import { mapState } from 'vuex'

  export default {
    computed: {
      ...mapState({ saving: state => state.app.savingDeck }),
    }
  }
</script>

<style lang="sass">
  @import '../css/includes';

  .modal-waiting {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, .5);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: $z-modal-waiting;
  }

</style>