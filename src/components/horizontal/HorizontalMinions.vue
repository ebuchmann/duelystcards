<template>
  <div class="horizontal-minions">
    <template v-for="card in minions">
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
    computed: {
      minions () {
        return sortBy(this.$store.state.deck.cards, ['cost', 'name']).filter(card => card.type === 'minion')
      },
    },

    methods: {
      getClass (card) {
        return `sprite minion-sm ${card.faction}-sprite ${card.faction}-${card.id}`
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
      width: 80px;
      position: relative;

      > .sprite.minion-sm {
        top: -66px;
      }

      > .sprite > .qty {
        text-align: center;
        bottom: -30px;
        font-size: 1.5rem;
        width: 30px;
        position: absolute;
        border-radius: 12px;
        background: $blue-dark;
        left: 87px;
        opacity: .8;
      }
    }
    
    .sprite.minion-sm {
      transform: scaleX(0.5) scaleY(0.5);
    }
  }

</style>