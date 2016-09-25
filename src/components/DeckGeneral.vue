<template>
  <div class="deck-general">
    <div class="cards">Cards: {{ $store.state.deck.totalCards }} / 40</div>
    <div class="spirit">Spirit: {{ $store.state.deck.spirit }}</div>
    <div class="name" v-if="$store.state.deck.general">{{ $store.state.deck.general.name }}</div>
    <div :class="spriteClass"></div>
  </div>
</template>

<script>
  export default {
    computed: {
      spriteClass () {
        const general = this.$store.state.deck.general
        if (general) return `sprite ${general.type}-md ${general.type}-sprite ${general.type}-${general.id}`
      },
    }
  }
</script>

<style lang="sass">
  @import '../css/includes';

  .deck-general {
    text-align: right;
    font-size: .9rem;
    position: relative;
    height: 120px;

    > .general {
      top: -30px;
      left: -20px;
    }
  }
</style>