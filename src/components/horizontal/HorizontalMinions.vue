<template>
  <div class="horizontal-minions">
    <template v-for="card in cards">
      <div class="sprite-container">
        <div :class="getClass(card)">
          <span class="qty">x{{ card.qty }}</span>
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
        return `sprite minion-sm ${card.faction}-sprite sprite-${card.id}`
      },
    },
  }
</script>

<style lang="sass">
  @import '../../css/includes';

  .horizontal-minions {
    height: 80px;
    display: flex;
    position: relative;

    > .sprite-container {
      width: 75px;
      position: relative;

      > .sprite.minion-sm {
        bottom: 50px;
        left: 0px;
      }

      > .sprite > .qty {
        text-align: center;
        top: 100px;
        font-size: .8rem;
        width: 30px;
        position: absolute;
        border-radius: 12px;
        background: #172127;
        left: 60px;
        opacity: .8;
      }
    }

    .sprite.minion-sm {
      transform: scaleX(1) scaleY(1);
    }
  }

</style>
