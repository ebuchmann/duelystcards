<template>
  <div :class="['mana-curve', currentFaction]">
    <div class="card-counts">
      <span class="mana" v-for="item in curve">
        <div class="bar" :style="{ height: `${percentage(item, highestValue)}%` }">
          <div class="count" v-show="item > 0">{{ item }}</div>
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
  import { mapGetters } from 'vuex'
  export default {
    methods: {
      percentage (value, highestValue) {
        return value > 0 ? ((value / highestValue) * 100).toFixed(0) : 0
      },
    },

    computed: {
      totalCards () {
        return this.$store.state.deck.totalCards
      },

      curve () {
        const arr = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
        this.$store.state.deck.cards.forEach(card => {
          card.cost > 8
            ? arr[9] += card.qty
            : arr[card.cost] += card.qty
        })

        return arr
      },

      highestValue () {
        return Math.max.apply(Math, this.curve)
      },

      ...mapGetters(['currentFaction']),
    },
  }
</script>

<style lang="sass">
  @import '../css/includes';
  
  .mana-curve {
    position: relative;
    margin-bottom: 10px;

    &.abyssian { color: $color-abyssian; }
    &.lyonar { color: $color-lyonar; }
    &.magmar { color: $color-magmar; }
    &.songhai { color: $color-songhai; }
    &.vanar { color: $color-vanar; }
    &.vetruvian { color: $color-vetruvian; }
  }

  .card-counts {
    height: 50px;
    position: relative;

    > .mana {
      width: 10%;
      display: inline-block;

      > .bar {
        background: currentColor;
        position: absolute;
        bottom: 2px;
        width: calc(10% - 2px);
        transition: all .3s ease-out;

        > .count {
          text-align: center;
          margin-top: -20px;
          font-size: .9rem;
        }
      }

    }
  }

  .mana-numbers {
    border-top: 1px solid currentColor;
    border-bottom: 1px solid currentColor;
    width: 100%;
    @include clearfix;

    > .number {
      width: 10%;
      display: inline-block;
      text-align: center;
      font-size: .8rem;
      float: left;
      padding-top: 2px;
    }
  }
</style>