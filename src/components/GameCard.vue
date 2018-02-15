<template>
  <div class="card-container">
    <div :class="['game-card', card.type, { 'disabled': inDeck === 'X 3', 'flash': flash, 'dull': dull }]" @click="selectCard(card)" @contextmenu.prevent="removeCard(card)">
      <div class="card-sprite-block">
        <div :class="['sprite', spriteClass]"></div>
      </div>

      <div v-if="card.attack !== null" class="attack"><i class="icon icon-attack"></i>{{ card.attack }}</div>
      <div v-if="card.health" class="health"><i class="icon icon-health"></i>{{ card.health }}</div>
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
  import { updateHash } from 'utils/hashing'
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
        return `${this.card.type} ${this.card.faction}-sprite sprite-${this.card.id}`
      }
    },

    methods: {
      selectCard (card) {
        if (this.inDeck === 'X 3') return

        this.flashCard()

        this.$store.dispatch('deck/selectCard', { card, qty: 1 })
        updateHash(this.$store.state.deck)
      },

      removeCard (card) {
        if (!this.inDeck) return

        this.flashDull()
        this.$store.dispatch('deck/removeCard', card)
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

  .game-card .sprite {
    transition: filter .4s ease-out;
    transform: scale(2);
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
      position: absolute;
      font-size: 1.1rem;
      left: 15px;

      > .icon {
        margin-left: -10px;
        margin-right: 5px;
        top: 2px;
        position: relative;
      }
    }

    > .attack {
      top: 90px;

      > .icon {
        color: $color-attack;
      }
    }

    > .health {
      top: 125px;

      > .icon {
        color: $color-health;
      }
    }

    > .text {
      color: #90cacf;
      font-size: .8rem;
    }

    > .qty {
      position: absolute;
      bottom: 0;
      width: 100%;
      font-size: .65rem;
      text-align: right;
      padding-right: 15px;
    }
  }

  .card-sprite-block {
    height: 160px;

    > .general, > .minion {
      left: 45px;
      top: 15px;
      position: relative;
    }

    > .spell, > .artifact {
      bottom: 10%;
      left: 38px;
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