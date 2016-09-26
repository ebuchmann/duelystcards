<template>
  <div :class="['deck-card', { 'flash': flash, 'dull': dull }]" @click="selectCard(card)" @contextmenu.prevent="removeCard(card)">
    <div class="cost">{{ card.cost }}</div>
    <div class="name">{{ card.name }} x{{ card.qty }}</div>
    <div :class="spriteClass"></div>
  </div>
</template>

<script>
  export default {
    props: ['card'],

    data () {
      return {
        flash: false,
        dull: false,
      }
    },

    computed: {
      spriteClass () {
        return `sprite ${this.card.type}-sm ${this.card.faction}-sprite ${this.card.faction}-${this.card.id}`
      },
    },

    methods: {
      selectCard (card) {
        this.flash = true
        this.timeout = setTimeout(() => {
          this.flash = false
        }, 200)
        this.$store.dispatch('selectCard', { card, qty: 1 })
      },

      removeCard (card) {
        this.$store.dispatch('removeCard', card)
      }
    },
  }
</script>

<style lang="sass">
  @import '../css/includes';

  .deck-card {
    background: $blue;
    height: 44px;
    margin: 3px 0;
    position: relative;

    > .cost {
      line-height: 63px;
      text-align: center;
      font-weight: bold;
      width: 57px;
      height: 63px;
      background-image: url(https://dl.dropboxusercontent.com/u/24984522/icon_mana.png);
      position: absolute;
      top: -10px;
      left: -10px;
      transform: scale(0.75);
      color: $dark;
      z-index: 4;
    }

    > .name {
      line-height: 44px;
      text-indent: 45px;
    }

    &::before, &::after {
      position: absolute;
      content: '';
      bottom: 0;
      border-style: solid;
    }

    &::before {
      left: 0;
      border-width: 0 22px 22px 0;
      border-color: $blue-dark $blue;
    }

    &::after {
      left: 0;
      top: 0;
      height: 22px;
      border-width: 22px 22px 0 0;
      border-color: $blue-dark $blue;
    }
  }
</style>