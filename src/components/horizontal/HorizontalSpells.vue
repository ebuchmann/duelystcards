<template>
  <div class="horizontal-spells">
    <template v-for="card in cards">
      <div class="sprite-container">
        <div :class="getClass(card)">
          <div class="qty">x{{ card.qty }}</div>
        </div>
      </div>
    </template>
  </div>
</template>

<script>
  import sortBy from 'lodash.sortby'

  export default {
    props: ['cards'],

    methods: {
      getClass (card) {
        return `sprite spell-sm ${card.faction}-sprite ${card.faction}-${card.id}`
      },
    },
  }
</script>

<style lang="sass">
  @import '../../css/includes';

  .horizontal-spells {
    height: 58px;
    position: relative;

    > .sprite-container {
      width: 60px;
      height: 58px;
      position: relative;
      float: left;

      > .sprite {
        > .qty {
          font-size: 1.2rem;
          text-align: center;
          position: absolute;
          top: 66px;
          background: $blue-dark;
          width: 25px;
          opacity: .8;
          right: 0;
          border-radius: 12px;
        }
      }
    }

  }

</style>