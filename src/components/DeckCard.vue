<template>
  <div :class="['deck-card', { 'flash': flash, 'dull': dull }]" @click="selectCard(card)" @contextmenu.prevent="removeCard(card)">
    <div class="cost">{{ card.cost }}</div>
    <div class="name">{{ card.name }} x{{ card.qty }}</div>
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
    height: 40px;
    margin: 3px 0;
    font-family: LatoRegular;

    > .cost {
      line-height: 40px;
      text-align: center;
      font-weight: bold;
      width: 40px;
      float: left;
    }

    > .name {
      color: #fff;
      line-height: 40px;
      text-indent: 10px;
    }
  }
</style>