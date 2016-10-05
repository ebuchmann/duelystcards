<template>
  <div :class="['deck-card', { 'flash': flash, 'dull': dull }]" @click="selectCard(card)" @contextmenu.prevent="removeCard(card)">
    <div class="cost">{{ card.cost }}</div>
    <div class="name">{{ card.name }}</div>
    <div class="qty">x{{ card.qty }}</div>
    <div :class="spriteClass"></div>
    <div :class="['rarity', card.rarity]"></div>
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
    height: 43px;
    margin: 3px 0 0 20px;
    position: relative;
    display: flex;
    align-items: center;

    .rarity {
      width: 0;
      height: 0;
      border-top: 6px solid transparent;
      border-bottom: 6px solid transparent;
      border-right-width: 6px;
      border-right-style: solid;
      position: absolute;
      right: 0;

      &.basic {
        border-right-color: transparent;
      }

      &.common {
        border-right-color: $color-common;
      }

      &.rare {
        border-right-color: $color-rare;
      }

      &.epic {
        border-right-color: $color-epic;
      }

      &.legendary {
        border-right-color: $color-legendary;
      }
    }


    > .cost {
      line-height: 63px;
      text-align: center;
      font-weight: bold;
      width: 57px;
      height: 63px;
      background-image: url(https://dl.dropboxusercontent.com/u/24984522/icon_mana.png);
      position: absolute;
      top: -10px;
      left: -28px;
      transform: scale(0.75);
      color: $dark;
      z-index: $deck-card-cost;
    }

    > .name {
      margin-left: 28px;
      width: 180px;
      line-height: 1.1;
    }

    > .qty {
      
    }
  }
</style>