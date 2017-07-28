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
        return `sprite spell-sm ${card.faction}-sprite sprite-${card.id}`
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
        bottom: 80px;
        width: 120px;
        left: -25px;
        height: 120px;
        left: 0;

        > .qty {
          font-size: .7rem;
          text-align: center;
          position: absolute;
          top: 104px;
          background: #172127;
          width: 20px;
          opacity: .8;
          left: 68px;
          border-radius: 12px;
        }
      }
    }

  }

</style>
