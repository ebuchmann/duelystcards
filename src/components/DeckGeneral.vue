<template>
  <div class="deck-general">
    <div class="cards"><b>{{ $store.state.deck.totalCards }} / 40</b> cards</div>
    <div class="spirit"><b>{{ $store.state.deck.spirit }}</b> spirit</div>
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
    position: relative;
    height: 110px;

    > .general {
      top: -40px;
      left: -20px;
    }

    > .cards {
      padding-top: 15px;
    }

    > .cards > b, > .spirit > b {
      color: $blue-light;
    }

    > .name {
      font-size: 1.1rem;
      text-transform: uppercase;
      position: absolute;
      bottom: 0;
      left: 120px;
    }
  }
</style>