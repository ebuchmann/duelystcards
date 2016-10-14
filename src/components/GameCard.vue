<template>
  <div class="card-container">
    <div :class="['game-card', card.type, { 'disabled': inDeck === 'X 3', 'flash': flash, 'dull': dull }]" @click="selectCard(card)" @contextmenu.prevent="removeCard(card)">
      <div class="card-sprite-block">
        <div :class="['sprite', spriteClass]"></div>
      </div>

      <div v-if="card.attack || card.attack >= 0" class="attack">{{ card.attack }}</div>
      <div v-if="card.health" class="health">{{ card.health }}</div>
      <div class="qty">{{ inDeck }}</div>

      <div class="card-name-block">
        <card-cost v-show="card.type !== 'general'" :card="card" />
        <div class="name">{{ card.name }}</div>
        <div class="type" :class="card.type">{{ card.race || card.type }}</div>
      </div>

      <div class="text" v-html="card.text"></div>
    </div>
  </div>
</template>

<script>
  import updateHash from 'utils/updateHash'
  import CardCost from 'components/CardCost'

  export default {
    props: ['card'],

    data () {
      return {
        flash: false,
        dull: false,
        timeout: null,
      }
    },

    computed: {
      inDeck () {
        const matchingCard = this.$store.state.deck.cards.find(card => card.name === this.card.name)
        if (matchingCard) return `X ${matchingCard.qty}`
      },

      spriteClass () {
        return `${this.card.type} ${this.card.faction}-sprite ${this.card.faction}-${this.card.id}`
      }
    },

    methods: {
      selectCard (card) {
        if (this.inDeck === 'X 3') return

        this.flashCard()

        this.$store.dispatch('selectCard', { card, qty: 1 })
        updateHash(this.$store.state.deck)
      },

      removeCard (card) {
        if (!this.inDeck) return

        this.flashDull()
        this.$store.dispatch('removeCard', card)
        updateHash(this.$store.state.deck)
      },

      flashCard () {
        clearTimeout(this.timeout)
        this.flash = true
        this.timeout = setTimeout(() => {
          this.flash = false
        }, 200)
      },

      flashDull () {
        this.dull = true
        setTimeout(() => {
          this.dull = false
        }, 200)
      }
    },

    components: {
      CardCost,
    },
  }
</script>

<style lang="sass">
  @import '../css/includes';

  @keyframes flashBrightness{
    from{-webkit-filter:brightness(5);filter:brightness(5)}
    to{-webkit-filter:brightness(1);filter:brightness(1)}
  }

  @keyframes flashDull{
    from{-webkit-filter:brightness(2);filter:brightness(2)}
    to{-webkit-filter:brightness(1);filter:brightness(1)}
  }

  .flash {
    animation: flashBrightness .2s;
  }

  .dull {
    animation: flashDull .2s;
  }

  .card-container {
    flex: 0 0 50%;
    padding: 16px 15px;
    margin-bottom: 15px;

    @include breakpoint(md) {
      flex: 0 0 33%;
    }

    @include breakpoint(lg) {
      flex: 0 0 25%;
    }

    @include breakpoint(vl) {
      flex: 0 0 20%;
    }
  }

  .game-card .sprite {
    transition: filter .4s ease-out;
  }

  .game-card:hover .sprite {
    -webkit-filter: brightness(1.15);
  }
  
  .game-card {
    position: relative;
    user-select: none;
    -webkit-user-select: none;
    height: 100%;
    border-bottom: 1px solid $blue;
    transition: $all-medium;
    padding: 0 15px 15px 15px;

    &:hover {
      border-bottom: 1px solid $blue-light;
      cursor: pointer;
    }

    > .attack, > .health {
      width: 32px;
      line-height: 32px;
      text-align: center;
      top: 166px;
      position: absolute;
      border-width: 2px;
      border-style: solid;
      border-radius: 50%;
      left: 15px;
    }

    > .attack {
      top: 60px;
      border-color: yellow;
    }

    > .health {
      top: 110px;
      border-color: red;
    }

    > .text {
      color: #90cacf;
      font-size: .8rem;
      margin-bottom: 15px;
    }

    > .qty {
      position: absolute;
      bottom: 0;
      width: 100%;
      font-size: .65rem;
      text-align: right;
    }
  }

  .card-sprite-block {
    height: 160px;

    > .general, > .minion {
      top: -25px;
      position: relative;
    }

    > .spell, > .artifact {
      top: 40px;
      position: relative;
    }
  }

  .card-name-block {
    margin-bottom: 15px;
    @include clearfix;

    > .card-cost {
      float: left;
    }

    > .name, > .type {
      text-transform: uppercase;
      margin-left: 45px;
    }

    > .name {
      font-size: .8rem;
    }

    > .type {
      color: #90cacf;
      font-size: .7rem;

      &.artifact {
        color: #edd144;
      }
    }
  }
</style>