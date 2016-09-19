<template>
  <div class="import-deck-button" @click="openModal()">
    Import Deck
  </div>
</template>

<script>
  import bus from '../bus'

  export default {
    methods: {
      openModal () {
        bus.$emit('import-deck-modal', true)
      },
    },
  }
</script>

<style lang="sass">
  @import '../css/includes';

  .import-deck-button {
    background: $blue;
    float: right;
    margin-right: 30px;
    padding: 8px 15px;
  }
</style>