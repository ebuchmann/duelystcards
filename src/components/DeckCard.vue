<template>
  <div :class="['deck-card', { 'flash': flash, 'dull': dull }]" @click="selectCard(card)" @contextmenu.prevent="removeCard(card)">
    <card-cost v-show="card.type !== 'general'" :card="card" />
    <div class="name">{{ card.name }}</div>
    <div class="qty">x{{ card.qty }}</div>
    <div :class="spriteClass"></div>
  </div>
</template>

<script>
  import CardCost from 'components/CardCost'
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

    components: {
      CardCost,
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

    > .card-cost {
      margin-left: 10px;
    }

    > .name {
      margin-left: 18px;
      width: 155px;
      line-height: 1.1;
    }

    > .qty {
      
    }
  }
</style>