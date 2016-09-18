<template>
  <div class="deck-general">
    Cards: {{ $store.state.deck.totalCards }} / 40
    <br>
    Spirit: {{ $store.state.deck.spirit }}
  </div>
</template>

<script>
  export default {

  }
</script>

<style lang="sass">
  @import '../css/includes';

  .deck-general {
    text-align: right;
    font-size: .9rem;
  }
</style>