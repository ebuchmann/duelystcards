<template>
  <div class="mana-curve">
    <div class="card-counts">
      <span class="mana" v-for="item in curve">
        <div class="bar" :style="{ height: `${percentage(item, highestValue)}%` }">
          <div class="count">{{ item }}</div>
        </div>
      </span>
    </div>
    <div class="mana-numbers">
      <span class="number">0</span>
      <span class="number">1</span>
      <span class="number">2</span>
      <span class="number">3</span>
      <span class="number">4</span>
      <span class="number">5</span>
      <span class="number">6</span>
      <span class="number">7</span>
      <span class="number">8</span>
      <span class="number">9</span>
    </div>
  </div>
</template>

<script>
  export default {
    methods: {
      percentage(value, highestValue) {
        return value > 0 ? ((value / highestValue) * 100).toFixed(0) : 0
      },
    },

    computed: {
      totalCards() {
        return this.$store.state.deck.totalCards
      },

      curve() {
        const arr = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
        this.$store.state.deck.cards.forEach(card => {
          arr[card.cost] += card.qty
        })

        return arr
      },

      highestValue () {
        return Math.max.apply(Math, this.curve)
      }
    },
  }
</script>

<style lang="sass">
  @import '../css/includes';
  
  .mana-curve {
    position: relative;
  }

  .card-counts {
    height: 70px;
    position: relative;

    > .mana {
      width: 10%;
      display: inline-block;

      > .bar {
        background: #01d6f3;
        position: absolute;
        bottom: 0;
        width: calc(10% - 2px);
        transition: all .3s ease-out;

        > .count {
          text-align: center;
          margin-top: -25px;
        }
      }

    }
  }

  .mana-numbers {
    border-top: 1px solid #90cacf;
    border-bottom: 1px solid #90cacf;
    width: 100%;
    @include clearfix;

    > .number {
      width: 10%;
      display: inline-block;
      text-align: center;
      font-size: .8rem;
      float: left;
    }
  }
</style>