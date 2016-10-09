<template>
  <div :class="['deck-card', { 'flash': flash, 'dull': dull }]" @click="selectCard(card)" @contextmenu.prevent="removeCard(card)">
    <div :class="['cost', card.rarity]">
      <div class="number">{{ card.cost }}</div>
    </div>
    <div class="name">{{ card.name }}</div>
    <div class="qty">x{{ card.qty }}</div>
    <div :class="spriteClass"></div>
  </div>
</template>

<script>
  import updateHash from 'utils/updateHash'

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
        updateHash(this.$store.state.deck)
      },

      removeCard (card) {
        this.$store.dispatch('removeCard', card)
        updateHash(this.$store.state.deck)
      }
    },
  }
</script>

<style lang="sass">
  @import '../css/includes';

  .deck-card {
    background: $dark;
    color: $light;
    height: 43px;
    margin-top: 3px;
    position: relative;
    display: flex;
    align-items: center;

    > .cost {
      position: relative;
      width: 32px; 
      height: 18.48px;
      background-color: #292929;
      margin: 9.24px 0;
      margin-left: 10px;
      border-left-style: solid;
      border-right-style: solid;
      border-left-width: 1px;
      border-right-width: 1px;

      &.basic, &.basic::before, &.basic::after {
        border-color: $color-basic;
      }

      &.common, &.common::before, &.common::after {
        border-color: $color-common;
      }

      &.rare, &.rare::before, &.rare::after {
        border-color: $color-rare;
      }

      &.epic, &.epic::before, &.epic::after {
        border-color: $color-epic;
      }

      &.legendary, &.legendary::before, &.legendary::after {
        border-color: $color-legendary;
      }

      > .number {
        z-index: 200;
        width: 30px;
        line-height: 1.2;
        position: relative;
        text-align: center;
      }

      &::before,
      &::after {
        content: "";
        position: absolute;
        z-index: 1;
        width: 22.63px;
        height: 22.63px;
        -webkit-transform: scaleY(0.5774) rotate(-45deg);
        -ms-transform: scaleY(0.5774) rotate(-45deg);
        transform: scaleY(0.5774) rotate(-45deg);
        background-color: inherit;
        left: 3.6863px;
      }

      &::before {
        top: -11.3137px;
        border-top-style: solid;
        border-top-width: 1.4142px;
        border-right-style: solid;
        border-right-width: 1.4142px;
      }

      &::after {
        bottom: -11.3137px;
        border-bottom-style: solid;
        border-bottom-width: 1.4142px;
        border-left-style: solid;
        border-left-width: 1.4142px;
      }
    }

    > .name {
      margin-left: 18px;
      width: 165px;
      line-height: 1.1;
    }

    > .qty {
      
    }
  }
</style>