<template>
  <div :class="['deck-card', card.rarity, { 'flash': flash, 'dull': dull }]" @click="selectCard(card)" @contextmenu.prevent="removeCard(card)">
    <div class="cost">{{ card.cost }}</div>
    <div class="name">{{ card.name }}</div>
    <div class="qty">x{{ card.qty }}</div>
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
    height: 43px;
    margin: 3px 0 0 20px;
    position: relative;
    border-right-width: 4px;
    border-right-style: solid;
    border-color: transparent;
    display: flex;
    align-items: center;

    &.common {
      border-color: $color-common;
    }

    &.rare {
      border-color: $color-rare;
    }

    &.epic {
      border-color: $color-epic;
    }

    &.legendary {
      border-color: $color-legendary;
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
      float: left;
      line-height: 1.1;
    }

    > .qty {
      float: left;
    }
  }
</style>