<template>
  <div :class="['deck-general', faction]" v-show="generalName">
    <div class="name" v-html="generalName"></div>
    <div :class="spriteClass"></div>
  </div>
</template>

<script>
  export default {
    computed: {
      spriteClass () {
        const general = this.$store.state.deck.general
        if (general) return `sprite ${general.type}-md ${general.type}-sprite ${general.type}-hex_${general.id}`
      },

      generalName () {
        const general = this.$store.state.deck.general
        if (general) return general.name.replace(' ', '<br />')
      },

      faction () {
        return this.$store.state.route.params.faction
      }
    }
  }
</script>

<style lang="sass">
  @import '../css/includes';

  .deck-general {
    position: relative;
    height: 100px;
    background: $dark;
    display: flex;
    align-items: center;

    &.abyssian { color: $color-abyssian; }
    &.lyonar { color: $color-lyonar; }
    &.magmar { color: $color-magmar; }
    &.songhai { color: $color-songhai; }
    &.vanar { color: $color-vanar; }
    &.vetruvian { color: $color-vetruvian; }

    > .general {
      top: -40px;
      left: -20px;
    }

    > .name {
      font-size: 1.5rem;
      font-weight: bold;
      line-height: 1.1;
      text-transform: uppercase;
      margin-left: 105px;
    }
  }
</style>